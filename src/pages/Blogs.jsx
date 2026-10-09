import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import { blogs } from "../data/blogs";
import { formatDate } from "../utils/formatDate";
import usePageTitle from "../utils/usePageTitle";

export default function Blogs() {
  usePageTitle("Blog");

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Articles"
        text="Notes on planning and reviewing websites and software."
      />
      <Container className="py-12 sm:py-16">
        <ul className="divide-y divide-brand-brown/10 border-y border-brand-brown/10">
          {blogs.map((post) => (
            <li key={post.id}>
              <article className="py-6">
                <p className="text-sm text-brand-brown">
                  {post.category}
                  <span aria-hidden="true"> · </span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-brown">
                  <Link to={`/blogs/${post.slug}`} className="underline-offset-4 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-brand-brown">
                  {post.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
