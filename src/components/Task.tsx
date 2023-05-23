import styles from './Task.module.css';

type Props = {
    title: string
    status: boolean
    body?: string
    onStatusChange?: (status: boolean) => void
}

function Task({ title, status, body, onStatusChange }: Props) {
    return (
        <div className={`${styles.root} ${status ? styles.success : ""}`}>
            <div className={styles.head}>
                <input type="checkbox" name={title} checked={status} onChange={(e) => onStatusChange?.(e.target.checked)} />

                <label htmlFor={title} className={styles.title}>{title}</label>

                <span className={styles.label}>{status ? "done" : "todo"}</span>
            </div>

            {body && (
                <p className={styles.body}>
                    {body}
                </p>
            )}
        </div>
    )
}

export default Task