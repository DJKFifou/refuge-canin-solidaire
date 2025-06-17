import type { APIRoute } from "astro";

import { Resend } from "resend";

const resend = new Resend("re_7WEPTLXX_KBjY4nFjTYSwqy2snorHMshs");

export const GET: APIRoute = async () => {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["lust.maxime@outlook.fr"],
    subject: "Test Astro + Resend",
    html: "<p>Coucou depuis Astro !</p>",
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};
