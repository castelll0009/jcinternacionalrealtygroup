/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_n4vsnFKN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_C8lZD2Mi.mjs';
import { $ as $$Services$1 } from './index_rA1Y086E.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anuncios", "subtitle": "Anuncios y publicidad, asesorias, ingresos, ventas, catalogo productos, redes sociales, SEO, google ads " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" "> ${renderComponent($$result2, "Services", $$Services$1, {})} </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/services.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
