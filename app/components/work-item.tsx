import styles from "./work-item.module.css";

type WorkItemProps = {
  label: string;
  children: React.ReactNode;
};

export default function WorkItem(props: WorkItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <p>{props.label}</p>
      </div>

      {props.children}
    </div>
  );
}
