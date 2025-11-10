import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postTable = sqliteTable("posts", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
  published: integer("published", { mode: "boolean" }).notNull(),
  excerpt: text("excerpt").notNull(),
  coverImageUrl: text("cover_image_url").notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postTable>;
export type PostsTableInsertMode = InferInsertModel<typeof postTable>;
