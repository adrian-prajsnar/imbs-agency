'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import styles from './error.module.css';
import Image from 'next/image';
import Link from 'next/link';

function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Oops! Something Went Wrong.</h1>
        <p>
          We apologize for the inconvenience, but it seems that there was an
          issue loading the content of this page. Please try again by clicking
          this button:{' '}
          <span role='button' className={styles.action} onClick={() => reset()}>
            Try again
          </span>
        </p>

        <ul className={styles.list}>
          <p>
            If you continue to encounter this error, it could be due to some
            development problems. In the meantime, you can explore other pages
            on our website or reach out to us for assistance:
          </p>
          <li>
            - Contact Us: Use our{' '}
            <Link className={styles.action} href='/contact'>
              contact form
            </Link>{' '}
            to get in touch with our team directly.
          </li>
          <li>
            - Email Us: Send us an email at [
            <Link
              className={styles.action}
              href='mailto:contact@imbs.agency.com'
            >
              contact@imbs.agency.com
            </Link>
            ].
          </li>
        </ul>
        <p>
          We appreciate your patience and will work to resolve this issue as
          quickly as possible.
        </p>
      </div>

      <div className={styles.imgContainer}>
        <Image src='/error.svg' fill alt='' />
      </div>
    </section>
  );
}

export default ErrorPage;
