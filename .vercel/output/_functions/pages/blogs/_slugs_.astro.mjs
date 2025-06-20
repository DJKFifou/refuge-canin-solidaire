import { $ as $$Layout } from '../../chunks/Layout_6yohoH12.mjs';
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CJ-8rX1v.mjs';
import 'kleur/colors';
import { g as getBlog, u as urlFor } from '../../chunks/sanity_DobQbu2O.mjs';
import { f as formatDate } from '../../chunks/index_Do7ExkXM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slugs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugs;
  const { slugs } = Astro2.params;
  const blog = await getBlog(slugs ?? null);
  return renderTemplate`${!blog ? renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Article introuvable" }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<p class="text-center text-gray-500 text-lg mt-8">
Le blogo demandé est introuvable
</p>` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.title }, { "default": async ($$result2) => renderTemplate`<article class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-5"><div class="flex items-center gap-6"><div class="px-4 py-2 bg-white rounded border border-thirdLightGrey"><p class="text-xs font-bold leading-[130%] text-darkBlue">Coulisse du refuge</p></div><time${addAttribute(blog.publishedAt, "datetime")} class="font-medium leading-[130%] text-darkBlue">${formatDate(blog.publishedAt)}</time></div><div class="flex flex-col gap-16"><h1 class="text-[60px] font-bold text-darkBlue -tracking-[1.2px]">${blog.title}</h1>${blog.image && renderTemplate`<img${addAttribute(urlFor(blog.image).width(800).height(400).url(), "src")}${addAttribute(blog.image.alt || blog.title, "alt")} class="w-full h-auto rounded-lg shadow-md mb-8">`}${blog.subtitle && renderTemplate`<h2 class="text-2xl font-bold leading-[130%] text-darkBlue">${blog.subtitle}</h2>`}</div><p class="text-lg leading-relaxed text-darkBlue whitespace-pre-line">${blog.description}</p></article>` })}`}`;
}, "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/pages/blogs/[slugs].astro", void 0);

const $$file = "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/pages/blogs/[slugs].astro";
const $$url = "/blogs/[slugs]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slugs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
