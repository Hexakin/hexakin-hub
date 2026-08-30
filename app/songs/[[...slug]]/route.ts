const GONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Gone</title>
</head>
<body>
<p>Gone.</p>
</body>
</html>
`;

const goneHeaders = {
  "content-type": "text/html; charset=utf-8",
  "x-robots-tag": "noindex",
};

export function GET() {
  return new Response(GONE_HTML, {
    status: 410,
    headers: goneHeaders,
  });
}

export function HEAD() {
  return new Response(null, {
    status: 410,
    headers: goneHeaders,
  });
}
