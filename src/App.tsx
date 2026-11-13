import { useState } from "react"; // hook that lets a component remember a value
import Section from "./components/ui/Section"; // layout block with a title
import Modal from "./components/ui/Modal"; // reusable popup
import StatCard from "./components/StatCard"; // one statistic box
import StudentCard from "./components/StudentCard"; // one student box
import StudentProfile from "./components/StudentProfile"; // profile popup content
import MessageForm from "./components/MessageForm"; // message popup content
import { students } from "./data/students"; // the sample data
import type { Student } from "./types/student"; // the student type
import styles from "./App.module.css"; // scoped styles for this page

function App() {
  // STATE 1: whose PROFILE is open. null means "no profile popup".
  const [profileStudent, setProfileStudent] = useState<Student | null>(null);
  // STATE 2: whose MESSAGE box is open. null means "no message popup".
  const [messageStudent, setMessageStudent] = useState<Student | null>(null);

  // These functions are handed DOWN to children as props.
  // The child CALLS them when a button is clicked.
  const handleView = (student: Student) => setProfileStudent(student); // open profile
  const handleCloseProfile = () => setProfileStudent(null); // close profile
  const handleMessage = (student: Student) => setMessageStudent(student); // open message box
  const handleCloseMessage = () => setMessageStudent(null); // close message box

  // DERIVED DATA: calculated from the list, never typed by hand.
  const total = students.length; // how many students
  const activeCount = students.filter((s) => s.status === "active").length; // keep only active, then count
  const averageGpa = (
    students.reduce((sum, s) => sum + s.gpa, 0) / total // add all GPAs, divide by the count
  ).toFixed(2); // round to 2 decimals (this gives a string)
  const courseCount = new Set(students.map((s) => s.course)).size; // Set removes duplicates

  return (
    <main className={styles.page}>
      <header>
        <h1 className={styles.title}>Student Dashboard</h1>
        <p className={styles.subtitle}>
          Browse students, track enrollment and view performance at a glance.
        </p>
      </header>

      <Section title="Overview">
        <div className={styles.statGrid}>
          {/* Same component 4 times, different props each time = reusability */}
          <StatCard label="Total students" value={total} icon="🎓" />
          <StatCard label="Active" value={activeCount} icon="✅" hint="Currently enrolled" />
          <StatCard label="Average GPA" value={averageGpa} icon="📈" hint="Out of 4.0" />
          <StatCard label="Courses" value={courseCount} icon="📚" />
        </div>
      </Section>

      <Section title="Students" description={`${total} students in the directory`}>
        <ul className={styles.studentGrid}>
          {/* .map() turns each student object into a card. */}
          {students.map((student) => (
            // "key" must be unique per item so React can track list items.
            <li key={student.id}>
              <StudentCard
                student={student} // pass the data down
                onView={handleView} // "View profile" button (no parentheses!)
                onMessage={handleMessage} // "Message" button
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* Profile popup: rendered only while a student is selected. */}
      {profileStudent && (
        <Modal title="Student profile" onClose={handleCloseProfile}>
          <StudentProfile student={profileStudent} onClose={handleCloseProfile} />
        </Modal>
      )}

      {/* Message popup: rendered only while a student is selected for messaging. */}
      {messageStudent && (
        <Modal title={`Message ${messageStudent.name}`} onClose={handleCloseMessage}>
          <MessageForm student={messageStudent} onClose={handleCloseMessage} />
        </Modal>
      )}
    </main>
  );
}

export default App;