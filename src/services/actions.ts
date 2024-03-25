'use server';
import { revalidatePath } from 'next/cache';
import { Post, User } from './databaseModels';
import { connectToDb } from './databaseConnection';
import { signIn, signOut } from './auth';
import bcrypt from 'bcrypt';

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
    return { error: 'Something went wrong while adding post.' };
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
    return { error: 'Something went wrong while deleting post' };
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
    return { error: 'Something went wrong while adding user.' };
  }
}

export async function deleteUser(formData: FormData) {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });

    // FIXME: id should be ObjectId but it is passed as string (but somehow it's working currently)
    await User.findByIdAndDelete(id);
    revalidatePath('/admin');
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong while deleting user' };
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
    username: usr,
    email: eml,
    password: pwd,
    passwordRepeat: pwdR,
    img,
  } = Object.fromEntries(formData);

  const username = usr as string;
  const email = eml as string;
  const password = pwd as string;
  const passwordRepeat = pwdR as string;
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!username || !email || !password || !passwordRepeat)
    return { error: 'Fields cannot be empty' };

  if (username.length < 3)
    return { error: 'Username must be at least 3 characters long' };

  if (password.length < 8)
    return { error: 'Password must be at least 8 characters long' };

  if (password !== passwordRepeat) return { error: 'Passwords do not match' };

  if (!emailRegex.test(email)) {
    return { error: 'Invalid email format' };
  }

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
    return { error: 'Something went wrong while registering' };
  }
}

type SignInError = {
  type: string;
  kind: string;
};

export async function login(prevState: any, formData: FormData) {
  const { username, password } = Object.fromEntries(formData);
  if (!username || !password) return { error: 'Fields cannot be empty' };

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.error(error);

    if (typeof error === 'object' && error !== null && 'type' in error) {
      const signInError = error as SignInError;

      if (signInError.type === 'CredentialsSignin') {
        return { error: 'Invalid username or password' };
      }
    }

    throw error;
  }
}
