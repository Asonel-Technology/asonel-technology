// Static blog posts. There is no database and no CMS.
// Add a post by appending an object to this array.
// Required fields: id, slug, title, excerpt, content, author, date, category, image.
// The blog listing and article layout are intentionally simple so they can be redesigned separately.

export const blogs = [
  {
    id: "preparing-a-software-project",
    slug: "preparing-a-software-project",
    title: "What to prepare before a software project",
    excerpt:
      "A short list of decisions that make the first build conversation more useful.",
    content: [
      "A software project moves faster when the problem is specific. Before asking for a proposal, it helps to write down who will use the product and what they need to get done.",
      "You do not need a finished specification. A few real examples of the work (the form someone fills in, the report someone exports, the page a customer cannot find) are more useful than a long list of features.",
      "It also helps to name a person who can answer questions during the project. Most delays are not technical. They are unanswered questions.",
    ],
    author: "Asonel Technology",
    date: "2026-03-04",
    category: "Projects",
    image: "",
  },
  {
    id: "reading-a-first-website-version",
    slug: "reading-a-first-website-version",
    title: "How to review the first version of a website",
    excerpt:
      "What to look at when a first version is ready, besides the color of the buttons.",
    content: [
      "A first version is for checking structure. Read the pages in the order a visitor would. Note where you hesitate, and where a sentence could belong to any company.",
      "Check the ordinary tasks: finding a service, understanding who it is for, and knowing how to get in touch. Visual polish can wait until those paths are obvious.",
      "Write comments on the content itself. “This is not how we describe that service” is more useful than a note about making the page louder.",
    ],
    author: "Asonel Technology",
    date: "2026-03-18",
    category: "Websites",
    image: "",
  },
];
