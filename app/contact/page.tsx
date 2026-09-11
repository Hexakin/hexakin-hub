import type { Metadata } from "next";
import { SITE_META, SITE_URL } from "@/lib/site";
import {
  CONTACT_PATH,
  FORM_ACTION,
  FORM_CAPTCHA,
  FORM_SUBJECT,
  FORM_TEMPLATE,
  formThanksUrl,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: SITE_META,
  alternates: {
    canonical: `${SITE_URL}${CONTACT_PATH}`,
  },
};

export default function ContactPage() {
  return (
    <main className="page">
      <div className="well">
        <h1 className="index-title">Contact</h1>
        <p className="dek">Write to Hexakin.</p>
        <form className="contact-form" action={FORM_ACTION} method="POST">
          <input type="hidden" name="_subject" value={FORM_SUBJECT} />
          <input type="hidden" name="_next" value={formThanksUrl} />
          <input type="hidden" name="_captcha" value={FORM_CAPTCHA} />
          <input type="hidden" name="_template" value={FORM_TEMPLATE} />
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={8}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
