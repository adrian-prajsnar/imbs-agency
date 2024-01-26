import { Post } from '@/services/databaseModels';
import { connectToDb } from '@/services/databaseConnection';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch posts!');
  }
}
