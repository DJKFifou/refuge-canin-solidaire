import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_7WEPTLXX_KBjY4nFjTYSwqy2snorHMshs");
const POST = async ({ request }) => {
  const formData = await request.formData();
  const formType = formData.get("form-type")?.toString();
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
  const benevolatSpendtime = formData.get("benevolat-spendtime")?.toString();
  const intervention = formData.getAll("intervention");
  const domain = formData.getAll("domain");
  const benevolatReason = formData.get("benevolat-reason")?.toString();
  const collaboration = formData.get("collaboration")?.toString();
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
  let htmlContent = "";
  let subject = "";
  const to = ["lust.maxime@outlook.fr"];
  switch (formType) {
    case "adoption":
      htmlContent = htmlContentContactAdoption;
      subject = "📩 Nouvelle demande d'adoption";
      break;
    case "benevolat":
      htmlContent = htmlContentBenevolat;
      subject = "🙋 Nouvelle demande de bénévolat";
      break;
    case "partenaire":
      htmlContent = htmlContentPartenaire;
      subject = "🤝 Nouvelle demande de partenariat";
      break;
    default:
      return new Response("Type de formulaire inconnu", { status: 400 });
  }
  await resend.emails.send({
    from: "refuge-canin-solidaire@resend.dev",
    to,
    subject,
    html: htmlContent
  });
  await resend.emails.send({
    from: "refuge-canin-solidaire@resend.dev",
    to: [email],
    subject: "Résumé de votre mail envoyé au Refuge Canin Solidaire",
    html: htmlContent
  });
  return new Response("Email sent successfully!");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
