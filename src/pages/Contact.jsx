import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import usePageTitle from "../utils/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        text="Tell us about the work you have in mind."
      />
      <Container className="py-14">
        <p className="max-w-2xl text-base leading-relaxed text-brand-brown">
          The message form is not available on this page yet, so nothing can be sent from here.
        </p>
      </Container>
    </>
  );
}
