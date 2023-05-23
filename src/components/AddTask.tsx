import React from 'react'

import styles from './Addtask.module.css';

type Props = {
    onAdd?: ({ title, body }: { title: string, body: string }) => void
}

function AddTask({ onAdd }: Props) {
    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            // @ts-ignore
            const title = e.target.title.value;
            // @ts-ignore
            const body = e.target.body.value || ''
            onAdd?.({ body, title })
            // @ts-ignore
            e.target?.reset?.()

        }}>
            <div className={styles.root}>
                <input type="text" name="title" className={styles.input} required />
                <textarea name='body' className={styles.input} />

                <div className={styles.footer}>

                    <button type='submit' className={styles.btn}>add task</button>
                </div>
            </div>
        </form>
    )
}

export default AddTask