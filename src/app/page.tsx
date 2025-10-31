import { PostsList } from "@/components/PoastsList";
import { PostFeatured } from "@/components/PostFeatured";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-16" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
