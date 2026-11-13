import type { ReactNode } from "react"; // type for the children prop
import styles from "./Card.module.css"; // scoped styles for the card

interface CardProps {
  children: ReactNode; // REQUIRED: the card's content (this is COMPOSITION in action)
  hoverable?: boolean; // OPTIONAL: lift the card when the mouse is over it
}

function Card({ children, hoverable = false }: CardProps) {
  // Conditional class: add "hoverable" only if the prop is true.
  const className = hoverable ? `${styles.card} ${styles.hoverable}` : styles.card;

  // Card does not know WHAT is inside. It only provides the look (border, shadow, padding).
  return <div className={className}>{children}</div>;
}

export default Card;