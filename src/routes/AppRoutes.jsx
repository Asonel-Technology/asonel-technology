import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import About from "../pages/About";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import Team from "../pages/Team";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:slug" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
