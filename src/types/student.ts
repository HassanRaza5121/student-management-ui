// "type" creates a custom type. A StudentStatus can ONLY be one of these 3 strings.
export type StudentStatus = "active" | "inactive" | "graduated";

// "interface" describes the SHAPE of a student object.
export interface Student {
  id: number; // unique number; React uses it as the "key" in lists
  name: string; // full name
  email: string; // email address
  course: string; // the course the student is enrolled in
  gpa: number; // grade point average, from 0 to 4
  status: StudentStatus; // must be one of the 3 allowed strings above
}