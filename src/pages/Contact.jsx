import { useState } from "react";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import { company } from "../data/company";
import usePageTitle from "../utils/usePageTitle";

const fieldClass =
  "mt-2 w-full border-b border-brand-brown/20 bg-transparent py-3 text-base text-brand-brown placeholder:text-brand-brown/40";

export default function Contact() {
  usePageTitle("Contact");
  const [opened, setOpened] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        text="Tell us about the work you have in mind."
      />
      <section aria-labelledby="contact-form-heading" className="bg-white">
        <Container className="py-16 lg:py-24">
          <Reveal className="max-w-xl">
            <h2
              id="contact-form-heading"
              className="font-serif text-3xl leading-tight text-brand-brown sm:text-4xl"
            >
              Have a project in mind?
            </h2>
            <form onSubmit={onSubmit} className="mt-10">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-brand-brown">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="text-sm font-semibold text-brand-brown">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={fieldClass}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="text-sm font-semibold text-brand-brown">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className={`${fieldClass} resize-y`}
                />
              </div>
              <div className="mt-8">
                <Button type="submit">Send message</Button>
              </div>
              {opened ? (
                <p className="mt-6 border-t border-brand-brown/10 pt-4 text-sm leading-relaxed text-brand-brown sm:text-base">
                  Your email app should open with this message.
                </p>
              ) : null}
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
