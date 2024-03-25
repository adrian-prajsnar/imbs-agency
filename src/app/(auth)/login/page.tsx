import styles from './page.module.css';
import LoginForm from '@/components/LoginForm/LoginForm';
import SubmitLoginGithub from '@/components/LoginForm/SubmitLoginGithub';
import { handleGitHubLogin } from '@/services/actions';
import Image from 'next/image';

function LoginPage() {
  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            To access the blog page, please sign in to your account.
          </h1>

          <form action={handleGitHubLogin}>
            <SubmitLoginGithub />
          </form>

          <LoginForm />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src='./7.svg' alt='' fill />
      </div>
    </section>
  );
}

export default LoginPage;
