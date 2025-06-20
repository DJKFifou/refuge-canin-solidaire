import { $ as $$Layout } from '../chunks/Layout_CQ-7gkKE.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, a as createAstro, e as renderScript, d as addAttribute } from '../chunks/astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$Accordion } from '../chunks/Button_BzvnPeUQ.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$BlogSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative p-28 bg-beige z-10"> <img src="/svg/dogs/big-dog.svg" class="absolute right-0 top-0 overflow-x-hidden -z-10"> <section class=" container mx-auto px-4 pt-72 flex justify-between gap-16"> <div class="space-y-5 z-10"> <h2 class="h2">Vous vous posez des questions ?</h2> <p>C’est normal, et c’est même bon signe. Voici les réponses aux interrogations les plus fréquentes.</p> ${renderComponent($$result, "Button", $$Button, { "src": "/ee", "text": "En savoir plus" })} </div> </section> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/BlogSlider.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const accordionData = [
    {
      title: "Puis-je adopter si je vis en appartement ?",
      content: "Oui, l\u2019important n\u2019est pas la surface mais le temps et l\u2019attention que vous consacrez au chien. Certains chiens sont tr\xE8s heureux en appartement s\u2019ils sont bien sortis, stimul\xE9s et entour\xE9s."
    },
    {
      title: "Comment savoir si un chien est compatible avec mon mode de vie ?",
      content: "C\u2019est justement notre r\xF4le ! Gr\xE2ce \xE0 un petit formulaire et un entretien, nous \xE9valuons ensemble votre quotidien pour vous orienter vers un chien compatible."
    },
    {
      title: "Les chiens sont-ils \xE9duqu\xE9s avant l\u2019adoption ?",
      content: "Nous travaillons avec chaque chien selon ses besoins : socialisation, marche en laisse, gestion des \xE9motions\u2026 Vous \xEAtes accompagn\xE9 pour poursuivre cela \xE0 la maison."
    },
    {
      title: "Comment puis-je aider si je ne peux pas adopter ?",
      content: "De nombreuses fa\xE7ons : en devenant b\xE9n\xE9vole, en faisant un don, en parrainant un chien, en relayant nos publications\u2026 Chaque geste compte."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-beige pb-24"> <img src="/svg/bg/wave-beige-top.svg" class="w-full absolute top-0"> <section class=" container mx-auto px-4 pt-72 flex justify-between gap-16"> <div class="space-y-5 z-10"> <h2 class="h2">Vous vous posez des questions ?</h2> <p>C’est normal, et c’est même bon signe. Voici les réponses aux interrogations les plus fréquentes.</p> ${renderComponent($$result, "Button", $$Button, { "src": "/ee", "text": "En savoir plus" })} </div> ${renderComponent($$result, "Accordion", $$Accordion, { "items": accordionData })} </section> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/faq.astro", void 0);

const $$Astro$8 = createAstro();
const $$HeadingDog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeadingDog;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-screen flex justify-center items-center overflow-x no-scroll bg-blue" id="box"> <img src="/svg/bg/wave-blue-top.svg" class="absolute w-full -bottom-9"> <div class="absolute inset-0 z-0 pointer-events-none"> ${img.map((image, idx) => renderTemplate`<img${addAttribute(image.src, "src")}${addAttribute(`Dog image ${idx + 1}`, "alt")} class="dog-image absolute w-40 transition-all duration-300"${addAttribute(`top: ${image.top}; left: ${image.left}; transform: rotate(${image.rotate}) scale(${image.scale}); clip-path: inset(100% 0 0 0);`, "style")}${addAttribute(idx, "data-index")}>`)} </div> <!-- Contenu centré --> <div class="relative z-10 text-center space-y-9 max-w-5xl mx-auto"> <h1 class="h1">
Ils n'attendent qu'une seconde chance. Et si c'était <span class="font-variant">vous ?</span> </h1> <p class="max-w-2xl mx-auto">
Un refuge, des rencontres, des histoires. Adopter un chien, c'est lui donner une seconde chance, et vivre la vôtre différemment.
</p> ${renderComponent($$result, "Button", $$Button, { "src": "/dogs", "text": "Contactez-nous" })} </div> </div> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/HeadingDog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/HeadingDog.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const partnerCount = 4;
  const partners = Array.from({ length: partnerCount }, (_, i) => i + 1);
  return renderTemplate`${maybeRenderHead()}<section class="container m-auto py-64 flex flex-col gap-9 justify-center items-center"> <div class="flex justify-between items-center w-full"> <div class="flex items-center"> <img src="img/logo-dog.png"> <a href="https://www.instagram.com/refuge_canin_solidaire/" target="_blank">@refuge_canin_solidaire</a> </div> ${renderComponent($$result, "Button", $$Button, { "src": "/", "text": "Nous suivre" })} </div> <div class="grid grid-cols-4 gap-12"> ${partners.map((num) => {
    return renderTemplate`<img${addAttribute(`/img/instagram/instagram-${num}.png`, "src")}${addAttribute(`Instagram Post ${num}`, "alt")} class="w-full">`;
  })} </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Instagram.astro", void 0);

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const partnerCount = 7;
  const partners = Array.from({ length: partnerCount }, (_, i) => i + 1);
  return renderTemplate`${maybeRenderHead()}<section class="container m-auto py-64 flex flex-col gap-9 justify-center items-center" id="caca"> <h2 class="h2">Merci à celles et ceux qui rendent notre mission possible.</h2> <div class="flex flex-wrap justify-center items-center gap-12"> ${partners.map((num) => renderTemplate`<img${addAttribute(`/img/partners/partner-${num}.png`, "src")}${addAttribute(`Logo partenaire ${num}`, "alt")} class="max-h-36 object-contain">`)} </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Partners.astro", void 0);

