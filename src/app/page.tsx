import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PoastsList";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            src: "/images/bryen_9.png",
            alt: "Titulo do post",
            width: 1200,
            height: 720,
            priority: true,
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2023-03-15">
            March 15, 2023
          </time>
          <PostHeading as="h1" url="#">
            Praesentium, molestiae dignissimosaaaaaaaa
          </PostHeading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            saepe eaque qui odio dolorem! Praesentium, molestiae dignissimos
            impedit obcaecati doloribus ipsam vero fuga accusantium
            voluptatibus. In, magni. Nobis, minus architecto.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
