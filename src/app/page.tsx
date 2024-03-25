import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Innovative Marketing, Branding & SEO Agency
        </h1>
        <p className={styles.desc}>
          Welcome to Innovative Marketing, Branding & SEO Agency. We are the
          driving force behind successful online businesses, specializing in
          creative marketing, brand enhancement, and SEO optimization. Let us
          elevate your digital presence and help you achieve unparalleled
          growth. Join us in shaping your digital success story today!
        </p>
        <div className={styles.btnsContainer}>
          <Link href='/contact' role='button' className={styles.btn}>
            Contact
          </Link>

          <button className={styles.btn}>Learn more</button>
        </div>
        <div className={styles.brandsContainer}>
          <Image src='/brands.png' fill alt='' className={styles.brandsImg} />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src='/2.svg' fill alt='' className={styles.heroImg} />
      </div>
    </div>
  );
}

export default HomePage;
