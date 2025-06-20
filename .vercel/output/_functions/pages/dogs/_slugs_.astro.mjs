import { $ as $$Layout } from '../../chunks/Layout_6yohoH12.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as addAttribute } from '../../chunks/astro/server_CJ-8rX1v.mjs';
import 'kleur/colors';
import { e as getThreeDogs, f as getDog, u as urlFor } from '../../chunks/sanity_DobQbu2O.mjs';
import { f as formatDate } from '../../chunks/index_Do7ExkXM.mjs';
import { PortableText } from '@portabletext/react';
import { $ as $$Button, a as $$Accordion } from '../../chunks/Button_BWy_f3x6.mjs';
import { $ as $$CardsDogs } from '../../chunks/CardsDogs_lCmAxlPG.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$TilteText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TilteText;
  const { title, description, buttons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex justify-center items-center p-36 overflow-hidden"> <div class="-z-10"> <img src="/svg/dogs/dog-3.svg" class="absolute bottom-10 left-28"> <img src="/svg/dogs/dog-4.svg" class="absolute top-0 right-28"> </div> <div class="max-w-4xl text-center space-y-6"> <h2 class="z-10 h2">${title}</h2> <p class="text-lg">${description}</p> <div class="flex flex-wrap justify-center gap-4"> ${buttons.map((btn) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "src": btn.src, "text": btn.text })}`)} </div> </div> </section>`;
}, "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/components/TilteText.astro", void 0);

const $$Astro$1 = createAstro();
const $$ThreeDog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ThreeDog;
  const { title, btnLink, btnText } = Astro2.props;
  const dogs = await getThreeDogs();
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-36"> <div class="flex justify-between items-center"> <h2 class="h2">${title}</h2> ${renderComponent($$result, "Button", $$Button, { "src": btnLink, "text": btnText })} </div> <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-8"> ${dogs.map((dog) => renderTemplate`${renderComponent($$result, "CardsDogs", $$CardsDogs, { "data": dog })}`)} </div> </section>`;
}, "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/components/ThreeDog.astro", void 0);

const $$Astro = createAstro();
const $$slugs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugs;
  const { slugs } = Astro2.params;
  const dog = await getDog(slugs ?? null);
  const accordionData = [
    {
      title: "Mon Histoire",
      content: dog.historyDescription,
      icon: "/svg/page-dog/edit-2.svg",
      type: "portableText"
    },
    {
      title: "Ce dont j\u2019ai besoin",
      content: dog.needsDescription,
      icon: "/svg/page-dog/smile.svg",
      type: "portableText"
    },
    {
      title: "Mes affinit\xE9s",
      content: dog.affinitiesDescription,
      icon: "/svg/page-dog/pocket.svg",
      type: "portableText"
    },
    {
      title: "Entretien & rythme",
      content: dog.healthDescription,
      icon: "/svg/page-dog/pocket.svg",
      type: "portableText"
    },
    {
      title: "Entretien & rythme",
      content: `
		<div class="flex gap-2">
			<span class="bg-grey px-3 py-1 rounded-full text-sm">
				${dog.age}ans
			</span>
			<span class="bg-grey px-3 py-1 rounded-full text-sm">
				${dog.weight}kg
			</span>
			<span class="bg-grey px-3 py-1 rounded-full text-sm">
				${dog.size}
			</span>
			<span class="bg-grey px-3 py-1 rounded-full text-sm">
				Arriv\xE9 au refuge :${formatDate(dog.arrivalDate)}
			</span>
		</div>
	`,
      icon: "/svg/page-dog/other.svg",
      type: "text"
    }
  ];
  return renderTemplate`${!dog ? renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-12 text-center"><h1 class="text-3xl font-bold text-gray-900 mb-4">Chien introuvable</h1><p class="text-gray-600 mb-6">
Le chien que vous recherchez n'est pas disponible ou n'existe plus.
</p><a href="/dogs" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
Retour à la liste des chiens
</a></div>` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`<section class="container mx-auto flex py-28 gap-12 relative"><div class="w-1/2">${dog.mainImage && renderTemplate`<img class="w-full h-full object-cover rounded-md"${addAttribute(urlFor(dog.mainImage).width(1e3).height(1e3).url(), "src")}${addAttribute(`${dog.name}`, "alt")} loading="lazy">`}</div><!-- Colonne texte --><div class="w-1/2 -ml-20 mt-20 z-10 bg-beige p-6 border rounded-sm border-[#B8B997] space-y-6 shadow-lg"><h2 class="h2">moi c'est <span class="font-variant">${dog.name}</span></h2><div class="flex gap-3"><span class="bg-grey p-1 rounded-sm">${dog.gender}</span><span class="bg-grey p-1 rounded-sm">${dog.breed}</span></div>${renderComponent($$result2, "PortableText", PortableText, { "value": dog.historyDescription })}${renderComponent($$result2, "Accordion", $$Accordion, { "className": "bg-transparent", "items": accordionData })}</div></section>${renderComponent($$result2, "TilteText", $$TilteText, { "title": "Bienvenue au Refuge", "description": "Un lieu d\u2019accueil pour soigner les chiens et accompagner les humains.", "buttons": [
    { src: "/contact", text: "Nous contacter" },
    { src: "/adoptions", text: "Voir les chiens" }
  ] })}${renderComponent($$result2, "ThreeDog", $$ThreeDog, { "title": "Bienvenue au Refuge", "btnLink": "/adopter", "btnText": "Voir tous les chiens" })}` })}`}`;
}, "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/pages/dogs/[slugs].astro", void 0);

const $$file = "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/pages/dogs/[slugs].astro";
const $$url = "/dogs/[slugs]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slugs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
