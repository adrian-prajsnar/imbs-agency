import { Suspense } from 'react';
import styles from './page.module.css';
import AdminPosts from '@/components/AdminPosts/AdminPosts';
import AdminPostForm from '@/components/AdminPosts/AdminPostForm';
import AdminUsers from '@/components/AdminUsers/AdminUsers';
import AdminUserForm from '@/components/AdminUsers/AdminUserForm';
import { auth } from '@/services/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Page',
  description: 'Admin Description',
};

async function AdminPage() {
  const session = await auth();

  return (
    <section className={styles.container}>
      <section className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session?.user.id} />
        </div>
      </section>

      <section className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </section>
    </section>
  );
}

export default AdminPage;
