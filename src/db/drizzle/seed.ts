import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); // Clear existing data
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log();
    console.log("erro");
    console.log();
    console.log(e);
    console.log();
  }
})();
