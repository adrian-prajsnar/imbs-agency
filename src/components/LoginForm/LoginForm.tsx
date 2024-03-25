'use client';

import { login } from '@/services/actions';
import styles from './LoginForm.module.css';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import SubmitLogin from './SubmitLogin';

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.formRow}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
      </div>

      <SubmitLogin />

      {state?.error && (
        <p className={styles.error}>{state?.error}, please try again.</p>
      )}

      <p className={styles.register}>
        {"Don't have an account?"} <Link href='/register'>Sign up</Link>
      </p>
    </form>
  );
}

export default LoginForm;
