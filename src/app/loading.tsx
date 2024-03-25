import Spinner from '@/components/Spinner/Spinner';
import styles from './loading.module.css';

function LoadingPage() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}

export default LoadingPage;
