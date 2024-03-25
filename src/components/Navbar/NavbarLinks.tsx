'use client';
import { useState } from 'react';
import styles from './NavbarLinks.module.css';
import NavLink from './NavLink';
import Image from 'next/image';
import { handleLogout } from '@/services/actions';
import { Session } from 'next-auth';
import SubmitLogout from './SubmitLogout';

export type NavLinks = {
  title: string;
  path: string;
};

const links: NavLinks[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

function NavbarLinks({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink key={link.title} item={link} />
        ))}

        {session ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: 'Admin', path: '/admin' }} />
            )}
            <form action={handleLogout}>
              <SubmitLogout />
            </form>
          </>
        ) : (
          <NavLink item={{ title: 'Sign in', path: '/login' }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        role='button'
        src='/menu.png'
        alt=''
        width={30}
        height={30}
        onClick={() => setIsOpen(isOpen => !isOpen)}
      />
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map(link => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NavbarLinks;
