import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';
dotenv.config();

/** @type {import('drizzle-kit').Config} */
export default defineConfig({
  schema: './utils/schema.js',
  out: './drizzle',
  // driver: 'pg',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_5AjYDHGhIu4d@ep-floral-unit-a1l6f8k4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
 ,
  },
  dialect: 'postgresql',
});
