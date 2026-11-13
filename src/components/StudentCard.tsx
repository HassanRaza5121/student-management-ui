import Card from "./ui/Card"; // the box
import Badge from "./ui/Badge"; // the status label
import type { BadgeTone } from "./ui/Badge"; // the allowed tone strings
import Button from "./ui/Button"; // the action buttons
import type { Student, StudentStatus } from "../types/student"; // our data types
import styles from "./StudentCard.module.css"; // scoped styles

interface StudentCardProps {
  student: Student; // REQUIRED: the whole student object
  onView: (student: Student) => void; // REQUIRED function prop: gets a student, returns nothing
  onMessage?: (student: Student) => void; // OPTIONAL function prop
}

// A lookup table: for each status, which badge color to use.
// "Record<StudentStatus, BadgeTone>" forces us to cover ALL three statuses.
const statusTone: Record<StudentStatus, BadgeTone> = {
  active: "success", // green
  inactive: "warning", // amber
  graduated: "info", // blue
};

// A small helper: "Ayesha Noor" -> "AN".
function getInitials(name: string): string {
  return name
    .split(" ") // ["Ayesha", "Noor"]
    .map((part) => part[0]) // ["A", "N"]
    .slice(0, 2) // keep at most 2 letters
    .join("") // "AN"
    .toUpperCase(); // make sure they are capitals
}

function StudentCard({ student, onView, onMessage }: StudentCardProps) {
  return (
    <Card hoverable>
      <div className={styles.top}>
        <div className={styles.avatar} aria-hidden="true">
          {getInitials(student.name)} {/* initials instead of a photo */}
        </div>
        <div className={styles.identity}>
          <h3 className={styles.name}>{student.name}</h3>
          <p className={styles.email}>{student.email}</p>
        </div>
      </div>

      <dl className={styles.details}>
        {/* dl / dt / dd is the correct HTML for "label: value" pairs */}
        <div>
          <dt>Course</dt>
          <dd>{student.course}</dd>
        </div>
        <div>
          <dt>GPA</dt>
          <dd>{student.gpa.toFixed(1)}</dd> {/* always show one decimal, e.g. 3.0 */}
        </div>
      </dl>

      {/* Look up the right color for this student's status */}
      <Badge tone={statusTone[student.status]}>{student.status}</Badge>

      <div className={styles.actions}>
        {/* Wrap in an arrow function so we can pass the student when the click happens. */}
        <Button onClick={() => onView(student)}>View profile</Button>

        {/* Render the Message button ONLY if the parent gave us onMessage. */}
        {onMessage && (
          <Button variant="outline" onClick={() => onMessage(student)}>
            Message
          </Button>
        )}
      </div>
    </Card>
  );
}

export default StudentCard;