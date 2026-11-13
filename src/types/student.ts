// A status can ONLY be one of these 3 strings.
export type StudentStatus = "active" | "inactive" | "graduated";

export interface Student {
  id: number; // unique number, used as the React "key"
  name: string; // full name
  email: string; // email address
  course: string; // enrolled course
  gpa: number; // 0 to 4
  status: StudentStatus; // one of the 3 allowed strings

  // NEW extra info, shown only in the popup:
  studentId: string; // e.g. "STU-001"
  city: string; // where the student lives
  enrolledYear: number; // year they joined
  attendance: number; // attendance percentage, 0 to 100
  bio: string; // one short sentence about the student
}