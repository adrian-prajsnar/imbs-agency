'use client';

import { useFormState } from 'react-dom';
import styles from './AdminPostForm.module.css';
import { addPost } from '@/services/actions';

function AdminPostForm({ userId }: any) {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h2 className={styles.heading}>Add New Post</h2>
      <input type='hidden' name='userId' value={userId.toString()} />

      <div className={styles.formRow}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='slug'>Slug</label>
        <input type='text' id='slug' name='slug' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='img'>Image</label>
        <input type='text' id='img' name='img' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='desc'>Description</label>
        <textarea id='desc' name='desc' cols={30} rows={10}></textarea>
      </div>

      <button className={styles.submitForm}>Add</button>

      {state?.error}
    </form>
  );
}

export default AdminPostForm;
