import { useState } from "react"; // hook that lets a component remember a value
import Section from "./components/ui/Section"; // layout block with a title
import StatCard from "./components/StatCard"; // one statistic box
import StudentCard from "./components/StudentCard"; // one student box
import { students } from "./data/students"; // the sample data
import type { Student } from "./types/student"; // the student type
import styles from "./App.module.css"; // scoped styles for this page

function App() {
  // STATE: a value React remembers. When it changes, the page updates.
  const [message, setMessage] = useState("Choose an action on a student card.");

  // These two functions are handed DOWN to children as props.
  // The child CALLS them when a button is clicked.
  const handleView = (student: Student) => {
    setMessage(`Viewing profile of ${student.name}`); // change the message
  };
  const handleMessage = (student: Student) => {
    setMessage(`Opening a message to ${student.email}`);
  };

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
          Browse students, track enrollment and view performance at a glance 
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

      {/* role="status" makes screen readers announce the message when it changes */}
      <p className={styles.notice} role="status">
        {message}
      </p>

      <Section title="Students" description={`${total} students in the directory`}>
        <ul className={styles.studentGrid}>
          {/* .map() turns each student object into a card. */}
          {students.map((student) => (
            // "key" must be unique per item so React can track list items.
            <li key={student.id}>
              <StudentCard
                student={student} // pass the data down
                onView={handleView} // pass the function down (no parentheses!)
                onMessage={handleMessage} // optional prop: remove this line and the Message button disappears
              />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

export default App;