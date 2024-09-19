import { getAllPosts } from "@/lib/api";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default async function LatestPosts() {
  const posts = await getAllPosts();
  const lastFourPosts = posts.slice(-4);
  return (
    <div>
      <h2 className="my-2 text-center">Latest post</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {lastFourPosts.map((post) => (
          <Card key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block transition-shadow"
            >
              <div className="flex flex-col">
                <img
                  src={post.Image}
                  alt={`Cover image for ${post.title}`}
                  className="h-auto w-full rounded-xl object-cover"
                  width={600}
                  height={200}
                />
                <div className="grid p-2">
                  <h3 className="mb-2 text-center text-base sm:text-xl">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
