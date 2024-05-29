/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_n4vsnFKN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_C8lZD2Mi.mjs';
import { $ as $$GalleryComp } from './gallery-details_jJKwrIgS.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery", "subtitle": "Birdwatching Tours and Experiences, Nature Explorations, Immerse in Birdwatching Tours, Nature Escapes, and Unique Experiences Showcase" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GalleryComp", $$GalleryComp, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/gallery.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
