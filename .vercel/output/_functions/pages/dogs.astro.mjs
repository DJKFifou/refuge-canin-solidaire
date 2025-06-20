import { $ as $$Layout } from '../chunks/Layout_CQ-7gkKE.mjs';
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { a as getDogs } from '../chunks/sanity_DGch26_2.mjs';
import { $ as $$CardsDogs } from '../chunks/CardsDogs_CdQ04XtT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const dogs = await getDogs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto"> ${dogs.length > 0 ? renderTemplate`<div class=""> <div class="mb-6"> <h2 class="h2">${dogs.length} chiens disponibles</h2> <p class="mb-4">Voici les chiens actuellement présents au refuge.</p> </div> <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-8"> ${dogs.map((dog) => renderTemplate`${renderComponent($$result2, "CardsDogs", $$CardsDogs, { "data": dog })}`)} </div> </div>` : renderTemplate`<h1 class="text-xl font-semibold col-span-full text-center mt-8">
Aucun chien disponible...
</h1>`} </section> ` })}`;
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
