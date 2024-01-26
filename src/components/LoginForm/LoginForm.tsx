'use client';

import { login } from '@/services/actions';
import styles from './LoginForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push('/login');
  // }, [router, state?.success]);

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='username' name='username' />
      <input type='password' placeholder='password' name='password' />
      <button>Log in</button>
      {state?.error}
      <Link href='/register'>
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
}

export default LoginForm;
