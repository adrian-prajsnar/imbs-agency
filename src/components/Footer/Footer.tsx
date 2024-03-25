'use client';

import { PiFacebookLogo, PiInstagramLogo, PiTwitterLogo } from 'react-icons/pi';

import Link from 'next/link';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoCol}>
          <Link href='#' className={styles.logo}>
            IMBS Agency
          </Link>
          <ul className={styles.socialLinks}>
            <li className={styles.socialItem}>
              <Link target='_blank' href='https://www.instagram.com/'>
                <PiInstagramLogo />
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link target='_blank' href='https://www.facebook.com/'>
                <PiFacebookLogo />
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link target='_blank' href='https://twitter.com/'>
                <PiTwitterLogo />
              </Link>
            </li>
          </ul>
          <p className={styles.copyrights}>
            Innovative Marketing, Branding & SEO Agency <br />
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className={styles.contactCol}>
          <p className={styles.heading}>Contact us</p>
          <address>
            650 Addison Ave, Palo Alto, <br />
            CA 94301, United States
          </address>
          <ul className={styles.contactLinks}>
            <li>
              <Link href='tel:4152016370'>(650) 555-1234</Link>
            </li>
            <li>
              <Link href='mailto:contact@imbs.agency.com'>
                contact@imbs.agency.com
              </Link>
            </li>
          </ul>
        </div>

        <nav className={styles.navCol}>
          <p className={styles.heading}>Account</p>
          <ul className={styles.links}>
            <li>
              <Link href='/register'>Create Account</Link>
            </li>
            <li>
              <Link href='/login'>Sign In</Link>
            </li>
            <li>
              <Link href='#'>iOS App</Link>
            </li>
            <li>
              <Link href='#'>Android App</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.navCol}>
          <p className={styles.heading}>Company</p>
          <ul className={styles.links}>
            <li>
              <Link href='/about'>About IMBS</Link>
            </li>
            <li>
              <Link href='#'>For Business</Link>
            </li>
            <li>
              <Link href='#'>Our Partners</Link>
            </li>
            <li>
              <Link href='#'>Careers</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.navCol}>
          <p className={styles.heading}>Resources</p>
          <ul className={styles.links}>
            <li>
              <Link href='/blog'>Our Blog</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Form</Link>
            </li>
            <li>
              <Link href='#'>Help Center</Link>
            </li>
            <li>
              <Link href='#'>Privacy & Terms</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
