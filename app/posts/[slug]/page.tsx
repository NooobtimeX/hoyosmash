import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { parseISO, format } from "date-fns";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Make it async
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Params) {
  const post = await getPostBySlug(params.slug); // Ensure this is also async
  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");
  const formattedDate = format(parseISO(post.datePublished), "LLLL d, yyyy");

  return (
    <main className="container mx-auto mb-4 px-3">
      <link rel="canonical" href={"https://hoyosmash.com/" + params.slug} />
      <article>
        <div className="m-auto my-2 max-w-3xl">
          <img
            src={post.Image}
            alt={`Cover Image for ${post.title}`}
            className="m-auto max-h-80 rounded-xl"
            width={600}
            height={400}
          />
        </div>
        <div className="m-auto max-w-4xl">
          <h1>{post.title}</h1>
          <time
            dateTime={post.datePublished}
            className="mb-6 text-sm text-gray-400"
          >
            {formattedDate}
          </time>
          <div
            className="mx-auto whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: content.replace(
                /<a /g,
                '<a class="text-blue-500 hover:underline" ',
              ),
            }}
          />
        </div>
      </article>
    </main>
  );
}
