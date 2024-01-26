import styles from './page.module.css';
import LoginForm from '@/components/LoginForm/LoginForm';
import { handleGitHubLogin } from '@/services/actions';

function LoginPage() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGitHubLogin}>
          <button className={styles.github}>Log in with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </section>
  );
}

export default LoginPage;
