import Link from "next/link";
import { mock } from "node:test";
import db from "src/server/db";
const mockUrls = [
  "https://utfs.io/f/b94dec0c-d01d-4715-a914-2532c3f316b9-rhxw1r.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap gap-y-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 px-2">
            <img src={image.url} className="rounded-md" />
          </div>
        ))}
      </div>
      <h1>Hello (Gallery in Progress)</h1>
    </main>
  );
}
