import { Post } from '@/services/databaseModels';
import { connectToDb } from '@/services/databaseConnection';
import { NextResponse } from 'next/server';

export async function GET(request: Request, params: { slug: string }) {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch post!');
  }
}
