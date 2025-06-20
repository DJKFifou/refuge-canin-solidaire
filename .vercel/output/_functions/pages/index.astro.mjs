import { $ as $$Layout } from '../chunks/Layout_BzpR-Vtn.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, e as renderScript, a as createAstro, d as addAttribute } from '../chunks/astro/server_BlKAVYNG.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$Accordion } from '../chunks/Button_2Blm8CzA.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$StepFromBottom } from '../chunks/StepFromBottom_DkfmkVHj.mjs';
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
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-beige pb-24"> <img src="/svg/bg/wave-blue-top.svg" class="w-full absolute top-0"> <section class=" container mx-auto px-4 pt-72 flex justify-between gap-16"> <div class="space-y-5 z-10"> <h2 class="h2">Vous vous posez des questions ?</h2> <p>C’est normal, et c’est même bon signe. Voici les réponses aux interrogations les plus fréquentes.</p> ${renderComponent($$result, "Button", $$Button, { "src": "/ee", "text": "En savoir plus" })} </div> ${renderComponent($$result, "Accordion", $$Accordion, { "items": accordionData })} </section> </div>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/faq.astro", void 0);

const $$GravityNumber = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full min-h-screen overflow-hidden bg-red-600" data-astro-cid-rlckeq5i> <div class="gravity-section flex flex-col items-center justify-end w-full min-h-screen border border-white" style="aspect-ratio: 1.5;" data-astro-cid-rlckeq5i> <div class="flex w-full justify-center" style="margin-top: -2.6%;" data-astro-cid-rlckeq5i> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>1</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>2</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>3</span> </div> </div> <div class="flex w-full justify-center" style="margin-top: -2.6%;" data-astro-cid-rlckeq5i> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>4</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>5</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>6</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>7</span> </div> </div> <div class="flex w-full justify-center" style="margin-top: -2.6%;" data-astro-cid-rlckeq5i> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>8</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>9</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>10</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>11</span> </div> <div class="gravity-item flex items-center justify-center rounded-full transition-shadow" style="width: 20%; aspect-ratio: 1; background-color: #fff; border: 1px solid #9ca3af;" data-astro-cid-rlckeq5i> <span class="font-bold text-xl text-gray-700" data-astro-cid-rlckeq5i>12</span> </div> </div> </div> </div>  ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/GravityNumber.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/GravityNumber.astro", void 0);

