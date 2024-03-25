import Image from 'next/image';
import styles from './BlogPost.module.css';
import Link from 'next/link';
import { Post } from '@/app/blog/page';

function BlogPost({ post: { title, desc, slug, img } }: { post: Post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={img || '/no-image'} alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <Link className={styles.link} href={`/blog/${slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
