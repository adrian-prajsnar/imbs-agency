import { unstable_noStore as noStore } from 'next/cache';
import { Post, User } from './databaseModels';
import { connectToDb } from './databaseConnection';

export async function getPosts() {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts!');
  }
}

export async function getPost(slug: string) {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch post!');
  }
}

export async function getUsers() {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch users!');
  }
}

export async function getUser(id: string) {
  noStore();
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user!');
  }
}
