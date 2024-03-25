import NavbarLinks from './NavbarLinks';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { auth } from '@/services/auth';
import { Session } from 'next-auth';

async function Navbar() {
  const session: Session | null = await auth();
  console.log(session);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          IMBS Agency
        </Link>
        <nav>
          <NavbarLinks session={session} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
