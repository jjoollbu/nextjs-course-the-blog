import { defineConfig } from "drizzle-orm/config";

export default defineConfig({
  out: "./src/db/drizzle/migrations",
  schema: "./src/db/drizzle/schemas.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "./src/db/sqlite3",
  }
});
