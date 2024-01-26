import { getPosts } from '@/services/api';
import styles from './page.module.css';
import BlogPost from '@/components/BlogPost/BlogPost';
import { ObjectId } from 'mongoose';

export type Post = {
  _id: ObjectId;
  createdAt: ObjectId;
  userId: string;
  title: string;
  desc: string;
  slug: string;
  img?: string;
};

async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <section>
      <ul className={styles.container}>
        {posts.map(post => (
          <li key={post._id.toString()} className={styles.post}>
            <BlogPost post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogPage;
