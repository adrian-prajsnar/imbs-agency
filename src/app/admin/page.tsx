import { Suspense } from 'react';
import styles from './page.module.css';
import AdminPosts from '@/components/AdminPosts/AdminPosts';
import AdminPostForm from '@/components/AdminPosts/AdminPostForm';
import AdminUsers from '@/components/AdminUsers/AdminUsers';
import AdminUserForm from '@/components/AdminUsers/AdminUserForm';

function AdminPage() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
