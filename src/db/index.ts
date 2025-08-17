import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import pg from "pg";

const pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
const db = drizzle(pool, { schema });

export { db, pool };
