import { $ as $$Layout } from '../../chunks/Layout_CQ-7gkKE.mjs';
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { g as getBlog, u as urlFor } from '../../chunks/sanity_DGch26_2.mjs';
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
</p>` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": blog.title }, { "default": async ($$result2) => renderTemplate`<article class="max-w-3xl mx-auto px-4 py-12"><h1 class="text-4xl font-bold text-gray-900 mb-4">${blog.title}</h1>${blog.subtitle && renderTemplate`<h2 class="text-2xl font-medium text-gray-700 mb-6">${blog.subtitle}</h2>`}${blog.image && renderTemplate`<img${addAttribute(urlFor(blog.image).width(800).height(400).url(), "src")}${addAttribute(blog.image.alt || blog.title, "alt")} class="w-full h-auto rounded-lg shadow-md mb-8">`}<time${addAttribute(blog.publishedAt, "datetime")} class="block text-sm text-gray-500 mb-6">${formatDate(blog.publishedAt)}</time><p class="text-lg leading-relaxed text-gray-800 whitespace-pre-line">${blog.description}</p></article>` })}`}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/pages/blogs/[slugs].astro", void 0);

const $$file = "/home/eole/dev/refuge-canin-solidaire/src/pages/blogs/[slugs].astro";
const $$url = "/blogs/[slugs]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slugs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
