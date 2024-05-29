/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, o as Fragment } from '../astro_n4vsnFKN.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_C8lZD2Mi.mjs';
import 'clsx';
import { createClient } from '@supabase/supabase-js';
/* empty css                                    */
/* empty css                           */

const supabase = createClient(
  "https://lbyvzysocosyjpvecwwm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxieXZ6eXNvY29zeWpwdmVjd3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMTQyMTksImV4cCI6MjAyNjY5MDIxOX0.dz2KgedU7R3n0sdW4nHbmW7DBvUBN8tzAVD37j_mLj4",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

const $$Astro$b = createAstro("https://castelll0009.github.io");
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, subtitle, titleSize, subsize, p, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`section-title  ${p}  ml-0 text-left `, "class")} data-astro-cid-sdj3p5yk> <p${addAttribute(`main-article-subheading ${titleSize}`, "class")} data-astro-cid-sdj3p5yk>${title}</p> <p${addAttribute(`${subsize} text-gray-900 dark:text-white main-article-heading theme-font-titles`, "class")} data-astro-cid-sdj3p5yk>${subtitle}</p> </div> `;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/SectionTitle.astro", void 0);

async function fetchApi({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList
}) {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  const url = new URL(`${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://castelll0009.github.io", "ASSETS_PREFIX": undefined}.STRAPI_URL}/api/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }
  if (wrappedByList) {
    data = data[0];
  }
  return data;
}

const $$Astro$a = createAstro("https://castelll0009.github.io");
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Modal;
  const { img, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`drawer-modal${id}`, "id")}${addAttribute(`h-full w-full flex fixed flex-row items-center justify-center bg-blue-950/40 transition-transform -translate-x-full left-0 top-0 translate-y-0 z-50 tabindex="-1" aria-labelledby="drawer-contact-label`, "class")} style="backdrop-filter: blur(4px); max-height: 100%; min-width: fit-content; "> <!-- card picture --> <div class="max-w-xl bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700" style=""> <a class="" type="button"${addAttribute(`drawer-modal${id}`, "data-drawer-hide")}${addAttribute(`drawer-modal${id}`, "aria-controls")}> <img class="inline w-full max-h-full object-cover"${addAttribute(img, "src")} alt=""> </a></div><a class="" type="button"${addAttribute(`drawer-modal${id}`, "data-drawer-hide")}${addAttribute(`drawer-modal${id}`, "aria-controls")}></a> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/Modal.astro", void 0);

const $$Astro$9 = createAstro("https://castelll0009.github.io");
const $$ItemSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ItemSingle;
  const { id, imgMobil, imgPc, title, subtitle, price, arrayColor, url_imagen, slug } = Astro2.props;
  console.log("ID PRODUCTO:" + id);
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-secondary" style="padding: 0px;"> <article class="z-50  md:p-28   flex flex-col items-center justify-start md:flex-row md:w-full md:max-w[1068px] md:gap-10 md:items-start text-center text-secondary dark:text-white"> <!-- renderizing with url imagen --> <figure class="md:flex-1 flex fixed w-full z-10 md:relative h-[561px] max-h-[561px] min-h-[40vh] md:w-1/2 rounded-sm overflow-hidden  dark:border-gray-700 justify-end"> <img${addAttribute(`${url_imagen}`, "src")} alt="" style="position: absolute;
            top: 0;
            left: 0;
            transition: opacity var(--lazy-image-fade-duration, 0.3s) var(--lazy-image-fade-easing, ease);
            object-fit: var(--lazy-image-fit, contain);
            width: var(--lazy-image-width, 100%);
            height: var(--lazy-image-height, 100%);"> </figure> <div class="c-product-actions md:hidden z-40 w-full flex flex-row justify-end p-5" style=" margin-top: 469px; top: 16px;"> <!-- Favorite buttton mobil --> <span class="relative bg-primary dark:bg-secondary p-3 shadow-lg rounded-[100%]"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 31 5 26c-3-5 3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0"></path></svg> </span> </div> <!-- product details MOBIL--> <figure class="relative md:flex-1 bg-white dark:bg-secondary z-20 p-3 w-full flex flex-col justify-between"> <div class="p-3 w-full flex flex-row md:flex-col justify-between text-start"> <span class="text-start"> <h4 class="text-sm md:text-xl md:font-bold md:uppercase tracking-tight text-gray-900 dark:text-white mb-0 text-nowrap text-ellipsis overflow-hidden"> ${title} </h4> <h5 class="mb-0 text-xs text-[#737373] tracking-tight text-gray-900 dark:text-white"> ${subtitle} </h5> </span> <span> <h6 class="font-bold text-lg md:text-xl dark:text-white text-secondary"> ${price.toLocaleString()} COP
