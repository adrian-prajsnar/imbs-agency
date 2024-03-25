import Image from 'next/image';
import styles from './page.module.css';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <section className={styles.container}>
      <div className={styles.registerContainer}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            Create an account to access the full site capabilities.
          </h1>
          <RegisterForm />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src='./register.svg' alt='' fill />
      </div>
    </section>
  );
}

export default RegisterPage;
