import { blogs } from "./blogs";
import { serviceGroups, services } from "./services";

export const navigation = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About us", to: "/about" },
      { label: "Meet our team", to: "/team" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "All services", to: "/services" },
      ...services.map((service) => ({
        label: service.title,
        to: `/services#${service.slug}`,
        group: serviceGroups.find((item) => item.id === service.groupId)?.menu,
      })),
    ],
  },
  {
    label: "Blogs",
    to: "/blogs",
    align: "end",
    children: [
      { label: "All articles", to: "/blogs" },
      ...blogs.map((post) => ({
        label: post.title,
        to: `/blogs/${post.slug}`,
      })),
    ],
  },
  { label: "Contact", to: "/contact" },
];