</h6> </span> </div> <div class="p-0 w-full flex flex-row md:flex-col justify-between text-start"> <!--  colors camisas  --> <span class="p-3 colors_items flex flex-row md:justify-start gap-1" style="display: \${Array.isArray(arrayColor) && arrayColor.length > 0 ? 'flex' : 'none'};"> <p class="text-start">Colores</p> ${arrayColor && arrayColor.length > 0 && arrayColor.map((color) => renderTemplate`<div class="flex flex-row items-center"> <div class="w-3 h-3 border border-gray-300"${addAttribute({ backgroundColor: color }, "style")}></div> </div>`)} </span> <span class="p-3">Talla</span> <span class=" flex-row gap-2 w-full md:flex"> <!-- Favorite buttton mobil --> <span class="relative hidden bg-primary dark:bg-secondary p-3 shadow-lg rounded-md border-silver border"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 31 5 26c-3-5 3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0"></path></svg> </span> <button type="button" class="text-white w-full max-w-96  justify-center bg-blue-700 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"> <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"> <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path> </svg>
AL CARRITO
</button> </span> </div> </figure> </article> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/productos/ItemSingle.astro", void 0);

async function getProductoBySlug(slug) {
  try {
    const { data: product, error } = await supabase
      .from('product')
      .select('*')
      .eq('slug', slug)
      .single(); // Si esperas solo un resultado;      
      
    if (error) {
      console.error('Error al recuperar producto:', error.message);
      return null;
    }

    return product;
  } catch (error) {
    console.error('Error al recuperar producto:', error.message);
    return null;
  }
}

const $$Astro$8 = createAstro("https://castelll0009.github.io");
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { slug } = Astro2.params;
  let producto;
  if (slug === void 0) {
    console.error("El ID del producto es undefined");
  } else {
    const productoPromise = getProductoBySlug(slug);
    producto = await productoPromise;
    console.log("SLUG PRODUCT GET: " + JSON.stringify(producto));
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "producto", "subtitle": producto.slug }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ItemSingle", $$ItemSingle, { "url_imagen": producto.url_imagen, "title": producto.title, "subtitle": producto.subtitle, "price": producto.precio, "arrayColor": producto.colores })} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/producto/[slug].astro", void 0);

const $$file$1 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/producto/[slug].astro";
const $$url$1 = "/producto/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://castelll0009.github.io");
const $$CardDay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardDay;
  const { array, lineClamp, textSize, mb, maxH, p } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ol${addAttribute(`relative ${textSize}  text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400`, "class")}${addAttribute(``, "style")}> ${array.map((day) => renderTemplate`<li${addAttribute(`mb-${mb} ms-6`, "class")}> <span class="absolute hover:bg-yellow-100 flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"> ${day.attributes.number} </span> <h3${addAttribute(`font-medium leading-tight ${p} dark:text-gray-200 line-clamp-${lineClamp}`, "class")}> ${day.attributes.title}</h3> <p${addAttribute(`${textSize} line-clamp-2  text-justify`, "class")}${addAttribute(`-webkit-line-clamp: ${lineClamp};`, "style")}> ${day.attributes.description} </p> </li>`)} </ol>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/CardDay.astro", void 0);

