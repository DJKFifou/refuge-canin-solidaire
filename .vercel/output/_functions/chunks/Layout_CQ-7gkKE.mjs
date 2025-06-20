import { createClient } from '@sanity/client';
import { c as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, a as createAstro, r as renderComponent, g as renderSlot, h as renderHead, d as addAttribute } from './astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"a7jn423a","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="container mx-auto"> <nav class="flex flex-col lg:flex-row gap-6 w-full lg:justify-center items-center p-6 overflow-hidden lg:overflow-visible"> <div class="flex justify-between w-full lg:w-fit"> <a href="/"> <img src="svg/Logo-Refuge-Canin-Solidaire.svg" alt="Logo Refuge Canin Solidaire"> </a> <img src="/svg/menu-burger.svg" alt="Menu burger" id="burger" class="lg:hidden cursor-pointer"> <img src="/svg/close.svg" alt="Close" id="close" class="hidden lg:hidden cursor-pointer"> </div> <ul id="menu" class="w-full lg:w-fit translate-x-full lg:translate-x-0! flex flex-col lg:flex-row gap-6 justify-center items-center h-full px-4 lg:px-0 transition-all duration-500 whitespace-nowrap"> <li class="group"> <a href="/" class="flex gap-1.5">
Notre refuge
<img src="/svg/arrow-down.svg" alt="Flèche vers le bas" class="transition-transform duration-300 group-hover:rotate-180"> </a> </li> <li class="relative group"> <a href="/" class="flex gap-1.5 items-center">
S'informer
<img src="/svg/arrow-down.svg" alt="Flèche vers le bas" class="transition-transform duration-300 group-hover:rotate-180"> </a> <ul class="hidden absolute top-full group-hover:flex flex-col whitespace-nowrap left-1/2 -translate-x-1/2 p-1.5 menu-child-box-shadow bg-white rounded-lg"> <li class="px-4 py-3 hover:font-semibold rounded-lg hover:bg-blue-100"> <a href="">Qui sommes-nous ?</a> </li> <li class="px-4 py-3 hover:font-semibold rounded-lg hover:bg-blue-100"> <a href="">Nos partenaires</a> </li> <li class="px-4 py-3 hover:font-semibold rounded-lg hover:bg-blue-100"> <a href="">FAQ</a> </li> </ul> </li> <li> <a href="/" class="">Adopter</a> </li> <li class="group"> <a href="/" class="flex gap-1.5">
Nous soutenir
<img src="/svg/arrow-down.svg" alt="Flèche vers le bas" class="transition-transform duration-300 group-hover:rotate-180"> </a> </li> <li> <a href="/" class="">Déclarer</a> </li> <li> <a href="/" class="">Boutique</a> </li> </ul> <a href="/contact" class="hidden lg:flex gap-2 px-5 py-3 bg-blue-300 text-white rounded-lg whitespace-nowrap">
Prendre contact
<img src="/svg/arrow-right.svg" alt="Flèche vers la droite"> </a> </nav> </header> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="container mx-auto mt-auto"> <div class="flex gap-20 w-full bg-blue-900 px-20 py-18 rounded-2xl"> <div class="flex flex-col gap-6 flex-1"> <h3 class="text-5xl text-white font-bold">Alors, toujours partant pour changer une vie ?</h3> <ul class="flex gap-4"> <li> <a href=""> <img src="/svg/instagram.svg" alt="Logo Instagram"> </a> </li> <li> <a href=""> <img src="/svg/linkedin.svg" alt="Logo Linkedin"> </a> </li> <li> <a href=""> <img src="/svg/facebook.svg" alt="Logo Facebook"> </a> </li> </ul> </div> <div class="flex flex-col gap-6 flex-1"> <h5 class="text-white">S’inscrire à la newsletter*</h5> <form action="" class="flex gap-2"> <div class="relative bg-white rounded-lg"> <input type="email" placeholder="olivia@untitledui.com" class="py-2.5 pl-10.5 pr-3.5 rounded-lg"> <img src="/svg/mail.svg" alt="" class="absolute top-1/2 left-3.5 -translate-y-1/2"> </div> <button type="submit" class="flex items-center gap-2 py-2 px-3.5 rounded-lg">
Envoyer
<img src="/svg/arrow-right.svg" alt=""> </button> </form> <p class="text-white">*En renseignant votre email, vous acceptez de recevoir nos communications. Désinscription possible à tout moment. <a href="" class="underline">Politique de confidentialité</a></p> </div> </div> <div class="grid grid-cols-3"> <div class="col-span-1 flex items-center"> <img src="/svg/logo-footer.svg" alt="Logo Refuge Canin Solidaire"> </div> <nav class="grid grid-cols-3 col-span-2 gap-20"> <div class="flex flex-col gap-8"> <h5 class="text-xl font-bold">Pages utiles</h5> <ul class="flex flex-col gap-4"> <li> <a href="">Urgences & numéros utiles</a> </li> <li> <a href="">Actualités</a> </li> <li> <a href="">Guide d’adoption</a> </li> <li> <a href="">Nos partenaires</a> </li> <li> <a href="">FAQ</a> </li> </ul> </div> <div class="flex flex-col gap-8"> <h5 class="text-xl font-bold">Nous soutenir</h5> <ul class="flex flex-col gap-4"> <li> <a href="">Faire un fon</a> </li> <li> <a href="">Devenir bénévole</a> </li> <li> <a href="">Parrainer un chien</a> </li> <li> <a href="">Entreprises & mécènes</a> </li> <li> <a href="">Boutique solidaire</a> </li> </ul> </div> <div class="flex flex-col gap-8"> <h5 class="text-xl font-bold">Nous contacter</h5> <ul class="flex flex-col gap-4"> <li> <a href="tel:0600000000" class="flex gap-4"> <img src="/svg/mail.svg" alt="">
06 00 00 00 00
</a> </li> <li> <a href="mailto:refugecaninsolidaire@gmail.com" class="flex gap-4"> <img src="/svg/mail.svg" alt="">
refugecaninsolidaire@gmail.com
</a> </li> <li> <a href="" class="flex gap-4"> <img src="/svg/mail.svg" alt="">
XX Mcallister St, Gironde, 33000
</a> </li> </ul> </div> </nav> </div> </footer>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Refuge Canin Solidaire" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/svg/favicon.svg"><meta name="generator"', "><title>", '</title><script type="module" src="/src/scripts/main.js"><\/script>', '</head> <body class="min-h-screen flex flex-col"> ', " <main> ", " </main> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/eole/dev/refuge-canin-solidaire/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
