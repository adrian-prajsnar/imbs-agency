'use client';

import styles from './not-found.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function NotFoundPage() {
  const pathname: string = usePathname();
  const segments: string[] = pathname.split('/').filter(Boolean);
  const pageName: string =
    segments.length > 0 ? segments[segments.length - 1] : 'Unknown';

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Oops! The page you are looking for cannot be found.
        </h1>
        <p>
          The page with the title{' '}
          <span className={styles.pageName}>{pageName}</span> does not exist on
          our website. It seems like you might have entered an incorrect URL or
          the page has been moved or deleted.
        </p>
        <ul className={styles.list}>
          <p>{"Here's what you can do:"}</p>
          <li>
            - Double-check the URL: Please ensure that you have entered the
            correct URL. A small typo in the address can lead to this error.
          </li>
          <li>
            - Go to IMBS {"Agency's"} Home Page: You can always navigate back to
            the IMBS {"Agency's"} home page by clicking on the logo or using the
            navigation menu. From there, you can explore our website and find
            the information you need.
          </li>
        </ul>
        <p>
          {
            "If you continue to encounter issues or can't find what you're looking for, please don't hesitate to contact our support team for assistance. We're here to help you!"
          }
        </p>
      </div>

      <div className={styles.imgContainer}>
        <Image src='/not-found.svg' alt='' fill />
      </div>
    </section>
  );
}

export default NotFoundPage;
