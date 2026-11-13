import type { BadgeTone } from "../components/ui/Badge"; // allowed badge colors

// Turns "Ayesha Noor" into "AN".
export function getInitials(name: string): string {
  return name
    .split(" ") // ["Ayesha", "Noor"]
    .map((part) => part[0]) // ["A", "N"]
    .slice(0, 2) // keep at most 2 letters
    .join("") // "AN"
    .toUpperCase(); // make them capitals
}

export interface GpaStanding {
  label: string; // text to show
  tone: BadgeTone; // badge color
}

// Turns a GPA number into a label. Checked from highest to lowest.
export function getGpaStanding(gpa: number): GpaStanding {
  if (gpa >= 3.7) return { label: "Excellent", tone: "success" };
  if (gpa >= 3.3) return { label: "Good", tone: "info" };
  if (gpa >= 3.0) return { label: "Satisfactory", tone: "neutral" };
  return { label: "Needs improvement", tone: "warning" };
}