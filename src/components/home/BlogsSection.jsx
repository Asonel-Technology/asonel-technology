import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { company } from "../../data/company";
import { formatDate } from "../../utils/formatDate";
import Container from "../common/Container";

const posts = [...blogs].sort((a, b) => b.date.localeCompare(a.date));

export default function BlogsSection() {
  return (
    <section aria-labelledby="home-blogs-heading" className="bg-brand-sand">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              <svg className="h-3 w-3 text-brand-orange" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
              </svg>
              Blog
            </span>
            <h2
              id="home-blogs-heading"
              className="mt-5 font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
            >
              Articles
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-brown/80 sm:text-lg">
            Notes on preparing, reviewing, and shipping software and websites.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.id} className="min-w-0">
              <Link
                to={`/blogs/${post.slug}`}
                className="relative flex h-full min-h-60 flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(30,18,0,0.08)] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
              >
                <p className="text-sm text-brand-brown/70">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true"> | </span>
                  <span>{company.name}</span>
                </p>
                <h3 className="relative z-10 mt-5 max-w-xs font-serif text-2xl font-bold leading-snug text-brand-brown sm:text-3xl">
                  {post.title}
                </h3>
                <svg
                  className="pointer-events-none absolute -bottom-4 -right-4 h-36 w-44 text-brand-orange"
                  viewBox="0 0 140 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M20 90c30-28 50-28 80 0" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
                  <path d="M8 90c34-40 58-40 96 0" stroke="currentColor" strokeWidth="1.25" opacity="0.35" />
                  <path d="M0 90c38-52 66-52 112 0" stroke="currentColor" strokeWidth="1.25" opacity="0.2" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
