import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/b94dec0c-d01d-4715-a914-2532c3f316b9-rhxw1r.jpg",
  "https://utfs.io/f/23b7eabb-64ec-483c-8e63-fa49406da05b-rhxw1s.jpg",
  "https://utfs.io/f/879ef0c2-5264-42ed-b794-78234f37dd82-rhxw1p.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      <h1>Hello (Gallery in Progress)</h1>
    </main>
  );
}