const $$Astro$6 = createAstro();
const $$HeadingDog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeadingDog;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-screen flex justify-center items-center overflow-x no-scroll bg-blue" id="box"> <img src="/svg/bg/wave-blue-top.svg" class="absolute w-full -bottom-9"> <div class="absolute inset-0 z-0 pointer-events-none"> ${img.map((image, idx) => renderTemplate`<img${addAttribute(image.src, "src")}${addAttribute(`Dog image ${idx + 1}`, "alt")} class="dog-image absolute w-40 transition-all duration-300"${addAttribute(`top: ${image.top}; left: ${image.left}; transform: rotate(${image.rotate}) scale(${image.scale}); clip-path: inset(100% 0 0 0);`, "style")}${addAttribute(idx, "data-index")}>`)} </div> <div class="relative z-10 text-center space-y-9 max-w-5xl mx-auto"> <h1 class="h1">
Ils n'attendent qu'une seconde chance. Et si c'était <span class="font-variant">vous ?</span> </h1> <p class="max-w-2xl mx-auto">
Un refuge, des rencontres, des histoires. Adopter un chien, c'est lui donner une seconde chance, et vivre la vôtre différemment.
</p> ${renderComponent($$result, "Button", $$Button, { "src": "/dogs", "text": "Contactez-nous" })} </div> </div> ${renderScript($$result, "/home/eole/dev/refuge-canin-solidaire/src/components/HeadingDog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/HeadingDog.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const partnerCount = 4;
  const partners = Array.from({ length: partnerCount }, (_, i) => i + 1);
  return renderTemplate`${maybeRenderHead()}<section class="container m-auto py-64 flex flex-col gap-9 justify-center items-center"> <div class="flex justify-between items-center w-full"> <div class="flex items-center"> <img src="img/logo-dog.png"> <a href="https://www.instagram.com/refuge_canin_solidaire/" target="_blank" class="font-bold">@refuge_canin_solidaire</a> </div> ${renderComponent($$result, "Button", $$Button, { "src": "/", "text": "Nous suivre" })} </div> <div class="grid grid-cols-4 gap-4"> ${partners.map((num) => {
    return renderTemplate`<img${addAttribute(`/img/instagram/instagram-${num}.png`, "src")}${addAttribute(`Instagram Post ${num}`, "alt")} class="w-full">`;
  })} </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Instagram.astro", void 0);

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const partnerCount = 7;
  const partners = Array.from({ length: partnerCount }, (_, i) => i + 1);
  return renderTemplate`${maybeRenderHead()}<section class="container m-auto py-64 flex flex-col gap-9 justify-center items-center" id="caca"> <h2 class="h2">Merci à celles et ceux qui rendent notre mission possible.</h2> <div class="flex flex-wrap justify-center items-center gap-12"> ${partners.map((num) => renderTemplate`<img${addAttribute(`/img/partners/partner-${num}.png`, "src")}${addAttribute(`Logo partenaire ${num}`, "alt")} class="max-h-36 object-contain">`)} </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Partners.astro", void 0);

const $$Astro$5 = createAstro();
const $$CardShop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardShop;
  const { srcImg, href, title, description, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="w-full bg-white rounded-2xl p-6 block shadow-md hover:shadow-lg transition"> <div class="relative w-full"> <img${addAttribute(srcImg, "src")} class="w-full h-80 object-cover rounded-2xl"${addAttribute(title, "alt")}> <span class="absolute top-1.5 left-1.5 p-2 bg-white rounded-2xl text-xs font-semibold">Achat via Hello Asso</span> </div> <div class="space-y-3.5 my-3.5 text-left"> <h3 class="h3">${title}</h3> <p>${description}</p> <div class="flex justify-between items-center"> <p class="text-blue_black font-bold text-2xl font-grotesk">${price}</p> <div> <img src="/svg/shopping-cart.svg" class="p-2 bg-blue rounded-sm" alt="Panier"> </div> </div> </div> </a>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/ui/CardShop.astro", void 0);

const $$Astro$4 = createAstro();
const $$Shop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Shop;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full flex flex-col gap-9 justify-center items-center bg-blue" id="shop-section"> <div class="container-grid space-y-6"> <div class="max-w-3xl text-center mx-auto space-y-3 mb-12"> <h2 class="h2">Un petit achat pour vous, un grand soutien pour eux.</h2> <p>Nos produits solidaires financent croquettes, soins et confort pour les chiens du refuge.</p> </div> <div class="grid grid-cols-3 gap-11 w-full text-center"> ${products.map((product) => renderTemplate`${renderComponent($$result, "CardShop", $$CardShop, { "srcImg": product.srcImg, "href": product.href, "title": product.title, "price": product.price, "description": product.description })}`)} </div> <div class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "src": "/dogs", "text": "Voir la boutique" })} </div> </div> </section>`;
}, "/home/eole/dev/refuge-canin-solidaire/src/components/Shop.astro", void 0);

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
      title: "Renseignements & prise de contact",
      imgSrc: "/img/steps/step-1.png",
      description: "Vous remplissez un formulaire simple pour nous parler de vous, de votre cadre de vie et de vos attentes.",
      objective: "Objectif : mieux vous conna\xEEtre pour guider l\u2019adoption, et assurer un bon d\xE9part."
    },
    {
      title: "Entretien t\xE9l\xE9phonique",
      imgSrc: "/img/steps/step-2.png",
      description: "Un membre de l\u2019\xE9quipe vous appelle pour discuter de votre projet d\u2019adoption, et commencer \xE0 identifier des profils compatibles.",
      objective: "Un moment d\u2019\xE9coute pour faire connaissance, sans pression."
    },
    {
      title: "Rencontre au refuge",
      imgSrc: "/img/steps/step-3.png",
      description: "Vous venez au refuge rencontrer le(s) chien(s) qui pourraient vous correspondre. C\u2019est un vrai temps d\u2019observation, d\u2019\xE9change.",
      objective: "Parce qu\u2019un lien, \xE7a ne se d\xE9cide pas derri\xE8re un \xE9cran."
    },
    {
      title: "Ateliers & accompagnement",
      imgSrc: "/img/steps/step-4.png",
      description: "Avant l\u2019adoption, vous participez \xE0 une session d\u2019information (ou un atelier) pour vous pr\xE9parer au quotidien avec votre futur chien : besoins, langage canin, int\xE9gration \xE0 la maison\u2026",
      objective: "Un animal n\u2019est pas livr\xE9 avec un mode d\u2019emploi, mais nous, on vous accompagne."
    },
    {
      title: "Finalisation de l\u2019adoption",
      imgSrc: "/img/steps/step-5.png",
      description: "Une fois les \xE9tapes franchies sereinement, l\u2019adoption peut \xEAtre officialis\xE9e.\u2028 Nous restons disponibles apr\xE8s, pour le suivi et le soutien post-adoption.",
      objective: "C\u2019est la fin du processus, mais le d\xE9but d\u2019une belle histoire."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeadingDog", $$HeadingDog, { "img": imgDog })} ${renderComponent($$result2, "TextBall", $$TextBall, { "title": "Un lieu d'accueil et de pr\xE9vention, pour soigner les chiens, accompagner les humains, et construire des adoptions durables." })} ${renderComponent($$result2, "GravityNumber", $$GravityNumber, {})} ${renderComponent($$result2, "Value", $$Value, { "values": values })} ${renderComponent($$result2, "Swiper", $$Swiper, {})} ${renderComponent($$result2, "StepFromBottom", $$StepFromBottom, { "steps": steps })} ${renderComponent($$result2, "Shop", $$Shop, { "products": shopProducts })} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "BlogSlider", $$BlogSlider, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ${renderComponent($$result2, "Instagram", $$Instagram, {})} ` })}`;
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