const $$Astro$6 = createAstro("https://castelll0009.github.io");
const $$CardInventario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardInventario;
  const { arrayPax, array, lineClamp, textSize, mb, p } = Astro2.props;
  console.log("ARRRAY:" + array.attributes.duration);
  console.log("ARRRAY PAX:" + arrayPax.attributes);
  return renderTemplate`${maybeRenderHead()}<ol${addAttribute(`relative ${textSize} text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400`, "class")} style=""> <li class="mb-6 ms-6"> <span class="absolute hover:bg-green-200 flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"> <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 20"> <path xmlns="http://www.w3.org/2000/svg" d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="currentColor"></path> <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" fill="currentColor"></path> </svg> </span> <h3${addAttribute(`font-medium ${p} leading-tight dark:text-gray-200`, "class")}>Tour Duration</h3> <p${addAttribute(`${textSize}`, "class")}>${array.attributes.duration} days</p> </li> <li class="mb-6 ms-6"> <span class="absolute hover:bg-green-200 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"> <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"></path> </svg> </span> <h3${addAttribute(`font-medium ${p} leading-tight dark:text-gray-200`, "class")}>Group size</h3> <p${addAttribute(`${textSize}`, "class")}>${array.attributes.group_size} People</p> </li> <li class="mb-6 ms-6"> <span class="absolute hover:bg-green-200 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"> <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"></path> </svg> </span> <h3${addAttribute(`font-medium ${p} leading-tight dark:text-gray-200`, "class")}>Single Supplement</h3> <p${addAttribute(`${textSize}`, "class")}>$${array.attributes.single_supplement} USD</p> </li> <li class="mb-6 ms-6"> <span class="absolute hover:bg-green-200 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"> <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"></path> </svg> </span> <h3${addAttribute(`font-medium ${p} leading-tight dark:text-gray-200`, "class")}>Does include</h3> <p${addAttribute(`${textSize} line-clamp-${lineClamp}`, "class")}>${array.attributes.incluide}</p> </li> <li class="mb-6 ms-6"> <span class="absolute hover:bg-green-200 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"> <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"></path> </svg> </span> <h3${addAttribute(`font-medium ${p} leading-tight dark:text-gray-200`, "class")}>Does not include</h3> <p${addAttribute(`${textSize} line-clamp-${lineClamp}`, "class")}>${array.attributes.not_include}</p> </li> ${arrayPax.map((pax) => renderTemplate`<li class="mb-6 ms-6"> <span class="absolute hover:bg-green-200 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"> <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"></path> </svg> </span> <h3${addAttribute(`font-medium ${p} leading-tight dark:text-gray-200`, "class")}>${pax.attributes.pax_description}</h3> <p${addAttribute(`${textSize}`, "class")}>$${pax.attributes.price} USD</p> </li>`)} </ol> <!-- pax  and  prices  --> <!-- {arrayPax.map((pax) => (           
      <li class="py-3 sm:py-4">
      <div class="flex items-center">

          <div class="flex-1 min-w-0">
              <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                  PAX
              </p>
              <p
                  class="text-sm text-gray-500 truncate dark:text-gray-400"
              >
                  {pax.attributes.pax_description}
              </p>
          </div>
          <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
              \${pax.attributes.price}
          </div>
      </div>
  </li>
  ))}		   -->`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/CardInventario.astro", void 0);

const $$Astro$5 = createAstro("https://castelll0009.github.io");
const $$CardPictureTour = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardPictureTour;
  const { img1, img1id, img2, img2id, title, ph, category } = Astro2.props;
  const img1IdString = img1id !== void 0 ? img1id.toString() : void 0;
  const img2IdString = img2id !== void 0 ? img2id.toString() : void 0;
  return renderTemplate`<!-- show the modal conponent -->${maybeRenderHead()}<a class="text-left relative cursor-pointer" type="button"${addAttribute(`drawer-modal${img1IdString}`, "data-drawer-target")}${addAttribute(`drawer-modal${img1IdString}`, "data-drawer-show")} data-astro-cid-hzfrdpiv> <div class="relative" data-astro-cid-hzfrdpiv> <img class="h-auto max-w-full rounded-lg"${addAttribute(img1, "src")} alt="" data-astro-cid-hzfrdpiv> <span class="absolute w-full h-full rounded-lg text-gray-100 left-0 bottom-0 bg-black/40 opacity-0 hover:opacity-100" style="backdrop-filter: blur(0px)" data-astro-cid-hzfrdpiv> <div class="absolute bottom-0 left-0 p-2 md:p-3 text-xs md:text-base " style="" data-astro-cid-hzfrdpiv> <p class="capitalize" data-astro-cid-hzfrdpiv>${title}</p> <p class="capitalize" data-astro-cid-hzfrdpiv>by: ${ph}</p> </div> </span> </div> ${renderComponent($$result, "Modal", $$Modal, { "img": img1, "id": img1IdString, "data-astro-cid-hzfrdpiv": true })} </a> <a class="text-left relative cursor-pointer" type="button"${addAttribute(`drawer-modal${img2IdString}`, "data-drawer-target")}${addAttribute(`drawer-modal${img2IdString}`, "data-drawer-show")} data-astro-cid-hzfrdpiv> <div class="relative" data-astro-cid-hzfrdpiv> <img class="h-auto max-w-full rounded-lg"${addAttribute(img2, "src")} alt="" data-astro-cid-hzfrdpiv> <span class="absolute w-full h-full rounded-lg text-gray-100 left-0 bottom-0 bg-black/40 opacity-0 hover:opacity-100" style="backdrop-filter: blur(0px)" data-astro-cid-hzfrdpiv> <div class="absolute bottom-0 left-0 p-2 md:p-3 text-xs md:text-base " style="" data-astro-cid-hzfrdpiv> <p class="capitalize" data-astro-cid-hzfrdpiv>${title}</p> <p class="capitalize" data-astro-cid-hzfrdpiv>by: ${ph}</p> </div> </span> </div> ${renderComponent($$result, "Modal", $$Modal, { "img": img2, "id": img2IdString, "data-astro-cid-hzfrdpiv": true })} </a>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/CardPictureTour.astro", void 0);

