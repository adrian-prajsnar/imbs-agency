import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        Lama creative thoughts agency &copy; All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
