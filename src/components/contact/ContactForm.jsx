import { useState } from "react";
import emailjs from "@emailjs/browser";
import { services } from "../../data/services";

const fieldClass =
  "w-full rounded-2xl border border-brand-brown/15 bg-white px-4 py-3 text-base text-brand-brown outline-none transition-colors duration-200 placeholder:text-brand-brown/40 focus:border-brand-orange motion-reduce:transition-none";

const initialValues = {
  name: "",
  email: "",
  service: "",
  message: "",
  website: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Tell us a little about the work.";
  }
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-brand-brown">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-brand-brown">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (values.website) {
      setStatus("sent");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          service: values.service || "Not sure yet",
          message: values.message.trim(),
        },
        { publicKey },
      );
      setStatus("sent");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-brand-sand px-6 py-12 text-center sm:px-10">
        <h2 className="font-serif text-3xl font-bold text-brand-brown">Message sent.</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-brand-brown/80">
          We have your note and will reply by email.
        </p>
        <button
          type="button"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-orange px-8 py-3 text-xs font-bold uppercase tracking-widest text-brand-brown transition-colors duration-200 hover:bg-brand-orange-dark motion-reduce:transition-none"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-brand-sand px-6 py-8 sm:px-10 sm:py-10">
      <div className="grid gap-6">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={update}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="service" label="What do you need?">
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={update}
            className={fieldClass}
          >
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={update}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={update}
          />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 text-sm font-medium text-brand-brown">
          The message was not sent. Please try again.
        </p>
      ) : null}
      {status === "unconfigured" ? (
        <p role="alert" className="mt-6 text-sm font-medium text-brand-brown">
          This form is not connected to an inbox yet, so the message was not sent.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-orange px-8 py-3 text-xs font-bold uppercase tracking-widest text-brand-brown transition-colors duration-200 hover:bg-brand-orange-dark disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
