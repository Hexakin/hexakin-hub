export const PEWTER = {
  highlight: [244, 241, 233] as const,
  mid: [168, 164, 154] as const,
  shadow: [42, 42, 51] as const,
};

export const CRAWL_PERIOD_MS = 12000;
export const POUR_MS = 1100;

export type MetalField = {
  width: number;
  height: number;
  alpha: Uint8ClampedArray;
  heightMap: Float32Array;
  nx: Float32Array;
  ny: Float32Array;
  nz: Float32Array;
  pit: Float32Array;
  solid: Uint32Array;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function hash2(x: number, y: number) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}

function valueNoise(x: number, y: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const a = hash2(x0, y0);
  const b = hash2(x0 + 1, y0);
  const c = hash2(x0, y0 + 1);
  const d = hash2(x0 + 1, y0 + 1);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

function fbm(x: number, y: number) {
  return (
    valueNoise(x, y) * 0.58 +
    valueNoise(x * 2.13, y * 2.13) * 0.28 +
    valueNoise(x * 4.27, y * 4.27) * 0.14
  );
}

function boxBlur(
  src: Float32Array,
  width: number,
  height: number,
  radius: number,
) {
  const tmp = new Float32Array(src.length);
  const out = new Float32Array(src.length);
  const span = radius * 2 + 1;

  for (let y = 0; y < height; y++) {
    let sum = 0;
    const row = y * width;
    for (let x = -radius; x <= radius; x++) {
      sum += src[row + clamp(x, 0, width - 1)];
    }
    for (let x = 0; x < width; x++) {
      tmp[row + x] = sum / span;
      sum +=
        src[row + clamp(x + radius + 1, 0, width - 1)] -
        src[row + clamp(x - radius, 0, width - 1)];
    }
  }

  for (let x = 0; x < width; x++) {
    let sum = 0;
    for (let y = -radius; y <= radius; y++) {
      sum += tmp[clamp(y, 0, height - 1) * width + x];
    }
    for (let y = 0; y < height; y++) {
      out[y * width + x] = sum / span;
      sum +=
        tmp[clamp(y + radius + 1, 0, height - 1) * width + x] -
        tmp[clamp(y - radius, 0, height - 1) * width + x];
    }
  }

  return out;
}

export function measureWord(el: HTMLElement) {
  const style = getComputedStyle(el);
  return {
    font: `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`,
    letterSpacing: style.letterSpacing,
    text: el.textContent ?? "",
  };
}

export function stampWord(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  font: string,
  letterSpacing: string,
  text: string,
) {
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if ("letterSpacing" in ctx) {
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
      letterSpacing;
  }
  ctx.fillStyle = "#fff";
  ctx.fillText(text, width / 2, height / 2 + height * 0.02);
  ctx.restore();
}

export function buildMetalField(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): MetalField {
  const pixels = ctx.getImageData(0, 0, width, height).data;
  const count = width * height;
  const alpha = new Uint8ClampedArray(count);
  const seed = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const a = pixels[i * 4 + 3];
    alpha[i] = a;
    seed[i] = a / 255;
  }

  const relief = boxBlur(seed, width, height, Math.max(2, Math.round(height / 90)));
  const heightMap = new Float32Array(count);
  const nx = new Float32Array(count);
  const ny = new Float32Array(count);
  const nz = new Float32Array(count);
  const pit = new Float32Array(count);
  const solidIndex: number[] = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      if (alpha[i] < 8) {
        continue;
      }
      const coarse = fbm(x * 0.055, y * 0.07);
      const fine = valueNoise(x * 0.22, y * 0.24);
      const crater = Math.max(0, coarse - 0.62) * 1.8;
      pit[i] = clamp(coarse * 0.72 + fine * 0.28 + crater, 0, 1);
      heightMap[i] = relief[i] * 1.22 - pit[i] * 0.62 * (alpha[i] / 255);
      solidIndex.push(i);
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      if (alpha[i] < 8) {
        nz[i] = 1;
        continue;
      }
      const left = heightMap[y * width + Math.max(0, x - 1)];
      const right = heightMap[y * width + Math.min(width - 1, x + 1)];
      const up = heightMap[Math.max(0, y - 1) * width + x];
      const down = heightMap[Math.min(height - 1, y + 1) * width + x];
      const dx = left - right;
      const dy = up - down;
      const inv = 1 / Math.hypot(dx * 1.35, dy * 1.35, 0.55);
      nx[i] = dx * 1.35 * inv;
      ny[i] = dy * 1.35 * inv;
      nz[i] = 0.55 * inv;
    }
  }

  return {
    width,
    height,
    alpha,
    heightMap,
    nx,
    ny,
    nz,
    pit,
    solid: Uint32Array.from(solidIndex),
  };
}

