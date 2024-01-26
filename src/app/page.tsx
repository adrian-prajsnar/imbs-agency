import Image from 'next/image';
import styles from './page.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor
          totam aspernatur quia sapiente error labore nostrum corporis rem
          quos!s
        </p>
        <div className={styles.btnsContainer}>
          <button className={styles.btn}>Learn more</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brandsContainer}>
          <Image src='/brands.png' fill alt='' className={styles.brandsImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.gif' fill alt='' className={styles.heroImg} />
      </div>
    </div>
  );
}

export default HomePage;
