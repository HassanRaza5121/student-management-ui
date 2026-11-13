import type { Student } from "../types/student"; // type only, no real code imported

// All people below are FICTIONAL sample data for the demo.
export const students: Student[] = [
  { id: 1, name: "Ayesha Noor", email: "ayesha.noor@example.com", course: "Machine Learning", gpa: 3.8, status: "active", studentId: "STU-001", city: "Lahore", enrolledYear: 2024, attendance: 96, bio: "Enjoys building classification models and explaining results clearly." },
  { id: 2, name: "Bilal Hussain", email: "bilal.hussain@example.com", course: "Data Science", gpa: 3.4, status: "active", studentId: "STU-002", city: "Karachi", enrolledYear: 2024, attendance: 91, bio: "Focused on data cleaning and dashboards." },
  { id: 3, name: "Hira Malik", email: "hira.malik@example.com", course: "Computer Vision", gpa: 3.9, status: "graduated", studentId: "STU-003", city: "Islamabad", enrolledYear: 2022, attendance: 98, bio: "Graduated with a project on image segmentation." },
  { id: 4, name: "Usman Tariq", email: "usman.tariq@example.com", course: "Web Development", gpa: 2.9, status: "inactive", studentId: "STU-004", city: "Faisalabad", enrolledYear: 2023, attendance: 72, bio: "On a study break and planning to return next term." },
  { id: 5, name: "Zainab Iqbal", email: "zainab.iqbal@example.com", course: "Machine Learning", gpa: 3.6, status: "active", studentId: "STU-005", city: "Multan", enrolledYear: 2024, attendance: 94, bio: "Interested in natural language processing." },
  { id: 6, name: "Hamza Sheikh", email: "hamza.sheikh@example.com", course: "Data Science", gpa: 3.1, status: "active", studentId: "STU-006", city: "Rawalpindi", enrolledYear: 2025, attendance: 88, bio: "New to the program and catching up on statistics." },
  { id: 7, name: "Mariam Javed", email: "mariam.javed@example.com", course: "Computer Vision", gpa: 3.7, status: "graduated", studentId: "STU-007", city: "Lahore", enrolledYear: 2022, attendance: 97, bio: "Built an object detection demo as a final project." },
  { id: 8, name: "Danish Qureshi", email: "danish.qureshi@example.com", course: "Web Development", gpa: 3.2, status: "inactive", studentId: "STU-008", city: "Peshawar", enrolledYear: 2023, attendance: 79, bio: "Paused studies to work full time." },
];