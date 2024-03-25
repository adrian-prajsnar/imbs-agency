import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './layout.module.css';

const font = EB_Garamond({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'IMBS Agency # Home Page',
    template: 'IMBS Agency # %s ',
  },
  description: 'Next.js starter app desc',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
