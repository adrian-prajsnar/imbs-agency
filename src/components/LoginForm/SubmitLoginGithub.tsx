'use client';

import { useFormStatus } from 'react-dom';
import styles from './SubmitLoginGithub.module.css';

function SubmitLoginGithub() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.github} disabled={pending}>
      {pending ? 'Signing in with GitHub...' : 'Sign in with GitHub'}
    </button>
  );
}

export default SubmitLoginGithub;
