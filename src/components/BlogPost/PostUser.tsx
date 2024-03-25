import { Post } from '@/app/blog/page';
import styles from './PostUser.module.css';
import { getUser } from '@/services/api';
import Image from 'next/image';

type User = {
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin?: boolean;
};

type Props = {
  userId: Post['userId'];
  userAvatar?: User['img'];
};

async function PostUser({ userId, userAvatar }: Props) {
  const user: User = await getUser(userId);

  console.log(user);

  return null;

  // return (
  //   <div className={styles.container}>
  //     <Image
  //       className={styles.avatar}
  //       src={userAvatar || '/default-avatar.png'}
  //       alt=''
  //       width={50}
  //       height={50}
  //     />
  //     <div className={styles.details}>
  //       <span className={styles.title}>Author</span>
  //       <span className={styles.username}>{user.username}</span>
  //     </div>
  //   </div>
  // );
}

export default PostUser;
