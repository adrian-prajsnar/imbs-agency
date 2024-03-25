import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Description',
};

function ContactPage() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/6.svg' alt='' fill className={styles.img} />
      </div>

      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <h1 className={styles.heading}>
            Have Questions or Interested in Collaborating? <br /> Fill Out the
            Form Below and Reach Out to Us!
          </h1>

          <div className={styles.formRow}>
            <label htmlFor='fullname'>Name and surname</label>
            <input type='text' id='fullname' name='fullname' />
          </div>

          <div className={styles.formRow}>
            <label htmlFor='email'>Email address</label>
            <input type='email' id='email' name='email' />
          </div>

          <div className={styles.formRow}>
            <label htmlFor='phone'>Phone number (optional)</label>
            <input type='tel' id='phone' name='phone' />
          </div>

          <div className={styles.formRow}>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              cols={30}
              rows={10}
            ></textarea>
          </div>

          <button type='submit' className={styles.submitForm}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
