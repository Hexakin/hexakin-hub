type MarkProps = {
  title?: string;
};

export function Mark({ title }: MarkProps) {
  return (
    <svg
      className="mark"
      width="23"
      height="18"
      viewBox="0 0 26 20"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M3 3 L17 17 M17 3 L3 17 M9 3 L23 17 M23 3 L9 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
