import type { ReactNode } from "react"; // type for the children prop
import styles from "./Section.module.css"; // scoped styles

interface SectionProps {
  title: string; // REQUIRED: the section heading
  description?: string; // OPTIONAL: a short line under the heading
  children: ReactNode; // REQUIRED: the section's content
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2> {/* always shown */}
        {/* "description &&" means: only render the <p> if description was given */}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {children} {/* the actual content goes here */}
    </section>
  );
}

export default Section;