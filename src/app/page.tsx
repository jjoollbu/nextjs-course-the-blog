import { Container } from "@/components/Container";
import { PostsList } from "@/components/PoastsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          atque quam ullam dignissimos repellat ea fugit quidem labore ab maxime
          sapiente odio, totam inventore excepturi commodi officiis facilis
          mollitia sequi! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Laboriosam atque quam ullam dignissimos repellat ea fugit quidem
          labore ab maxime sapiente odio, totam inventore excepturi commodi
          officiis facilis mollitia sequi! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Laboriosam atque quam ullam dignissimos
          repellat ea fugit quidem labore ab maxime sapiente odio, totam
          inventore excepturi commodi officiis facilis mollitia sequi!
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
