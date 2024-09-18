import styles from "./work-item.module.css";

type WorkItemProps = {
  label: string;
  children: React.ReactNode;
};

export default function WorkItem(props: WorkItemProps) {
  return (
    <figure className={styles.item}>
      {props.children}

      <figcaption className={styles.caption}>
        <p>{props.label}</p>
      </figcaption>
    </figure>
  );
}
