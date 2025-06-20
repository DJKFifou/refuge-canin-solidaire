import { $ as $$Layout } from '../chunks/Layout_BzpR-Vtn.mjs';
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute } from '../chunks/astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { a as getDogsWithFilters, b as getAvailableBreeds, c as getAvailableGenders } from '../chunks/sanity_DobQbu2O.mjs';
import { $ as $$CardsDogs } from '../chunks/CardsDogs_DTnOToNi.mjs';
import { $ as $$StepFromBottom } from '../chunks/StepFromBottom_DkfmkVHj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allDogs = await getDogsWithFilters({});
  const availableBreeds = await getAvailableBreeds();
  const availableGenders = await getAvailableGenders();
  const steps = [
    {
      title: "Renseignements & prise de contact",
      imgSrc: "/img/steps/step-1.png",
      description: "Vous remplissez un formulaire simple pour nous parler de vous, de votre cadre de vie et de vos attentes.",
      objective: "Objectif : mieux vous conna\xEEtre pour guider l'adoption, et assurer un bon d\xE9part."
    },
    {
      title: "Entretien t\xE9l\xE9phonique",
      imgSrc: "/img/steps/step-2.png",
      description: "Un membre de l'\xE9quipe vous appelle pour discuter de votre projet d'adoption, et commencer \xE0 identifier des profils compatibles.",
      objective: "Un moment d'\xE9coute pour faire connaissance, sans pression."
    },
    {
      title: "Rencontre au refuge",
      imgSrc: "/img/steps/step-3.png",
      description: "Vous venez au refuge rencontrer le(s) chien(s) qui pourraient vous correspondre. C'est un vrai temps d'observation, d'\xE9change.",
      objective: "Parce qu'un lien, \xE7a ne se d\xE9cide pas derri\xE8re un \xE9cran."
    },
    {
      title: "Ateliers & accompagnement",
      imgSrc: "/img/steps/step-4.png",
      description: "Avant l'adoption, vous participez \xE0 une session d'information (ou un atelier) pour vous pr\xE9parer au quotidien avec votre futur chien : besoins, langage canin, int\xE9gration \xE0 la maison\u2026",
      objective: "Un animal n'est pas livr\xE9 avec un mode d'emploi, mais nous, on vous accompagne."
    },
    {
      title: "Finalisation de l'adoption",
      imgSrc: "/img/steps/step-5.png",
      description: "Une fois les \xE9tapes franchies sereinement, l'adoption peut \xEAtre officialis\xE9e. Nous restons disponibles apr\xE8s, pour le suivi et le soutien post-adoption.",
      objective: "C'est la fin du processus, mais le d\xE9but d'une belle histoire."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nos chiens - Refuge" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-16"> ${renderComponent($$result2, "StepFromBottom", $$StepFromBottom, { "steps": steps })} </div> <section class="container mx-auto px-4 py-8"> <div class="mb-12 bg-white"> <!-- Formulaire sans method="GET" pour éviter le refresh --> <form id="filter-form" class="space-y-4"> <div class="flex justify-between items-end gap-6"> <div> <label for="name" class="text-sm font-medium mb-2 hidden">
Nom du chien
</label> <input type="text" id="name" name="name" placeholder="Nom du chien" class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="flex gap-4"> <div> <label for="gender" class="hidden text-sm font-medium mb-2">
Sexe
</label> <select id="gender" name="gender" class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> <option value="">Sexe</option> ${availableGenders.map((gender) => renderTemplate`<option${addAttribute(gender, "value")}> ${gender} </option>`)} </select> </div> <div> <label for="breed" class="hidden text-sm font-medium mb-2">
Race
</label> <select id="breed" name="breed" class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> <option value="">Races</option> ${availableBreeds.map((breed) => renderTemplate`<option${addAttribute(breed, "value")}> ${breed} </option>`)} </select> </div> </div> </div> <div class="flex gap-3 pt-4"> <button type="button" id="reset-btn" class="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors">
Réinitialiser
</button> </div> </form> </div> <div id="results-container"> <div class="mb-6"> <h2 id="results-title" class="text-2xl font-bold mb-2"> ${allDogs.length} chien${allDogs.length > 1 ? "s" : ""} disponible${allDogs.length > 1 ? "s" : ""} </h2> <div id="active-filters" class="flex-wrap gap-2 mb-4 hidden"> <span class="text-sm font-medium">Filtres :</span> <div id="filter-tags"></div> </div> </div> <div id="dogs-grid" class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${allDogs.map((dog) => renderTemplate`<div class="dog-card"${addAttribute(dog.name?.toLowerCase() || "", "data-name")}${addAttribute(dog.gender || "", "data-gender")}${addAttribute(dog.breed || "", "data-breed")}> ${renderComponent($$result2, "CardsDogs", $$CardsDogs, { "data": dog })} </div>`)} </div> <div id="no-results" class="text-center py-12 hidden"> <h2 class="text-xl font-semibold mb-4">
Aucun chien ne correspond à votre recherche
</h2> <button id="show-all-btn" class="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
Voir tous les chiens
</button> </div> </div> </section> ${renderScript($$result2, "/home/eole/dev/refuge-canin-solidaire/src/pages/dogs/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/pages/dogs/index.astro", void 0);

const $$file = "/home/eole/dev/refuge-canin-solidaire/src/pages/dogs/index.astro";
const $$url = "/dogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
