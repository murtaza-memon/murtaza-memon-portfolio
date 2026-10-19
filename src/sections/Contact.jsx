import { useRef, useState } from "react";
import { contactCards, site } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";

const initialValues = { name: "", email: "", subject: "", message: "", website: "" };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const setField = (name) => (event) => {
    setValues((v) => ({ ...v, [name]: event.target.value }));
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your full name.";
    if (!values.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid email address, for example name@example.com.";
    if (!values.subject.trim()) e.subject = "Please enter a subject.";
    if (!values.message.trim()) e.message = "Please enter a message.";
    else if (values.message.trim().length < 10)
      e.message = "Your message should be at least 10 characters long.";
    return e;
  };

  const fieldProps = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange: setField(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `cf-${name}-error` : undefined,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setFeedback({
        type: "error",
        text: "Please fix the highlighted fields and try again.",
      });
      const first = formRef.current?.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setFeedback({
        type: "info",
        text: "Your message passed validation, but no email delivery service is connected yet. Set the VITE_CONTACT_ENDPOINT environment variable (see README) or email me directly at ",
        link: { href: `mailto:${site.email}`, label: site.email },
      });
      return;
    }

    setSending(true);
    setFeedback(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          website: values.website,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFeedback({
        type: "success",
        text: "Thanks! Your message has been sent. I'll get back to you soon.",
      });
      setValues(initialValues);
    } catch {
      setFeedback({
        type: "error",
        text: "Something went wrong while sending your message. Please email me directly at ",
        link: { href: `mailto:${site.email}`, label: site.email },
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHead
          tag="Contact"
          title="Let's Work Together"
          desc="Have a project in mind? Send a message or reach me directly — I'm available for freelance work."
        />
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-info-cards">
              {contactCards.map((card) => {
                const inner = (
                  <>
                    <div className="contact-ico" aria-hidden="true">
                      <i className={card.icon} />
                    </div>
                    <div className="contact-card-text">
                      <span className="contact-key">{card.key}</span>
                      {card.href ? (
                        <a className="contact-value" href={card.href}>
                          {card.value}
                        </a>
                      ) : (
                        <span className="contact-value">{card.value}</span>
                      )}
                    </div>
                  </>
                );
                return (
                  <div className="contact-card" key={card.key}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <a
              className="btn btn-primary contact-fiverr"
              href={site.fiverr}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-briefcase" aria-hidden="true" />
              Hire Me on Fiverr
              <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
            </a>

            <div className="contact-side">
              <span className="contact-cta">Find me on</span>
              <div className="socials">
                <a
                  className="social-btn"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a
                  className="social-btn"
                  href={site.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fiverr"
                >
                  <i className="fas fa-briefcase" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" ref={formRef} noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label htmlFor="cf-name">
                  Full Name <span className="req" aria-hidden="true">*</span>
                </label>
                <input type="text" autoComplete="name" required {...fieldProps("name")} />
                {errors.name && (
                  <p className="field-error" id="cf-name-error">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="cf-email">
                  Email Address <span className="req" aria-hidden="true">*</span>
                </label>
                <input type="email" autoComplete="email" required {...fieldProps("email")} />
                {errors.email && (
                  <p className="field-error" id="cf-email-error">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="cf-subject">
                Subject <span className="req" aria-hidden="true">*</span>
              </label>
              <input type="text" required {...fieldProps("subject")} />
              {errors.subject && (
                <p className="field-error" id="cf-subject-error">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cf-message">
                Message <span className="req" aria-hidden="true">*</span>
              </label>
              <textarea rows="5" required {...fieldProps("message")} />
              {errors.message && (
                <p className="field-error" id="cf-message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="hp-field" aria-hidden="true">
              <label htmlFor="cf-website">Website</label>
              <input type="text" id="cf-website" name="website" tabIndex="-1" autoComplete="off" value={values.website} onChange={setField("website")} />
            </div>

            {feedback && (
              <div
                className={`form-feedback ${feedback.type}`}
                role={feedback.type === "success" ? "status" : "alert"}
              >
                {feedback.text}
                {feedback.link && (
                  <a href={feedback.link.href}>{feedback.link.label}</a>
                )}
              </div>
            )}

            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
