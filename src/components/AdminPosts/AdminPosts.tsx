import { getPosts } from '@/services/api';
import styles from './AdminPosts.module.css';
import Image from 'next/image';
import { Post } from '@/app/blog/page';
import { deletePost } from '@/services/actions';

async function AdminPosts() {
  const posts: Post[] = await getPosts();

  return (
    <ul className={styles.container}>
      <h1 className={styles.heading}>Posts</h1>
      {posts.map(post => (
        <li className={styles.post} key={post._id.toString()}>
          <div className={styles.details}>
            <Image
              src={post.img || '/default-avatar.png'}
              alt=''
              width={50}
              height={50}
            />
            <h3 className={styles.postTitle}>{post.title}</h3>
          </div>
          <form action={deletePost}>
            <input type='hidden' name='id' value={post._id.toString()} />
            <button className={styles.postBtn}>Delete</button>
          </form>
        </li>
      ))}
    </ul>
  );
}

export default AdminPosts;
