'use client';

import Link from 'next/link';
import styles from './NavLink.module.css';
import { NavLinks } from './NavbarLinks';
import { usePathname } from 'next/navigation';

type Props = {
  item: NavLinks;
};

function NavLink({ item }: Props) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
