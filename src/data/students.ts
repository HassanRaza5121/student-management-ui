import type { Student } from "../types/student"; // "import type" = we only need the type, not real code

// The ": Student[]" part means "an array where every item must match Student".
// All people below are fictional sample data for the demo.
export const students: Student[] = [
  { id: 1, name: "Ayesha Noor", email: "ayesha.noor@example.com", course: "Machine Learning", gpa: 3.8, status: "active" },
  { id: 2, name: "Bilal Hussain", email: "bilal.hussain@example.com", course: "Data Science", gpa: 3.4, status: "active" },
  { id: 3, name: "Hira Malik", email: "hira.malik@example.com", course: "Computer Vision", gpa: 3.9, status: "graduated" },
  { id: 4, name: "Usman Tariq", email: "usman.tariq@example.com", course: "Web Development", gpa: 2.9, status: "inactive" },
  { id: 5, name: "Zainab Iqbal", email: "zainab.iqbal@example.com", course: "Machine Learning", gpa: 3.6, status: "active" },
  { id: 6, name: "Hamza Sheikh", email: "hamza.sheikh@example.com", course: "Data Science", gpa: 3.1, status: "active" },
  { id: 7, name: "Mariam Javed", email: "mariam.javed@example.com", course: "Computer Vision", gpa: 3.7, status: "graduated" },
  { id: 8, name: "Danish Qureshi", email: "danish.qureshi@example.com", course: "Web Development", gpa: 3.2, status: "inactive" },
];