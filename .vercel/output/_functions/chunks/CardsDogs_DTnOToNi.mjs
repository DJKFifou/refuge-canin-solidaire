import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, F as Fragment, b as renderTemplate, d as addAttribute } from './astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { u as urlFor } from './sanity_DobQbu2O.mjs';

const $$Astro = createAstro();
const $$CardsDogs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardsDogs;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="group flex flex-col p-3 bg-beige border border-gray-300 rounded-md hover:shadow-md transition-shadow duration-200"> <div class="relative w-full aspect-square"> ${data?.mainImage ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <img class="w-full h-full object-cover rounded-md"${addAttribute(urlFor(data.mainImage).width(1e3).height(1e3).url(), "src")}${addAttribute(`${data.name}`, "alt")} loading="lazy"> <a${addAttribute(`/dogs/${data.slug.current}`, "href")} class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/15 text-white font-bold text-lg transition-opacity duration-300">
Découvré ${data.name} </a> ` })}` : renderTemplate`<div class="w-full h-full bg-gray-300 rounded-md"></div>`} </div> <div class="p-4 flex flex-col flex-grow"> <h3 class="text-lg font-extrabold mb-2"> <span class="text-gray-900">moi c'est <span class="font-variant text-2xl">${data.name}</span></span> </h3> <p class="text-gray-600 mb-4 flex-grow">${data.shortDescription || "e"}</p> </div> </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/CardsDogs.astro", void 0);

export { $$CardsDogs as $ };
