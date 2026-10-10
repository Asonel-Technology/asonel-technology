import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/contact/ContactForm";
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
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