const $$Astro$7 = createAstro();
const $$CardShop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardShop;
  const { srcImg, href, title, description, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="w-full bg-white rounded-2xl p-6 block shadow-md hover:shadow-lg transition"> <div class="relative w-full"> <img${addAttribute(srcImg, "src")} class="w-full h-80 object-cover rounded-2xl"${addAttribute(title, "alt")}> <span class="absolute top-1.5 left-1.5 p-2 bg-white rounded-2xl text-xs font-semibold">Achat via Hello Asso</span> </div> <div class="space-y-3.5 my-3.5 text-left"> <h3 class="h3">${title}</h3> <p>${description}</p> <div class="flex justify-between items-center"> <p class="text-blue_black font-bold text-2xl font-grotesk">${price}</p> <div> <img src="/svg/shopping-cart.svg" class="p-2 bg-blue rounded-sm" alt="Panier"> </div> </div> </div> </a>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/CardShop.astro", void 0);

const $$Astro$6 = createAstro();
const $$Shop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Shop;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen w-full flex flex-col gap-9 justify-center items-center bg-blue" id="shop-section"> <div class="container-grid space-y-6"> <div class="max-w-3xl text-center mx-auto space-y-3 mb-12"> <h2 class="h2">Un petit achat pour vous, un grand soutien pour eux.</h2> <p>Nos produits solidaires financent croquettes, soins et confort pour les chiens du refuge.</p> </div> <div class="grid grid-cols-3 gap-11 w-full text-center"> ${products.map((product) => renderTemplate`${renderComponent($$result, "CardShop", $$CardShop, { "srcImg": product.srcImg, "href": product.href, "title": product.title, "price": product.price, "description": product.description })}`)} </div> <div class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "src": "/dogs", "text": "Voir la boutique" })} </div> </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Shop.astro", void 0);

const $$Astro$5 = createAstro();
const $$CardStep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardStep;
  const { title, description, objective, i = 0 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card-step w-full h-[35rem] bg-beige transform translate-y-[300%] space-y-5 p-5 rounded-2xl border border-gray-400"> <div class="flex justify-between items-center"> <div class="bg-green rounded-full p-2 text-blue_black w-10">${i + 1}</div> <p class="bg-white border rounded-2xl border-gray-200 p-3">jour 1</p> </div> <h3 class="h3">${title}</h3> <p>${description}</p> <img src="img/dogs/dog.webp" class="w-full h-36 object-cover"> <p class="bg-green p-3.5 text-blue_black">${objective}</p> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/CardStep.astro", void 0);

