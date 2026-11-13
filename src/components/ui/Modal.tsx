import { useEffect } from "react"; // hook for code that runs after render
import type { ReactNode } from "react"; // type for the children prop
import styles from "./Modal.module.css"; // scoped styles

interface ModalProps {
  title: string; // REQUIRED: heading at the top (also read by screen readers)
  onClose: () => void; // REQUIRED function prop: the parent decides what "close" does
  children: ReactNode; // REQUIRED: whatever the modal should contain
}

function Modal({ title, onClose, children }: ModalProps) {
  // useEffect runs AFTER the modal appears on screen.
  useEffect(() => {
    // Runs on every key press.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose(); // Esc closes the modal
    };

    document.addEventListener("keydown", handleKeyDown); // start listening

    // CLEANUP: runs when the modal disappears, so the listener doesn't stay forever.
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]); // re-run only if onClose changes

  return (
    // The dark background. Clicking it closes the modal.
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog} // the white box
        role="dialog" // tells screen readers "this is a dialog"
        aria-modal="true" // the rest of the page is inactive while open
        aria-label={title} // the accessible name of the dialog
        // A click INSIDE the box must not reach the overlay, or it would close.
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.close} // the X button
            onClick={onClose} // run the parent's close function
            aria-label="Close" // screen readers can't read "✕", so we name it
          >
            ✕
          </button>
        </div>
        {children} {/* the content the parent passed in */}
      </div>
    </div>
  );
}

export default Modal;