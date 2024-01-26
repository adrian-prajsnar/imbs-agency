import NavbarLinks from './NavbarLinks';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { auth } from '@/services/auth';
import { Session } from 'next-auth';

async function Navbar() {
  const session: Session | null = await auth();
  console.log(session);

  return (
    <header className={styles.container}>
      <Link href='/' className={styles.logo}>
        Logo
      </Link>
      <div>
        <NavbarLinks session={session} />
      </div>
    </header>
  );
}

export default Navbar;
