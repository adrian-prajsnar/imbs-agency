import { useFormStatus } from 'react-dom';
import styles from './SubmitRegister.module.css';

function SubmitRegister() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.registerBtn} disabled={pending}>
      {pending ? 'Signing up...' : 'Sign up'}
    </button>
  );
}

export default SubmitRegister;
