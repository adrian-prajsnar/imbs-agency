import { getUsers } from '@/services/api';
import styles from './AdminUsers.module.css';
import Image from 'next/image';
import { deleteUser } from '@/services/actions';

async function AdminUsers() {
  const users = await getUsers();

  return (
    <ul className={styles.container}>
      <h2 className={styles.heading}>Users</h2>
      {users.map(user => (
        <li className={styles.user} key={user._id.toString()}>
          <div className={styles.details}>
            <Image
              src={user.img || '/default-avatar.png'}
              alt=''
              width={50}
              height={50}
            />
            <h3 className={styles.userTitle}>{user.username}</h3>
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
