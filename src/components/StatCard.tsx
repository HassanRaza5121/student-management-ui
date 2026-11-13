import type { ReactNode } from "react"; // type for the icon prop
import Card from "./ui/Card"; // reuse our Card (composition!)
import styles from "./StatCard.module.css"; // scoped styles

interface StatCardProps {
  label: string; // REQUIRED: e.g. "Total students"
  value: string | number; // REQUIRED: "string | number" means either type is allowed
  icon?: ReactNode; // OPTIONAL: an emoji or an icon
  hint?: string; // OPTIONAL: small extra text
}

function StatCard({ label, value, icon, hint }: StatCardProps) {
  return (
    <Card>
      {/* StatCard is BUILT FROM Card. Card supplies the box, we supply the content. */}
      <div className={styles.row}>
        {/* Only render the icon if one was passed */}
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
        <div>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>{value}</p>
          {hint && <p className={styles.hint}>{hint}</p>}
        </div>
      </div>
    </Card>
  );
}

export default StatCard;