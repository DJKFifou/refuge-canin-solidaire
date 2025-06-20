import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B-rC1vKN.mjs';
import { manifest } from './manifest_D40wbNvn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send.astro.mjs');
const _page2 = () => import('./pages/blogs/_slugs_.astro.mjs');
const _page3 = () => import('./pages/blogs.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/dogs/_slugs_.astro.mjs');
const _page6 = () => import('./pages/dogs.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send.ts", _page1],
    ["src/pages/blogs/[slugs].astro", _page2],
    ["src/pages/blogs/index.astro", _page3],
    ["src/pages/contact/index.astro", _page4],
    ["src/pages/dogs/[slugs].astro", _page5],
    ["src/pages/dogs/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ce1953b4-5438-43a7-a2a7-0a19d63d9b96",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
