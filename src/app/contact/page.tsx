import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Description',
};

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email address' />
          <input type='text' placeholder='Phone number (optional)' />
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
