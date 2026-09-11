import { SITE_URL } from "@/lib/site";

// FormSubmit sends a one-off confirmation to the inbox on first use.
export const FORM_INBOX = "hillymakes@gmail.com";
export const FORM_SUBJECT = "hexakin.com contact";
export const CONTACT_PATH = "/contact";
export const THANKS_PATH = "/thanks";
export const FORM_ACTION = `https://formsubmit.co/${FORM_INBOX}`;
export const formThanksUrl = `${SITE_URL}${THANKS_PATH}`;
export const FORM_CAPTCHA = "false";
export const FORM_TEMPLATE = "table";
