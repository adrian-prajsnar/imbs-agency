'use client';

import { register } from '@/services/actions';
import styles from './RegisterForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [router, state?.success]);

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='username' name='username' />
      <input type='email' placeholder='email' name='email' />
      <input type='password' placeholder='password' name='password' />
      <input
        type='password'
        placeholder='password again'
        name='passwordRepeat'
      />
      <button>Register</button>
      {state?.error}
      <Link href='/login'>
        Have an account? <b>Log in</b>
      </Link>
    </form>
  );
}

export default RegisterForm;
