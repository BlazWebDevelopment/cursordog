type AnimatedHeadlineProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

/**
 * Renders a headline whose letters slide up out of a clipping mask on first
 * paint. Pure CSS so the animation starts before hydration.
 */
export default function AnimatedHeadline({
  text,
  className = "",
  delay = 0,
  stagger = 55,
}: AnimatedHeadlineProps) {
  const letters = [...text];

  return (
    <span className={className} aria-label={text} role="text">
      {letters.map((letter, index) => (
        <span key={`${letter}-${index}`} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <span
            aria-hidden="true"
            className="animate-rise-clip inline-block"
            style={{ animationDelay: `${delay + index * stagger}ms` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        </span>
      ))}
    </span>
  );
}
