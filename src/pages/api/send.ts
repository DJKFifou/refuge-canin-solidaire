import type { APIRoute } from "astro";

import { Resend } from "resend";

const resend = new Resend("re_7WEPTLXX_KBjY4nFjTYSwqy2snorHMshs");

console.log("resend : ", resend);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString();
  const name = formData.get("name")?.toString();

  const isMajor = formData.get("major")?.toString();
  const housingType = formData.get("housing")?.toString();
  const exterior = formData.get("exterior")?.toString();
  const living = formData.get("living")?.toString();
  const children = formData.get("children")?.toString();
  const animals = formData.get("animals")?.toString();
  const dog = formData.get("dog")?.toString();
  const dogAlone = formData.get("dog-alone")?.toString();
  const accordingTime = formData.get("according-time")?.toString();
  const absences = formData.get("absences")?.toString();
  const veterinaryCosts = formData.get("veterinary-costs")?.toString();
  const adoptionReason = formData.get("adoption-reason")?.toString();

  const supportType = formData.get("support-type")?.toString();
  const particularSupport = formData.get("particular-support")?.toString();

  const benevolatSpendtime = formData.get("benevolat-spendtime")?.toString();
  const intervention = formData.getAll("intervention") as string[];
  const domain = formData.getAll("domain") as string[];
  const benevolatReason = formData.get("benevolat-reason")?.toString();

  const collaboration = formData.get("collaboration")?.toString();

  const htmlContent = `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <h1>Nouvelle soumission de formulaire</h1>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Nom Prénom :</strong> ${name}</p>
  </div>
  `;

  const htmlContentForClient = `
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <h1>Récap du formulaire</h1>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Nom Prénom :</strong> ${name}</p>
  </div>
  `;

  const htmlContentContactAdoption = `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
    <h2 style="color: #333;">📝 Nouvelle demande d'adoption</h2>

    <div style="margin-bottom: 1rem;">
      <h3>📋 Informations générales</h3>
      <p><strong>📧 Email :</strong> ${email}</p>
      <p><strong>📞 Téléphone :</strong> ${phone}</p>
      <p><strong>👤 Nom Prénom :</strong> ${name}</p>
    </div>

    <hr style="margin: 20px 0;">

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">🏡 Cadre de vie et environnement</h3>
      <p><strong>🗓️ Êtes-vous majeur ?</strong> ${isMajor}</p>
      <p><strong>🏠 Type de logement :</strong> ${housingType}</p>
      <p><strong>🌳 Accès extérieur sécurisé :</strong> ${exterior}</p>
      <p><strong>👥 Nombre de personnes au domicile :</strong> ${living}</p>
      <p><strong>👶 Enfants dans le foyer :</strong> ${children}</p>
      <p><strong>🐾 Autres animaux :</strong> ${animals}</p>
      <p><strong>🐶 Avez-vous déjà eu un chien :</strong> ${dog}</p>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">⏱️ Temps et disponibilité</h3>
      <p><strong>⏳ Temps seul par jour :</strong> ${dogAlone}</p>
      <p><strong>🕐 Temps quotidien accordé :</strong> ${accordingTime}</p>
      <p><strong>🏖️ Mode de garde en cas d'absence :</strong> ${absences}</p>
    </div>

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">🤝 Consentement et engagement</h3>
      <p><strong>💊 Prêt(e) à engager des frais vétérinaires :</strong> ${veterinaryCosts}</p>
      <p><strong>💬 Pourquoi souhaitez-vous adopter un chien ?</strong><br>${adoptionReason}</p>
      <p><strong>✅ Engagements :</strong></p>
      <ul>
        <li>Conscient(e) des besoins d’un chien : ✔️</li>
        <li>Adhésion aux valeurs du refuge : ✔️</li>
      </ul>
    </div>
  </div>
`;

  const htmlContentContactParrainage = `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
    <h2 style="color: #333;">📝 Nouvelle demande de parrainage</h2>

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">Informations générales</h3>
      <p><strong>📧 Email :</strong> ${email}</p>
      <p><strong>📞 Téléphone :</strong> ${phone}</p>
      <p><strong>👤 Nom Prénom :</strong> ${name}</p>
    </div>

    <hr style="margin: 20px 0;">

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">🐶 Type de parrainage souhaité</h3>
      <p><strong>🎯 Type de parrainage :</strong> ${supportType}</p>
      <p><strong>❓ Parrainage d’un chien en particulier :</strong> ${particularSupport}</p>
    </div>
  </div>
`;

  const htmlContentBenevolat = `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
    <h2 style="color: #333;">🙋 Nouvelle demande de bénévolat</h2>

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">📋 Informations générales</h3>
      <p><strong>👤 Nom Prénom :</strong> ${name}</p>
      <p><strong>📧 Email :</strong> ${email}</p>
      <p><strong>📞 Téléphone :</strong> ${phone}</p>
    </div>

    <hr style="margin: 20px 0;">

    <div style="margin-bottom: 1rem;">
      <h3 style="margin-bottom: 0.5rem;">💼 Compétences et disponibilités</h3>
      <p><strong>⏳ Temps disponible :</strong> ${benevolatSpendtime}</p>
      <p><strong>🕒 Disponibilités :</strong> ${intervention.join(", ") || "Non précisé"}</p>
      <p><strong>🛠️ Domaines d’intervention :</strong> ${domain.join(", ") || "Non précisé"}</p>
    </div>

    <hr style="margin: 20px 0;">

    <div>
      <h3>💡 Motivation</h3>
      <p><strong>🗣️ Raison :</strong> ${benevolatReason}</p>
    </div>
  </div>
`;

  const htmlContentPartenaire = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
      <h2 style="color: #333;">🙋 Nouvelle demande de Partenariat</h2>

      <div style="margin-bottom: 1rem;">
        <h3 style="margin-bottom: 0.5rem;">📋 Informations générales</h3>
        <p><strong>👤 Nom Prénom :</strong> ${name}</p>
        <p><strong>📧 Email :</strong> ${email}</p>
        <p><strong>📞 Téléphone :</strong> ${phone}</p>
      </div>

      <hr style="margin: 20px 0;">

      <div>
        <h3>💡 Détails / propositions</h3>
        <p><strong>🗣️ Structure / Collaboration :</strong> ${collaboration}</p>
      </div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "refuge-canin-solidaire@resend.dev",
    to: ["lust.maxime@outlook.fr"],
    subject: "Newsletter du Refuge Canin Solidaire",
    html: htmlContentContactAdoption,
  });

  await resend.emails.send({
    from: "refuge-canin-solidaire@resend.dev",
    to: [email],
    subject: "Mail envoyé au Refuge Canin Solidaire",
    html: htmlContentContactAdoption,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response("Email sent successfully!");
};
