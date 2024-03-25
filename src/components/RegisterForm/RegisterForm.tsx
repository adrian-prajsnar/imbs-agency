'use client';

import { register } from '@/services/actions';
import styles from './RegisterForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SubmitRegister from './SubmitRegister';

function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [router, state?.success]);

  return (
    <form action={formAction} className={styles.form}>
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
        <input type='password' id='password' name='password' />
      </div>

      <div className={styles.formRow}>
        <label htmlFor='passwordRepeat'>Repeat password</label>
        <input type='password' id='passwordRepeat' name='passwordRepeat' />
      </div>

      <SubmitRegister />

      {state?.error && (
        <p className={styles.error}>{state?.error}, please try again.</p>
      )}

      <p className={styles.login}>
        Have an account? <Link href='/login'>Sign in</Link>
      </p>
    </form>
  );
}

export default RegisterForm;
