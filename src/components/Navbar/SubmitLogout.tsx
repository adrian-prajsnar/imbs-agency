import { useFormStatus } from 'react-dom';
import styles from './SubmitLogout.module.css';

function SubmitLogout() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.logout} disabled={pending}>
      {pending ? 'Signing out...' : 'Sign out'}
    </button>
  );
}

export default SubmitLogout;