function mixChannel(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function pewterTone(light: number) {
  const lift = clamp(light, 0, 1);
  const shadowToMid = clamp(lift * 1.35, 0, 1);
  const midToHi = clamp((lift - 0.62) / 0.38, 0, 1) * 0.72;
  return [
    mixChannel(
      mixChannel(PEWTER.shadow[0], PEWTER.mid[0], shadowToMid),
      PEWTER.highlight[0],
      midToHi,
    ),
    mixChannel(
      mixChannel(PEWTER.shadow[1], PEWTER.mid[1], shadowToMid),
      PEWTER.highlight[1],
      midToHi,
    ),
    mixChannel(
      mixChannel(PEWTER.shadow[2], PEWTER.mid[2], shadowToMid),
      PEWTER.highlight[2],
      midToHi,
    ),
  ] as const;
}

function pourWave(x: number, time: number) {
  return (
    Math.sin(x * 0.038 + time * 0.01) * 11 +
    Math.sin(x * 0.09 + 1.7) * 5.5 +
    Math.sin(x * 0.17 + time * 0.004) * 2.2
  );
}

export function paintMetal(
  ctx: CanvasRenderingContext2D,
  field: MetalField,
  elapsed: number,
  pour: number,
) {
  const { width, height, alpha, nx, ny, nz, pit, solid } = field;
  const image = ctx.createImageData(width, height);
  const data = image.data;
  const span = width + height;
  const crawl = ((elapsed % CRAWL_PERIOD_MS) / CRAWL_PERIOD_MS) * span;
  const pourLine = pour >= 1 ? height + 32 : pour * height;
  const lx = -0.48;
  const ly = -0.58;
  const lz = 0.66;

  for (let s = 0; s < solid.length; s++) {
    const i = solid[s];
    const x = i % width;
    const y = (i - x) / width;
    const a = alpha[i];

    const lip = pourLine + pourWave(x, elapsed);
    if (y > lip) {
      continue;
    }

    const ndotl = Math.max(0, nx[i] * lx + ny[i] * ly + nz[i] * lz);
    const hx = lx;
    const hy = ly;
    const hz = lz + 1;
    const invH = 1 / Math.hypot(hx, hy, hz);
    const spec = Math.pow(
      Math.max(0, nx[i] * hx * invH + ny[i] * hy * invH + nz[i] * hz * invH),
      14,
    );
    const band = x * 0.78 + y * 0.32 - crawl;
    const crawlLite =
      Math.max(0, 1 - Math.abs(band) / (width * 0.16)) ** 1.35 * 0.72;
    const pitted = 1 - pit[i] * 0.42;

    const tone = pewterTone((ndotl * 0.82 + spec * 0.2) * pitted + crawlLite);
    const molten = pour < 1 && y > lip - 14 ? (14 - (lip - y)) / 14 : 0;
    const o = i * 4;
    data[o] = mixChannel(tone[0], PEWTER.highlight[0], molten * 0.7);
    data[o + 1] = mixChannel(tone[1], PEWTER.highlight[1], molten * 0.55);
    data[o + 2] = mixChannel(tone[2], 196, molten * 0.22);
    data[o + 3] = a;
  }

  ctx.putImageData(image, 0, 0);
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
