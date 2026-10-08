import { Link, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import { blogs } from "../data/blogs";
import { formatDate } from "../utils/formatDate";
import usePageTitle from "../utils/usePageTitle";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);
  usePageTitle(post ? post.title : "Article");

  if (!post) {
    return (
      <Container className="py-20">
        <h1 className="font-serif text-4xl text-brand-brown">Article not found</h1>
        <p className="mt-4 text-brand-brown">That article is not in the blog list.</p>
        <Link to="/blogs" className="mt-6 inline-flex font-semibold underline underline-offset-4">
          Back to articles
        </Link>
      </Container>
    );
  }

  return (
    <article className="bg-white">
      <Container className="max-w-3xl py-14 sm:py-16">
        <p className="text-sm text-brand-brown">
          <Link to="/blogs" className="font-semibold underline underline-offset-4">
            Blog
          </Link>
          <span aria-hidden="true"> · </span>
          {post.category}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-brown sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-brand-brown">
          {post.author}
          <span aria-hidden="true"> · </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        {post.image ? (
          <img
            src={post.image}
            alt=""
            className="mt-8 aspect-[16/9] w-full rounded-xl object-cover"
          />
        ) : null}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-brown sm:text-lg">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
