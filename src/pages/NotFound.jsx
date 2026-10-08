import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import usePageTitle from "../utils/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <Container className="py-20">
      <h1 className="font-serif text-4xl text-brand-brown">Page not found</h1>
      <p className="mt-4 max-w-xl text-brand-brown">
        That address is not part of the Asnol Technology site.
      </p>
      <Link to="/" className="mt-6 inline-flex font-semibold underline underline-offset-4">
        Back to home
      </Link>
    </Container>
  );
}
