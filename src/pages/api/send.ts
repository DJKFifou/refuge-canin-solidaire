import type { APIRoute } from "astro";

import { Resend } from "resend";

const resend = new Resend("re_7WEPTLXX_KBjY4nFjTYSwqy2snorHMshs");

console.log("resend : ", resend);

export const POST: APIRoute = async ({ request }) => {
  console.log("request : ", request);
  const formData = await request.formData();
  console.log("formData : ", formData);
  console.log("firstname : ", formData.get("firstname"));
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const firstname = formData.get("firstname")?.toString() || "";
  const lastname = formData.get("lastname")?.toString() || "";
  const htmlContent = `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <h1>Nouvelle soumission de formulaire</h1>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Prénom :</strong> ${firstname}</p>
    <p><strong>Nom :</strong> ${lastname}</p>
  </div>
  `;
  const htmlContentForClient = `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <h1>Récap du formulaire</h1>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Prénom :</strong> ${firstname}</p>
    <p><strong>Nom :</strong> ${lastname}</p>
  </div>
  `;
  const { error } = await resend.emails.send({
    from: "refuge-canin-solidaire@resend.dev",
    to: ["lust.maxime@outlook.fr"],
    subject: "Newsletter du Refuge Canin Solidaire",
    html: htmlContent,
  });

  await resend.emails.send({
    from: "refuge-canin-solidaire@resend.dev",
    to: [email],
    subject: "Mail envoyé au Refuge Canin Solidaire",
    html: htmlContentForClient,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response("Email sent successfully!");
};
