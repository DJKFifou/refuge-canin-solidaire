import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderScript, d as addAttribute, b as renderTemplate, r as renderComponent, u as unescapeHTML } from './astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { PortableText } from '@portabletext/react';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { firstOpen = false, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-wx4eh2ni> ${items.map((item, index) => renderTemplate`<div class="border-b border-gray-200 last:border-b-0" data-astro-cid-wx4eh2ni> <button class="accordion-header w-full px-6 py-4 text-left  focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-inset transition-colors duration-200 flex justify-between items-center"${addAttribute(`accordion-${index}`, "data-target")}${addAttribute(index === 0 && firstOpen ? "true" : "false", "aria-expanded")} data-astro-cid-wx4eh2ni> <div class="flex items-center gap-3" data-astro-cid-wx4eh2ni> ${item.icon && renderTemplate`<img${addAttribute(item.icon, "src")} class="size-7 p-1 bg-[#FFC9AD] rounded-full" data-astro-cid-wx4eh2ni>`} <span class="text-lg font-semibold text-gray-800" data-astro-cid-wx4eh2ni>${item.title}</span> </div> <svg class="accordion-icon w-5 h-5 text-gray-500 transform transition-transform duration-500 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wx4eh2ni> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-wx4eh2ni></path> </svg> </button> <div${addAttribute(`accordion-content overflow-hidden transition-all duration-700 ease-in-out ${index === 0 && firstOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`, "class")}${addAttribute(`accordion-${index}`, "id")} style="transition-property: max-height, opacity, transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);" data-astro-cid-wx4eh2ni> <div class="accordion-content-inner px-6 py-5 bg-white text-gray-700 leading-relaxed transform transition-transform duration-700 ease-out" data-astro-cid-wx4eh2ni> ${item.type === "portableText" ? renderTemplate`${renderComponent($$result, "PortableText", PortableText, { "value": item.content, "data-astro-cid-wx4eh2ni": true })}` : renderTemplate`<div data-astro-cid-wx4eh2ni>${unescapeHTML(item.content)}</div>`} </div> </div> </div>`)} </div>  ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/Accordion.astro", void 0);

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { src, text, class: customClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`rounded-xl border bg-white border-gray-400 p-4 ${customClass ?? ""}`, "class")}${addAttribute(src, "href")}> ${text} </a>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/Button.astro", void 0);

export { $$Button as $, $$Accordion as a };
