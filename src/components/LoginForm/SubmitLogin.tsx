import { useFormStatus } from 'react-dom';
import styles from './SubmitLogin.module.css';

function LoginFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.loginBtn} disabled={pending}>
      {pending ? 'Signing in...' : 'Sign in'}
    </button>
  );
}

export default LoginFormSubmit;
