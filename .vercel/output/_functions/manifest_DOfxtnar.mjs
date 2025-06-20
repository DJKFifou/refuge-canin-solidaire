import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BlKAVYNG.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B0p00ByE.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/eole/dev/refuge-canin-solidaire/","cacheDir":"file:///home/eole/dev/refuge-canin-solidaire/node_modules/.astro/","outDir":"file:///home/eole/dev/refuge-canin-solidaire/dist/","srcDir":"file:///home/eole/dev/refuge-canin-solidaire/src/","publicDir":"file:///home/eole/dev/refuge-canin-solidaire/public/","buildClientDir":"file:///home/eole/dev/refuge-canin-solidaire/dist/client/","buildServerDir":"file:///home/eole/dev/refuge-canin-solidaire/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slugs_.DEirOPXu.css"}],"routeData":{"route":"/blogs/[slugs]","isIndex":false,"type":"page","pattern":"^\\/blogs\\/([^/]+?)\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"slugs","dynamic":true,"spread":false}]],"params":["slugs"],"component":"src/pages/blogs/[slugs].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slugs_.DEirOPXu.css"}],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slugs_.DEirOPXu.css"},{"type":"inline","content":".accordion-header[data-astro-cid-wx4eh2ni][aria-expanded=true] .accordion-icon[data-astro-cid-wx4eh2ni]{transform:rotate(180deg)}.accordion-content[data-astro-cid-wx4eh2ni]{transform:translateY(-8px)}.accordion-content[data-astro-cid-wx4eh2ni].open{max-height:24rem!important;opacity:1!important;transform:translateY(0)}.accordion-content[data-astro-cid-wx4eh2ni].closing{transition-duration:.6s;max-height:0!important;opacity:0!important;transform:translateY(-8px)}.accordion-content[data-astro-cid-wx4eh2ni].opening{transition-duration:.7s;max-height:24rem!important;opacity:1!important;transform:translateY(0)}.accordion-content-inner[data-astro-cid-wx4eh2ni]{transition:transform .7s cubic-bezier(.4,0,.2,1)}.accordion-content[data-astro-cid-wx4eh2ni].opening .accordion-content-inner[data-astro-cid-wx4eh2ni]{transform:translateY(0)}.accordion-content[data-astro-cid-wx4eh2ni].closing .accordion-content-inner[data-astro-cid-wx4eh2ni]{transform:translateY(-12px)}\n"}],"routeData":{"route":"/dogs/[slugs]","isIndex":false,"type":"page","pattern":"^\\/dogs\\/([^/]+?)\\/?$","segments":[[{"content":"dogs","dynamic":false,"spread":false}],[{"content":"slugs","dynamic":true,"spread":false}]],"params":["slugs"],"component":"src/pages/dogs/[slugs].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slugs_.DEirOPXu.css"}],"routeData":{"route":"/dogs","isIndex":true,"type":"page","pattern":"^\\/dogs\\/?$","segments":[[{"content":"dogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dogs/index.astro","pathname":"/dogs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".accordion-header[data-astro-cid-wx4eh2ni][aria-expanded=true] .accordion-icon[data-astro-cid-wx4eh2ni]{transform:rotate(180deg)}.accordion-content[data-astro-cid-wx4eh2ni]{transform:translateY(-8px)}.accordion-content[data-astro-cid-wx4eh2ni].open{max-height:24rem!important;opacity:1!important;transform:translateY(0)}.accordion-content[data-astro-cid-wx4eh2ni].closing{transition-duration:.6s;max-height:0!important;opacity:0!important;transform:translateY(-8px)}.accordion-content[data-astro-cid-wx4eh2ni].opening{transition-duration:.7s;max-height:24rem!important;opacity:1!important;transform:translateY(0)}.accordion-content-inner[data-astro-cid-wx4eh2ni]{transition:transform .7s cubic-bezier(.4,0,.2,1)}.accordion-content[data-astro-cid-wx4eh2ni].opening .accordion-content-inner[data-astro-cid-wx4eh2ni]{transform:translateY(0)}.accordion-content[data-astro-cid-wx4eh2ni].closing .accordion-content-inner[data-astro-cid-wx4eh2ni]{transform:translateY(-12px)}\n"},{"type":"external","src":"/_astro/index.DHBATib1.css"},{"type":"external","src":"/_astro/_slugs_.DEirOPXu.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/eole/dev/refuge-canin-solidaire/src/pages/blogs/[slugs].astro",{"propagation":"none","containsHead":true}],["/home/eole/dev/refuge-canin-solidaire/src/pages/blogs/index.astro",{"propagation":"none","containsHead":true}],["/home/eole/dev/refuge-canin-solidaire/src/pages/dogs/[slugs].astro",{"propagation":"none","containsHead":true}],["/home/eole/dev/refuge-canin-solidaire/src/pages/dogs/index.astro",{"propagation":"none","containsHead":true}],["/home/eole/dev/refuge-canin-solidaire/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"pages/api/send.astro.mjs","\u0000@astro-page:src/pages/blogs/[slugs]@_@astro":"pages/blogs/_slugs_.astro.mjs","\u0000@astro-page:src/pages/dogs/index@_@astro":"pages/dogs.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/dogs/[slugs]@_@astro":"pages/dogs/_slugs_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/eole/dev/refuge-canin-solidaire/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dj4h12DH.mjs","\u0000@astrojs-manifest":"manifest_DOfxtnar.mjs","@astrojs/react/client.js":"_astro/client.Co0vMr8l.js","/home/eole/dev/refuge-canin-solidaire/src/components/HeadingDog.astro?astro&type=script&index=0&lang.ts":"_astro/HeadingDog.astro_astro_type_script_index_0_lang.D54gy3Bc.js","/home/eole/dev/refuge-canin-solidaire/src/components/StepFromBottom.astro?astro&type=script&index=0&lang.ts":"_astro/StepFromBottom.astro_astro_type_script_index_0_lang.BS0CtC6V.js","/home/eole/dev/refuge-canin-solidaire/src/components/Swiper.astro?astro&type=script&index=0&lang.ts":"_astro/Swiper.astro_astro_type_script_index_0_lang.DkIRj60Y.js","/home/eole/dev/refuge-canin-solidaire/src/components/TextBall.astro?astro&type=script&index=0&lang.ts":"_astro/TextBall.astro_astro_type_script_index_0_lang.fijYc1_M.js","/home/eole/dev/refuge-canin-solidaire/src/components/ui/Accordion.astro?astro&type=script&index=0&lang.ts":"_astro/Accordion.astro_astro_type_script_index_0_lang.DGYpCjbS.js","/home/eole/dev/refuge-canin-solidaire/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CV3nKris.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/eole/dev/refuge-canin-solidaire/src/components/ui/Accordion.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const i=document.querySelectorAll(\".accordion-header\");i.forEach(n=>{n.addEventListener(\"click\",function(){const a=this.getAttribute(\"data-target\"),t=document.getElementById(a),o=this.getAttribute(\"aria-expanded\")===\"true\";i.forEach(e=>{if(e!==this){const c=e.getAttribute(\"data-target\"),s=document.getElementById(c);e.getAttribute(\"aria-expanded\")===\"true\"&&(e.setAttribute(\"aria-expanded\",\"false\"),s.classList.remove(\"open\",\"opening\"),s.classList.add(\"closing\"),setTimeout(()=>{s.classList.remove(\"closing\")},600))}}),o?(this.setAttribute(\"aria-expanded\",\"false\"),t.classList.remove(\"open\",\"opening\"),t.classList.add(\"closing\"),setTimeout(()=>{t.classList.remove(\"closing\")},600)):(this.setAttribute(\"aria-expanded\",\"true\"),setTimeout(()=>{t.classList.remove(\"closing\"),t.classList.add(\"opening\",\"open\"),setTimeout(()=>{t.classList.remove(\"opening\")},700)},50))})})});"],["/home/eole/dev/refuge-canin-solidaire/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"burger\"),d=document.getElementById(\"menu\"),s=document.getElementById(\"close\");e?.addEventListener(\"click\",()=>{console.log(\"Burger clicked\"),d?.classList.add(\"translate-x-0!\"),e?.classList.add(\"hidden\"),s?.classList.remove(\"hidden\")});s?.addEventListener(\"click\",()=>{console.log(\"Close clicked\"),d?.classList.remove(\"translate-x-0!\"),s?.classList.add(\"hidden\"),e?.classList.remove(\"hidden\")});"]],"assets":["/_astro/_slugs_.DEirOPXu.css","/_astro/index.DHBATib1.css","/_astro/HeadingDog.astro_astro_type_script_index_0_lang.D54gy3Bc.js","/_astro/ScrollTrigger.CUwdeFQJ.js","/_astro/StepFromBottom.astro_astro_type_script_index_0_lang.BS0CtC6V.js","/_astro/Swiper.astro_astro_type_script_index_0_lang.DkIRj60Y.js","/_astro/TextBall.astro_astro_type_script_index_0_lang.fijYc1_M.js","/_astro/client.Co0vMr8l.js","/fonts/Barlow-Bold.ttf","/fonts/Barlow-Light.ttf","/fonts/Barlow-Medium.ttf","/fonts/Barlow-Regular.ttf","/fonts/Barlow-SemiBold.ttf","/fonts/HomemadeApple-Regular.ttf","/fonts/SpaceGrotesk-VariableFont_wght.ttf","/img/logo-dog.png","/svg/Logo-Refuge-Canin-Solidaire.svg","/svg/arrow-down.svg","/svg/arrow-right.svg","/svg/ball.svg","/svg/balle.svg:Zone.Identifier","/svg/close.svg","/svg/facebook.svg","/svg/favicon.svg","/svg/instagram.svg","/svg/linkedin.svg","/svg/logo-footer.svg","/svg/mail.svg","/svg/menu-burger.svg","/svg/shopping-cart.svg","/svg/shopping-cart.svg:Zone.Identifier","/img/dogs/dog-1.webp","/img/dogs/dog-2.webp","/img/dogs/dog-3.png","/img/dogs/dog-4.webp","/img/dogs/dog-5.png","/img/dogs/dog-6.webp","/img/dogs/dog.webp","/img/instagram/Capture d’écran 2025-06-18 à 21.54.42 1.png:Zone.Identifier","/img/instagram/Capture d’écran 2025-06-18 à 21.54.42 2.png:Zone.Identifier","/img/instagram/Capture d’écran 2025-06-18 à 21.54.42 3.png:Zone.Identifier","/img/instagram/Capture d’écran 2025-06-18 à 21.54.42 4.png:Zone.Identifier","/img/instagram/instagram-1.png","/img/instagram/instagram-2.png","/img/instagram/instagram-3.png","/img/instagram/instagram-4.png","/img/partners/partner-1.png","/img/partners/partner-2.png","/img/partners/partner-3.png","/img/partners/partner-4.png","/img/partners/partner-5.png","/img/partners/partner-6.png","/img/partners/partner-7.png","/img/partners/partner-8.png","/img/partners/partner-9.png","/img/shop/Image (2).png:Zone.Identifier","/img/shop/Image (3).png:Zone.Identifier","/img/shop/Image (4).png:Zone.Identifier","/img/shop/bandana.png","/img/shop/carnet.png","/img/shop/tasse.png","/svg/bg/Vector 35.svg:Zone.Identifier","/svg/bg/wave-beige-top.svg","/svg/bg/wave-blue-top.svg","/svg/dogs/Group 123.svg:Zone.Identifier","/svg/dogs/Group 126.svg:Zone.Identifier","/svg/dogs/big-dog.svg","/svg/dogs/dog-1.svg","/svg/dogs/dog-2.svg","/svg/dogs/dog-3.svg","/svg/dogs/dog-4.svg","/svg/dogs/logo-dog.svg","/svg/page-dog/Icon.svg:Zone.Identifier","/svg/page-dog/edit-2.svg","/svg/page-dog/heart.svg","/svg/page-dog/other.svg","/svg/page-dog/pocket.svg","/svg/page-dog/smile.svg","/svg/value/Group 143.svg:Zone.Identifier","/svg/value/Group 144.svg:Zone.Identifier","/svg/value/Vector (3).svg:Zone.Identifier","/svg/value/bienveillance.svg","/svg/value/icon.svg:Zone.Identifier","/svg/value/respect.svg","/svg/value/solidarite.svg","/svg/value/transparence.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Bxa8b9GXLbnt8BonLFdLNRyAOB67TYfx1Bdtb6QrwCM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
