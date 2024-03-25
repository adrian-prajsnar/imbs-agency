'use client';

import { useFormState } from 'react-dom';
import styles from './AdminUserForm.module.css';
import { addUser } from '@/services/actions';

function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h2 className={styles.heading}>Add New User</h2>

      {/* <div className={styles.formRow}>
        <label htmlFor='fullname'>Name and surname</label>
        <input type='text' id='fullname' name='fullname' />
      </div> */}

      <div className={styles.formRow}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='email'>Email address</label>
        <input type='text' id='email' name='email' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='password'>Password</label>
        <input type='text' id='password' name='password' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='img'>Image</label>
        <input type='text' id='img' name='img' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='isAdmin'>Role</label>
        <select name='isAdmin' id='isAdmin' defaultValue=''>
          <option value='' disabled>
            Select role...
          </option>
          <option value='false'>User</option>
          <option value='true'>Admin</option>
        </select>
      </div>

      <button className={styles.submitForm}>Add</button>

      {state?.error}
    </form>
  );
}

export default AdminUserForm;
