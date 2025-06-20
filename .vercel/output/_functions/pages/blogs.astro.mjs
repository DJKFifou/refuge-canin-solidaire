import { $ as $$Layout } from '../chunks/Layout_BzpR-Vtn.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from '../chunks/index_Do7ExkXM.mjs';
import { u as urlFor, d as getBlogs } from '../chunks/sanity_DobQbu2O.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { data, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"> ${data?.image ? renderTemplate`<img class="w-full h-56 object-cover"${addAttribute(urlFor(data.image).width(500).height(300).url(), "src")}${addAttribute(`${data.title}`, "alt")} loading="lazy">` : renderTemplate`<div class="w-full h-56 bg-gray-300"></div>`} <div class="p-4 flex flex-col flex-grow"> <h3 class="text-lg font-extrabold mb-2"> <a class="text-gray-900 hover:text-indigo-600 transition-colors duration-200"${addAttribute(`/${title}/${data.slug.current}`, "href")}> ${data.title} </a> </h3> <p class="text-gray-600 mb-4 flex-grow">${data.subtitle || "Pas de sous-titre"}</p> <p class="text-gray-500 text-sm font-semibold">${formatDate(data.publishedAt || data._createdAt)}</p> </div> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blogs" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid gap-6grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-8 max-w-7xl mx-auto
  "> ${posts.length ? posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": "blogs", "data": post })}`) : renderTemplate`<h1>aucun blog disponible...</h1>`} </section> ` })}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/pages/blogs/index.astro", void 0);

const $$file = "/home/eole/dev/refuge-canin-solidaire/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
