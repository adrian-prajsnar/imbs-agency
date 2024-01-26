import styles from './page.module.css';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
