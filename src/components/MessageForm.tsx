import { useState } from "react"; // lets the component remember what the user typed
import type { ChangeEvent } from "react"; // the TypeScript type of a textarea "change" event
import Button from "./ui/Button"; // our reusable button
import type { Student } from "../types/student"; // the student type
import styles from "./MessageForm.module.css"; // scoped styles

interface MessageFormProps {
  student: Student; // REQUIRED: who the message is for
  onClose: () => void; // REQUIRED function prop: the parent decides what "close" does
}

const MAX_LENGTH = 1000; // longest message we allow

function MessageForm({ student, onClose }: MessageFormProps) {
  // STATE: what is currently typed in the box. Starts as an empty string.
  const [message, setMessage] = useState("");

  return (
    <div className={styles.form}>
      {/* Shows who the message is for (plain text, not an input) */}
      <p className={styles.to}>
        To: <strong>{student.name}</strong>
      </p>

      {/* label + htmlFor: clicking the label focuses the box, and screen readers read it */}
      <label className={styles.label} htmlFor="message-body">
        Your message
      </label>
      <textarea
        id="message-body" // must match the label's htmlFor
        className={styles.textarea}
        value={message} // CONTROLLED INPUT: React state decides what the box shows
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(event.target.value) // on every keystroke, save the typed text in state
        }
        placeholder="Type your message here..." // grey hint text shown while the box is empty
        maxLength={MAX_LENGTH} // stops typing at the limit
        rows={5} // starting height: 5 lines
        autoFocus // the cursor is ready to type as soon as the popup opens
      />

      {/* Live character counter, updates as you type */}
      <p className={styles.counter}>
        {message.length} / {MAX_LENGTH}
      </p>

      <div className={styles.actions}>
        {/* Close the popup. onClose is the function App gave us. */}
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default MessageForm;