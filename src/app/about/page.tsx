import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Description',
};

function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We Innovate with Ideas that Inspire, Transform, and Excel
          </h1>
          <p className={styles.desc}>
            {
              "At Innovative Marketing, Branding & SEO Agency, we are passionate about crafting compelling brand stories, implementing effective marketing strategies, and optimizing your online presence. Our team of experts is dedicated to driving your business's success by leveraging creativity, branding, and SEO. Join us on the journey to digital excellence."
            }
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>10 K+</h3>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>234 K+</h3>
              <p>People reached</p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.boxTitle}>5 K+</h3>
              <p>Services and solutions</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/1.svg' alt='' fill className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
