import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BMXKjsEO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_C6qL6Amu.mjs');
const _page1 = () => import('./chunks/404_BzELtZyt.mjs');
const _page2 = () => import('./chunks/ads_D6ZQjHeW.mjs');
const _page3 = () => import('./chunks/ads_launcher_DH1igDdi.mjs');
const _page4 = () => import('./chunks/callback_Ct5aXGbC.mjs');
const _page5 = () => import('./chunks/register_BqNVK0bB.mjs');
const _page6 = () => import('./chunks/signin_H4uMv64V.mjs');
const _page7 = () => import('./chunks/signout_D1EHihRN.mjs');
const _page8 = () => import('./chunks/dashboard_B4zvEozw.mjs');
const _page9 = () => import('./chunks/register_Co6wpbDw.mjs');
const _page10 = () => import('./chunks/signin_CPUg0e1z.mjs');
const _page11 = () => import('./chunks/tour-1_xI0BdBdr.mjs');
const _page12 = () => import('./chunks/index_EA38AXU6.mjs');
const _page13 = () => import('./chunks/customize-tours_DHD2kGbW.mjs');
const _page14 = () => import('./chunks/data_managment_M9bMp3mv.mjs');
const _page15 = () => import('./chunks/design_CdmPaCc7.mjs');
const _page16 = () => import('./chunks/gallery_7a53SKz3.mjs');
const _page17 = () => import('./chunks/gallery-details_CemOLSD2.mjs');
const _page18 = () => import('./chunks/index_Egww3gxL.mjs');
const _page19 = () => import('./chunks/market_design_DO6MO2SI.mjs');
const _page20 = () => import('./chunks/index_oaFHplVB.mjs');
const _page21 = () => import('./chunks/privacy_policy_YU8IXEgs.mjs');
const _page22 = () => import('./chunks/_slug__CPaManWa.mjs');
const _page23 = () => import('./chunks/services_DpZ33qJn.mjs');
const _page24 = () => import('./chunks/testimonials_CaHUh0G3.mjs');
const _page25 = () => import('./chunks/tour-list_GbwtS2X4.mjs');
const _page26 = () => import('./chunks/_slug__CiZF8hse.mjs');
const _page27 = () => import('./chunks/web_DpwjCNBp.mjs');
const _page28 = () => import('./chunks/index_3HqSCSla.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/ads.astro", _page2],
    ["src/pages/ads_launcher.astro", _page3],
    ["src/pages/api/auth/callback.ts", _page4],
    ["src/pages/api/auth/register.ts", _page5],
    ["src/pages/api/auth/signin.ts", _page6],
    ["src/pages/api/auth/signout.ts", _page7],
    ["src/pages/api/dashboard.astro", _page8],
    ["src/pages/api/register.astro", _page9],
    ["src/pages/api/signin.astro", _page10],
    ["src/pages/blog/tours/tour-1.md", _page11],
    ["src/pages/CEO/index.astro", _page12],
    ["src/pages/customize-tours.astro", _page13],
    ["src/pages/data_managment.astro", _page14],
    ["src/pages/design.astro", _page15],
    ["src/pages/gallery.astro", _page16],
    ["src/pages/gallery-details.astro", _page17],
    ["src/pages/hombre/index.astro", _page18],
    ["src/pages/market_design.astro", _page19],
    ["src/pages/mujer/index.astro", _page20],
    ["src/pages/privacy_policy.astro", _page21],
    ["src/pages/producto/[slug].astro", _page22],
    ["src/pages/services.astro", _page23],
    ["src/pages/testimonials.astro", _page24],
    ["src/pages/tour-list.astro", _page25],
    ["src/pages/tours/[slug].astro", _page26],
    ["src/pages/web.astro", _page27],
    ["src/pages/index.astro", _page28]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
