import type { BadgeTone } from "../components/ui/Badge"; // allowed badge colors
import type { StudentStatus } from "../types/student"; // allowed statuses

// For each status, which badge color to use.
// Record<StudentStatus, BadgeTone> forces us to cover all three statuses.
export const statusTone: Record<StudentStatus, BadgeTone> = {
  active: "success", // green
  inactive: "warning", // amber
  graduated: "info", // blue
};