import type { ReactNode } from "react"; // type for anything renderable
import styles from "./Badge.module.css"; // scoped styles for the badge

// "export" because StudentCard also needs this type.
export type BadgeTone = "success" | "warning" | "info" | "neutral"; // allowed colors

interface BadgeProps {
  children: ReactNode; // REQUIRED: the text inside the badge
  tone?: BadgeTone; // OPTIONAL: which color to use
}

function Badge({ children, tone = "neutral" }: BadgeProps) {
  // Combine the base class with the tone class, e.g. "badge success".
  const className = `${styles.badge} ${styles[tone]}`;

  return <span className={className}>{children}</span>; // a small inline label
}

export default Badge;