const $$Astro$4 = createAstro();
const $$StepFromBottom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StepFromBottom;
  const { steps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen w-full flex justify-center items-center bg-blue" id="caca"> <img src="/svg/bg/wave-beige-top.svg" class="w-full absolute -top-16 rotate-180"> <h2 class="h2 text-center z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
Avant chaque adoption, il y a un chemin parcouru.
</h2> <div class="z-10 text-center w-full px-4 mx-auto"> <div class="flex justify-center " id="cards-container"> ${steps.map((step, i) => renderTemplate`<div class="relative"${addAttribute(`transform: translateX(${ -15 * i}px) rotate(${i % 2 === 0 ? -2 : 1.2}deg); z-index: ${100 - i};`, "style")}> ${renderComponent($$result, "CardStep", $$CardStep, { "title": step.title, "description": step.description, "objective": step.objective, "i": i })} </div>`)} </div> </div> </section> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/StepFromBottom.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/StepFromBottom.astro", void 0);

const $$Astro$3 = createAstro();
const $$CardAdoptedDog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardAdoptedDog;
  const { name, master } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full border border-b-gray-400 bg-green rounded-xl p-3.5 flex flex-col gap-3.5"> <div class="relative w-full"> <img src="/img/dogs/dog.webp" class="w-full h-80 object-cover rounded-2xl"> </div> <h3>Moi c'est <span class="font-variant text-2xl"> ${name}</span></h3> <p>Et <span class="bg-[#FFC9AD] p-1.5 rounded-xl">${master}</span> c’est ma nouvelle famille</p> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/CardAdoptedDog.astro", void 0);

const $$Swiper = createComponent(($$result, $$props, $$slots) => {
  const adoptedDogs = [
    { name: "Max", master: "Jean" },
    { name: "Bella", master: "Marie" },
    { name: "Charlie", master: "Pierre" },
    { name: "David", master: "S\xE9b" },
    { name: "Malika", master: "Stef" },
    { name: "LuluBerlu", master: "Luc" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="container-grid py-44"> <h2 class="h2">Les derniers adoptés</h2> <div class="flex justify-between items-start mb-8"> <p class="max-w-2xl">Ils ont trouvé leur famille pour la vie.</p> <div class="flex gap-2"> <button class="cursor-pointer transition-all swiper-button-prev w-12 h-12 border border-transparent hover:border-blue text-white bg-blue hover:bg-white rounded-xl flex items-center justify-center group"> <svg width="20" height="20" viewBox="0 0 24 24" class=" transition-colors duration-200 fill-white group-hover:fill-blue"> <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"></path> </svg> </button> <button class="cursor-pointer transition-all swiper-button-next rotate-180 w-12 h-12 border border-transparent hover:border-blue text-white bg-blue hover:bg-white rounded-xl flex items-center justify-center group"> <svg width="20" height="20" viewBox="0 0 24 24" class=" transition-colors duration-200 fill-white group-hover:fill-blue"> <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"></path> </svg> </button> </div> </div> <div class="swiper"> <div class="swiper-wrapper"> ${adoptedDogs.map((dog) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result, "CardAdoptedDog", $$CardAdoptedDog, { "name": dog.name, "master": dog.master })} </div>`)} </div> </div> </div> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/Swiper.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Swiper.astro", void 0);

const $$Astro$2 = createAstro();
const $$TextBall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextBall;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="boxBall" class="relative flex justify-center items-center h-screen overflow-hidden"> <h2 class="text-center z-10 max-w-4xl h2">${title}</h2> <div> <img id="dog1" src="/svg/dogs/dog-1.svg" alt="illustration dog" class="absolute bottom-16 -left-12"> <img id="dog2" src="/svg/dogs/dog-2.svg" alt="illustration dog" width="450" height="350" class="absolute bottom-0 -right-12"> <img id="ball" src="svg/ball.svg" class="size-12 absolute bottom-16"> </div> </section> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/TextBall.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/TextBall.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardValue = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardValue;
  const { title, description, iconSrc, iconBg = "bg-blue" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center gap-6 text-center max-w-60"> <img${addAttribute(iconSrc, "src")} src="/svg/dogs/logo-dog.svg" width="75" height="55"${addAttribute(`p-3 size-20 rounded-full ${iconBg}`, "class")}${addAttribute(title, "alt")} loading="lazy"> <h3 class="h3">${title}</h3> <p>${description}</p> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/CardValue.astro", void 0);

const $$Astro = createAstro();
const $$Value = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Value;
  const { values } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container-grid flex flex-col py-28 justify-center items-center"> <h2 class="text-center h2">Ce qui nous tient à cœur</h2> <div class="flex flex-wrap justify-center gap-14 mt-12"> ${values.map((item) => renderTemplate`${renderComponent($$result, "CardValue", $$CardValue, { "title": item.title, "description": item.description, "iconBg": item.iconBg, "iconSrc": item.iconSrc })}`)} </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Value.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const imgDog = [
    {
      src: "/img/dogs/dog.webp",
      top: "10%",
      left: "10%",
      rotate: "0deg",
      scale: 1
    },
    {
      src: "/img/dogs/dog-1.webp",
      top: "90%",
      left: "10%",
      rotate: "0deg",
      scale: 0.9
    },
    {
      src: "/img/dogs/dog-2.webp",
      top: "10%",
      left: "60%",
      rotate: "0deg",
      scale: 0.7
    },
    {
      src: "/img/dogs/dog-3.png",
      top: "55%",
      left: "0%",
      rotate: "0deg",
      scale: 0.6
    },
    {
      src: "/img/dogs/dog-4.webp",
      top: "10%",
      left: "90%",
      rotate: "0deg",
      scale: 1.3
    },
    {
      src: "/img/dogs/dog-5.png",
      top: "70%",
      left: "70%",
      rotate: "0deg",
      scale: 1.3
    },
    {
      src: "/img/dogs/dog-6.webp",
      top: "100%",
      left: "50%",
      rotate: "0deg",
      scale: 1.3
    }
  ];
  const values = [
    {
      iconBg: "bg-blue",
      iconSrc: "/svg/value/solidarite.svg",
      title: "Solidarit\xE9",
      description: "Reconna\xEEtre chaque chien comme un \xEAtre \xE0 part enti\xE8re, avec son histoire et son rythme."
    },
    {
      iconBg: "bg-green",
      iconSrc: "/svg/value/bienveillance.svg",
      title: "Bienveillance",
      description: "Assurer leur bien-\xEAtre physique et \xE9motionnel dans un cadre respectueux."
    },
    {
      iconBg: "bg-orange",
      iconSrc: "/svg/value/transparence.svg",
      title: "Engagement",
      description: "Trouver une famille adapt\xE9e \xE0 chaque profil et suivre l\u2019int\xE9gration sur le long terme."
    },
    {
      iconSrc: "/svg/value/respect.svg",
      iconBg: "bg-beige",
      title: "Responsabilit\xE9",
      description: "Accompagner les adoptants pour une adoption durable et consciente."
    }
  ];
  const shopProducts = [
    {
      srcImg: "/img/shop/carnet.png",
      href: "https://www.helloasso.com/associations/refuge-canin-solidaire/boutiques/notre-boutique",
      title: "Pochette carnet de sant\xE9",
      price: "7,90 \u20AC",
      description: "Une pochette pratique et \xE9l\xE9gant, parfait pour vos id\xE9es et souvenirs du quotidien."
    },
    {
      srcImg: "/img/shop/tasse.png",
      href: "https://www.helloasso.com/associations/refuge-canin-solidaire/boutiques/notre-boutique",
      title: "Mug",
      price: "7,50 \u20AC",
      description: "Pour les caf\xE9s du matin ou les c\xE2lins du soir."
    },
    {
      srcImg: "/img/shop/bandana.png",
      href: "https://www.helloasso.com/associations/refuge-canin-solidaire/boutiques/notre-boutique",
      title: "Bandana",
      price: "8,50 \u20AC",
      description: "Un accessoire confortable et styl\xE9 pour votre compagnon \xE0 quatre pattes."
    }
  ];
  const steps = [
    {
      title: "Rencontre au refuge",
      description: "Premier contact entre le chien et sa future famille.",
      objective: "Observer les affinit\xE9s et \xE9tablir un premier lien."
    },
    {
      title: "Premi\xE8re promenade",
      description: "Moment de d\xE9tente en dehors du refuge.",
      objective: "V\xE9rifier la compatibilit\xE9 et le comportement \xE0 l\u2019ext\xE9rieur."
    },
    {
      title: "Week-end test",
      description: "Le chien passe 2 jours dans sa future maison.",
      objective: "S\u2019assurer que tout le monde est \xE0 l\u2019aise et confiant."
    },
    {
      title: "Week-end test",
      description: "Le chien passe 2 jours dans sa future maison.",
      objective: "S\u2019assurer que tout le monde est \xE0 l\u2019aise et confiant."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeadingDog", $$HeadingDog, { "img": imgDog })} ${renderComponent($$result2, "TextBall", $$TextBall, { "title": "Un lieu d'accueil et de pr\xE9vention, pour soigner les chiens, accompagner les humains, et construire des adoptions durables." })} ${renderComponent($$result2, "Value", $$Value, { "values": values })} ${renderComponent($$result2, "Swiper", $$Swiper, {})} ${renderComponent($$result2, "StepFromBottom", $$StepFromBottom, { "steps": steps })} ${renderComponent($$result2, "Shop", $$Shop, { "products": shopProducts })} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "BlogSlider", $$BlogSlider, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ${renderComponent($$result2, "Instagram", $$Instagram, {})} ` })}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/pages/index.astro", void 0);

const $$file = "/home/eole/dev/refuge-canin-solidaire/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
