'use server';
import { revalidatePath } from 'next/cache';
import { Post, User } from './databaseModels';
import { connectToDb } from './databaseConnection';
import { signIn, signOut } from './auth';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongoose';

export async function addPost(prevState: any, formData: FormData) {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.error(error);
    throw new Error('There was an error while adding post.');
  }
}

export async function deletePost(formData: FormData) {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.error(error);
    throw new Error('There was an error while deleting post.');
  }
}

export async function addUser(prevState: any, formData: FormData) {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    revalidatePath('/admin');
  } catch (error) {
    console.error(error);
    throw new Error('There was an error while adding user.');
  }
}

export async function deleteUser(formData: FormData) {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });

    // FIXME: id must be ObjectId but it is string (but somehow it's working currently)
    await User.findByIdAndDelete(id);
    revalidatePath('/admin');
  } catch (error) {
    console.error(error);
    throw new Error('There was an error while deleting user.');
  }
}

export async function handleGitHubLogin() {
  'use server';
  await signIn('github');
}

export async function handleLogout() {
  'use server';
  await signOut();
}

export async function register(prevState: any, formData: FormData) {
  const {
    username,
    email,
    password: pwd,
    passwordRepeat,
    img,
  } = Object.fromEntries(formData);

  const password = pwd as string;

  if (password !== passwordRepeat) return { error: 'Passwords do not match' };

  try {
    connectToDb();

    const existingUser = await User.findOne({ username });
    if (existingUser) return { error: 'Username already exists' };

    const existingEmail = await User.findOne({ email });
    if (existingEmail) return { error: 'Email already exists' };

    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'There was an error while registering.' };
  }
}

type SignInError = {
  type: string;
  kind: string;
};

export async function login(prevState: any, formData: FormData) {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.error(error);

    if (typeof error === 'object' && error !== null && 'type' in error) {
      const signInError = error as SignInError;

      if (signInError.type === 'CredentialsSignin')
        return { error: 'Invalid username or password' };
    }

    throw error;
  }
}
