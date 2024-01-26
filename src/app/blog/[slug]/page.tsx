import Image from 'next/image';
import styles from './page.module.css';
import { Post } from '../page';
import PostUser from '@/components/BlogPost/PostUser';
import { getPost } from '@/services/api';
import { Suspense } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// async function getData(slug: string) {
//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
//   if (!res.ok) throw new Error('Something went wrong!');
//   return res.json();
// }

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const post: Post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

async function SinglePostPage({ params }: Props) {
  const { slug } = params;
  const post: Post = await getPost(slug);
  // const post: Post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img || ''} alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detailsContainer}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.details}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailsValue}>
              {post.createdAt.toString().slice(0, 21)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
