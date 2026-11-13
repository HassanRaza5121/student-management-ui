import { useState } from "react"; // lets the component remember "copied"
import Badge from "./ui/Badge"; // reusable label
import Button from "./ui/Button"; // reusable button
import { statusTone } from "../utils/studentStatus"; // status -> badge color
import { getGpaStanding, getInitials } from "../utils/studentHelpers"; // helper functions
import type { Student } from "../types/student"; // the student type
import styles from "./StudentProfile.module.css"; // scoped styles

interface StudentProfileProps {
  student: Student; // REQUIRED: whose profile to show
  onClose: () => void; // REQUIRED function prop: the parent decides what "close" does
}

function StudentProfile({ student, onClose }: StudentProfileProps) {
  // STATE: true for 2 seconds after the email is copied.
  const [copied, setCopied] = useState(false);

  // Derived values: calculated from the student, never typed by hand.
  const standing = getGpaStanding(student.gpa); // { label, tone }
  const gpaPercent = (student.gpa / 4) * 100; // 3.0 out of 4.0 -> 75 (%)

  // Runs when "Copy email" is clicked.
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(student.email); // copy to the clipboard
      setCopied(true); // button text changes
      setTimeout(() => setCopied(false), 2000); // change it back after 2 seconds
    } catch {
      alert(`Email: ${student.email}`); // fallback if the browser blocks clipboard access
    }
  };

  return (
    <div>
      {/* TOP: avatar, name, email, status */}
      <div className={styles.hero}>
        <div className={styles.avatar} aria-hidden="true">
          {getInitials(student.name)}
        </div>
        <div className={styles.heroText}>
          <h3 className={styles.name}>{student.name}</h3>
          <p className={styles.email}>{student.email}</p>
          <Badge tone={statusTone[student.status]}>{student.status}</Badge>
        </div>
      </div>

      {/* GPA and attendance as two small tiles */}
      <div className={styles.tiles}>
        <div className={styles.tile}>
          <p className={styles.tileLabel}>GPA</p>
          <p className={styles.tileValue}>{student.gpa.toFixed(1)}</p>
        </div>
        <div className={styles.tile}>
          <p className={styles.tileLabel}>Attendance</p>
          <p className={styles.tileValue}>{student.attendance}%</p>
        </div>
      </div>

      {/* Academic standing with a progress bar */}
      <div className={styles.standingRow}>
        <span className={styles.tileLabel}>Academic standing</span>
        <Badge tone={standing.tone}>{standing.label}</Badge>
      </div>
      <div
        className={styles.bar}
        role="progressbar" // tells screen readers this is a progress bar
        aria-label="GPA out of 4.0"
        aria-valuenow={student.gpa}
        aria-valuemin={0}
        aria-valuemax={4}
      >
        {/* inline style, because the width depends on the data */}
        <div className={styles.barFill} style={{ width: `${gpaPercent}%` }} />
      </div>

      {/* EXTRA INFO list (dl / dt / dd = "label: value" pairs) */}
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Student ID</dt>
          <dd>{student.studentId}</dd>
        </div>
        <div className={styles.row}>
          <dt>Course</dt>
          <dd>{student.course}</dd>
        </div>
        <div className={styles.row}>
          <dt>City</dt>
          <dd>{student.city}</dd>
        </div>
        <div className={styles.row}>
          <dt>Enrolled</dt>
          <dd>{student.enrolledYear}</dd>
        </div>
      </dl>

      <p className={styles.bio}>{student.bio}</p>

      {/* ACTION BUTTONS: each one runs a function when clicked */}
      <div className={styles.actions}>
        <Button onClick={handleCopyEmail}>
          {copied ? "Email copied!" : "Copy email"}
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default StudentProfile;