import { getUsers } from '@/services/api';
import styles from './AdminUsers.module.css';
import Image from 'next/image';
import { deleteUser } from '@/services/actions';

async function AdminUsers() {
  const users = await getUsers();

  return (
    <ul className={styles.container}>
      <h1>Users</h1>
      {users.map(user => (
        <li className={styles.user} key={user._id.toString()}>
          <div className={styles.details}>
            <Image
              src={user.img || '/default-avatar.png'}
              alt=''
              width={50}
              height={50}
            />
            <h2 className={styles.userTitle}>{user.title}</h2>
          </div>
          <form action={deleteUser}>
            <input type='hidden' name='id' value={user._id.toString()} />
            <button className={styles.postBtn}>Delete</button>
          </form>
        </li>
      ))}
    </ul>
  );
}

export default AdminUsers;
