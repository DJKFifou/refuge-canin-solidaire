import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, e as renderScript, r as renderComponent } from './astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CardStep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardStep;
  const {
    title,
    description,
    imgSrc,
    objective,
    i = 0
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-step w-96 h-auto bg-beige transform translate-y-[300%] space-y-5 p-5 rounded-2xl border border-gray-400"> <div class="flex justify-between items-center"> <div class="bg-green rounded-full p-2 text-blue_black w-10 h3">${i + 1}</div> <p class="bg-white border rounded-2xl border-gray-200 p-3">jour 1</p> </div> <h3 class="h3">${title}</h3> <p>${description}</p> <img${addAttribute(imgSrc, "src")} class="w-full h-36 object-cover"> <p class="bg-green p-3.5 text-blue_black">${objective}</p> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/CardStep.astro", void 0);

const $$Astro = createAstro();
const $$StepFromBottom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StepFromBottom;
  const { steps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen w-full flex justify-center items-center bg-blue" id="caca"> <img src="/svg/bg/wave-blue-top.svg" class="w-full absolute -top-16 rotate-180"> <h2 class="h2 text-center z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
Avant chaque adoption, il y a un chemin parcouru.
</h2> <div class="z-10 text-center w-full px-4 mx-auto"> <div class="flex justify-center " id="cards-container"> ${steps.map((step, i) => renderTemplate`<div class="relative"${addAttribute(`transform: translateX(${ -15 * i}px) rotate(${i % 2 === 0 ? -2 : 1.2}deg); z-index: ${100 - i};`, "style")}> ${renderComponent($$result, "CardStep", $$CardStep, { "title": step.title, "description": step.description, "imgSrc": step.imgSrc, "objective": step.objective, "i": i })} </div>`)} </div> </div> </section> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/StepFromBottom.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/StepFromBottom.astro", void 0);

export { $$StepFromBottom as $ };
