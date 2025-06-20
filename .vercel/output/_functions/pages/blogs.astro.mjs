import { $ as $$Layout } from '../chunks/Layout_6yohoH12.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CJ-8rX1v.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from '../chunks/index_Do7ExkXM.mjs';
import { u as urlFor, d as getBlogs } from '../chunks/sanity_DobQbu2O.mjs';
import { $ as $$Hero } from '../chunks/Hero_CR6UzfCT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { data, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${title}/${data.slug.current}`, "href")} class="flex flex-col gap-4 border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 p-8 bg-lightBrown"> ${data?.image ? renderTemplate`<img class="w-full object-cover rounded-lg h-43"${addAttribute(urlFor(data.image).width(500).height(300).url(), "src")}${addAttribute(`${data.title}`, "alt")} loading="lazy">` : renderTemplate`<div class="w-full h-43 bg-gray-300"></div>`} <h4 class="text-2xl font-bold leading-[130%] text-darkBlue"> ${data.title} </h4> <p>${data.subtitle || "Pas de sous-titre"}</p> <hr class="text-thirdLightGrey"> <div class="flex justify-between items-center"> <div class="px-4 py-2 bg-white rounded-lg border border-thirdLightGrey"> <p class="text-xs font-bold leading-[130%] text-darkBlue">Coulisse du refuge</p> </div> <p class="text-darkBlue text-sm font-medium leading-[130%]">${formatDate(data.publishedAt || data._createdAt)}</p> </div> </a>`;
}, "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blogs" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "img_url": "/images/hero-blog.jpg", "title": "Infos et conseils pour adopter, comprendre & aimer.", "line": true })} ${maybeRenderHead()}<section class="container mx-auto flex flex-col gap-18 mt-13 mb-35"> <h5 class="text-center text-xl font-medium leading-[130%]">Retrouvez ici l’ensemble de nos articles, toutes thématiques confondues.</h5> <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"> ${posts.length ? posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": "blogs", "data": post })}`) : renderTemplate`<h1>aucun blog disponible...</h1>`} </div> </section> ` })}`;
}, "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/pages/blogs/index.astro", void 0);

const $$file = "/Users/favoreat/Desktop/PROJETS/ECV/refuge-canin-solidaire/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
