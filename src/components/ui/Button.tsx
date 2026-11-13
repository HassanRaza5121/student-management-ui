import type { ReactNode } from "react"; // ReactNode = anything React can render (text, elements, ...)
import styles from "./Button.module.css"; // CSS Module: "styles" is an object of scoped class names

type ButtonVariant = "primary" | "outline" | "ghost"; // the 3 allowed looks

interface ButtonProps {
  children: ReactNode; // REQUIRED: whatever is written between <Button> and </Button>
  variant?: ButtonVariant; // OPTIONAL: the "?" means the parent may skip it
  type?: "button" | "submit"; // OPTIONAL: the HTML button type
  disabled?: boolean; // OPTIONAL: true makes the button unclickable
  onClick?: () => void; // OPTIONAL function prop: a function that takes nothing and returns nothing
}

function Button({
  children, // the content inside the button
  variant = "primary", // DEFAULT VALUE: used when the parent does not pass variant
  type = "button", // default "button" stops accidental form submits
  disabled = false, // default: the button is enabled
  onClick, // may be undefined, which is fine
}: ButtonProps) {
  // Join two class names: the base one, plus the one for this variant.
  // styles[variant] looks up styles.primary, styles.outline or styles.ghost.
  const className = `${styles.button} ${styles[variant]}`;

  return (
    <button
      className={className} // apply the scoped classes
      type={type} // pass the type through
      disabled={disabled} // pass disabled through
      onClick={onClick} // when clicked, run the function the parent gave us
    >
      {children} {/* show whatever the parent put inside */}
    </button>
  );
}

export default Button; // so other files can import it