const $$Astro$4 = createAstro("https://castelll0009.github.io");
const $$GalleryCompTours = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GalleryCompTours;
  const { id, numCols, textSize } = Astro2.props;
  let idString = id !== void 0 ? id.toString() : void 0;
  const tour = await fetchApi({
    // const tour = await fetchApi<Gallery[]>({
    // const tour = await fetchApi<Tour[]>({
    endpoint: `tours/${idString}?populate[galleries][populate][0]=image`,
    // the content type to fetch
    // endpoint : `/pictures?populate=tour=1`,
    wrappedByKey: "data"
    // the key to unwrap the response
  });
  console.log("/////////////fetching id Gallery///////////// " + tour);
  const imagesPerBlock = 2;
  const gallery = tour.attributes.galleries.data;
  return renderTemplate`${maybeRenderHead()}<section class="section flex flex-col max-w-96 min-w-full rounded-sm md:flex-row flex-wrap gap-3 md:gap-5 justify-center items-center" style="background: white; padding:4vw; padding-top: 20px;  "> <!-- <h1>{tour}</h1> --> <h1${addAttribute(`text-left min-w-full text-5xl dark:text-white max-w-lg`, "class")}>Birdwatching Tours and Experiences</h1> <div${addAttribute(`grid grid-cols-2 md:grid-cols-${numCols} gap-6 text-center`, "class")}> ${gallery.map((picture, index) => {
    if (index % imagesPerBlock === 0) {
      const nextPicture = gallery[index + 1];
      return renderTemplate`<div class="grid gap-4"> ${renderComponent($$result, "CardPictureTour", $$CardPictureTour, { "img1": picture.attributes.image.data?.attributes.url, "img1id": picture.id, "img2": nextPicture?.attributes.image.data?.attributes.url, "img2id": nextPicture?.id, "title": picture.attributes.title, "ph": picture.attributes.ph })} </div>
          ${renderComponent($$result, "Fragment", Fragment, {})}`;
    } else {
      return null;
    }
  })} </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/pages/GalleryCompTours.astro", void 0);

const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$Btn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Btn;
  const { href, att } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`inline-flex items-center px-3 py-2  backdrop-blur-sm text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${att}  `, "class")}>
Read more
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/Btn.astro", void 0);

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$CardTourDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardTourDetails;
  const { tourAttributes, tourId } = Astro2.props;
  tourId !== void 0 ? tourId.toString() : void 0;
  return renderTemplate`${maybeRenderHead()}<div> <!-- card tour details --> <div class="flex-1 overflow-hidden min-w-min md:w-2/3 max-w-sm m-0" style=""> <span class="flex z-10 min-h-80 max-h-80 min-w-80 max-w-sm md:min-h-72 md:max-h-min-h-72 md:min-w-2/3 md:max-w-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"${addAttribute(`
            background-image: url(${tourAttributes.image.data?.attributes.url});    
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;   
            width: 100%;
            border-bottom: none; /* Elimina el borde inferior */
            border-radius: 8px 8px 0 0; /* Redondear solo los bordes superiores izquierdo y derecho */
            `, "style")}></span> <div class="p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style="border-top: none;border-radius: 0 0 8px 8px"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Overview", "subtitle": tourAttributes.title, "titleSize": "", "subsize": "text-xl", "p": "pb-10" })} <!-- Region:  --> <h6 class="text-sm -mt-6 text-gray-500 truncate dark:text-gray-300" style="font-weight: 600;"> ${tourAttributes.region} </h6> <h6 class="text-sm font-medium pb-6 text-gray-900 dark:text-white"> <!-- Description:  --> <p class="text-sm text-gray-500 line-clamp-4 dark:text-gray-400"> ${tourAttributes.description} </p> </h6> <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700"> <li class="py-3 sm:py-4"> <div class="flex items-center"> <!-- <div class="mr-5 flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
          </div> --> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Date departure
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${tourAttributes.date_departure} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
All year ${tourAttributes.all_year} </div> </div> </li> <li class="py-3 sm:py-4"> <div class="flex items-center"> <!-- <div class="mr-5 flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
        </div> --> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Region
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${tourAttributes.region} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
-${tourAttributes.discount}%
</div> </div> </li> <li class="py-3 sm:py-4"> <div class="flex items-center"> <!-- <div class="mr-5 flex-shrink-0">
          <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
      </div> --> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Price
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${tourAttributes.price_visible} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
$${tourAttributes.price} USD
</div> </div> </li> </ul> ${renderComponent($$result, "Btn", $$Btn, { "href": "#section-tour-details", "att": " py-1 text-gray-500  bg-white dark:bg-gray-800" })} </div> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/pages/CardTourDetails.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$CardTourDetailsOnly = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardTourDetailsOnly;
  const { tourAttributes, tourId, arrayPax } = Astro2.props;
  tourId !== void 0 ? tourId.toString() : void 0;
  return renderTemplate`<!-- card tour details -->${maybeRenderHead()}<div class="flex-1 rounded-md flex flex-col md:flex-row gap-10  overflow-hidden min-w-min md:w-2/3 w-full m-0 " style=""> <div class="flex-1 p-5 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700" style="min-width:65%"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "color": "white", "title": "All about", "subtitle": tourAttributes.title, "titleSize": "", "subsize": "text-xl", "p": "pb-10" })} <!-- Region:  --> <h6 class="text-sm -mt-6 pb-10 text-gray-500 truncate dark:text-gray-300" style="font-weight: 600;"> ${tourAttributes.region} </h6> <h6 class="text-sm font-medium pb-6 text-gray-900 dark:text-white"> <!-- Description:  --> <p class="text-sm text-gray-500 text-justify  dark:text-gray-400"> ${tourAttributes.description} </p> </h6> </div> <div class="flex-1 p-5 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700" style=""> <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700"> <li class="py-3 sm:py-4"> <div class="flex items-center"> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Date departure
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${tourAttributes.date_departure} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
All year ${tourAttributes.all_year} </div> </div> </li> <li class="py-3 sm:py-4"> <div class="flex items-center"> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Region
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${tourAttributes.region} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
-${tourAttributes.discount}%
</div> </div> </li> <li class="py-3 sm:py-4"> <div class="flex items-center"> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
Price
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${tourAttributes.price_visible} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
$${tourAttributes.price} USD
</div> </div> </li> <!-- pax  and  prices --> ${arrayPax.map((pax) => renderTemplate`<li class="py-3 sm:py-4"> <div class="flex items-center"> <div class="flex-1 min-w-0"> <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
PAX
</p> <p class="text-sm text-gray-500 truncate dark:text-gray-400"> ${pax.attributes.pax_description} </p> </div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
$${pax.attributes.price} USD
</div> </div> </li>`)} </ul> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/pages/CardTourDetailsOnly.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let tour;
  try {
    tour = await fetchApi({
      endpoint: "tours?populate=image,days,inventario,pax_and_prices",
      wrappedByKey: "data",
      wrappedByList: true,
      query: {
        "filters[slug][$eq]": slug || ""
      }
    });
  } catch (error) {
    return Astro2.redirect("/404");
  }
  console.log("fetch slug tour " + tour);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tour", "subtitle": tour.attributes.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="z-50 m-0" style="font-size: 0px;">${tour.attributes.title}</h1> <section class="p-10 md:p-20 section gap-5 flex flex-col md:flex-row justify-around" style="background: white;"> ${renderComponent($$result2, "CardTourDetails", $$CardTourDetails, { "tourAttributes": tour.attributes, "tourId": tour.id })} <!-- /////////////// section days and inventory ////////////////////////////////////////////// --> <!-- cover  cards --> <div class="flex flex-col max-w-xl min-w-xl gap-5 -mt-5 items-start"> <!-- card days  --> <a class="flex-1" href="#section-day"> <div class="p-5 relative max-h-96 min-h-96 overflow-hidden max-w-sm min-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style="width: 100%;"> <div class="absolute min-w-full bottom-0 right-0 p-2 text-left z-10 bg-white dark:bg-gray-800" style=""> ${renderComponent($$result2, "Btn", $$Btn, { "href": "#section-day", "att": " py-1 text-gray-500  bg-white dark:bg-gray-800 " })} </div> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Day Plainer", "subtitle": "", "p": "pb-5" })} ${tour.attributes.days?.data ? renderTemplate`${renderComponent($$result2, "CardDay", $$CardDay, { "array": tour.attributes.days.data, "lineClamp": "1", "textSize": "text-xs", "mb": "6" })}` : renderTemplate`<p>No day items available</p>`} </div> </a> <!-- card Inventory  --> <a class="flex-1" href="#section-inventory"> <div class="p-5 pb-12 relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style="width: 100%;"> <div class="absolute min-w-full bottom-0 right-0 p-2 text-left z-10 rounded-b-lg bg-white dark:bg-gray-800" style=""> ${renderComponent($$result2, "Btn", $$Btn, { "href": "#section-inventory", "att": " py-1 text-gray-500  bg-white dark:bg-gray-800 " })} </div> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Inventory", "p": "pb-5", "subtitle": "" })} ${tour.attributes.inventario?.data ? renderTemplate`${renderComponent($$result2, "CardInventario", $$CardInventario, { "arrayPax": tour.attributes.pax_and_prices.data, "array": true, "array": tour.attributes.inventario.data, "lineClamp": "2", "textSize": "text-xs" })}` : renderTemplate`<p></p>`} </div> </a> </div> <!-- gallery tour ////////////////////////////////// --> <section class="min-w-72 min-h-full" style="min-width:40vw;"> ${renderComponent($$result2, "GalleryCompTours", $$GalleryCompTours, { "id": tour.id, "numCols": "2" })} </section> </section>  <section id="section-tour-details" class="section flex flex-row items-center justify-center" style="background: white;"> ${renderComponent($$result2, "CardTourDetailsOnly", $$CardTourDetailsOnly, { "arrayPax": tour.attributes.pax_and_prices.data, "tourAttributes": tour.attributes })} </section>  <section class=" section flex flex-col md:flex-row items-start"> <!-- /////////////// section days ////////////////////////////////////////////// --> <section id="section-day" class=" section  flex flex-1 flex-row items-center justify-center" style="background: none !important;"> <div class="flex-1"> <div class="p-5 -mt-10" style="width: 100%;"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Day Plainer", "p": "pb-10", "subtitle": "Activities for each day" })} ${tour.attributes.days?.data ? renderTemplate`${renderComponent($$result2, "CardDay", $$CardDay, { "array": tour.attributes.days.data, "p": "pb-3", "maxH": "50vh", "lineClamp": "unset", "mb": "10" })}` : renderTemplate`<p>No day items available</p>`} </div> </div> </section> <!-- /////////////// section inventory ////////////////////////////////////////////// --> <section id="section-inventory" class=" section  flex flex-1 flex-row items-center justify-center" style="background: none !important;"> <div class="flex-1"> <div class="p-5 -mt-10" style=" width: 100%;"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Inventory", "p": "pb-10", "subtitle": "check out what's included" })} ${tour.attributes.inventario?.data ? renderTemplate`${renderComponent($$result2, "CardInventario", $$CardInventario, { "arrayPax": tour.attributes.pax_and_prices.data, "array": tour.attributes.inventario.data, "p": "pb-3", "lineClamp": "none" })}` : renderTemplate`<p></p>`} </div> </div> </section> </section>  <section> ${renderComponent($$result2, "GalleryCompTours", $$GalleryCompTours, { "id": tour.id, "textSize": "text-6xl", "numCols": "3" })} </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/tours/[slug].astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/tours/[slug].astro";
const $$url = "/tours/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionTitle as $, _slug_$1 as _, $$Modal as a, _slug_ as b, fetchApi as f, supabase as s };
