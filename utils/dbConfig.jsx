
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.js';
if (!process.env.NEXT_PUBLIC_DATABASE_URL ) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL || 'postgresql://neondb_owner:npg_5AjYDHGhIu4d@ep-floral-unit-a1l6f8k4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
);
export const db = drizzle(sql ,{schema});
