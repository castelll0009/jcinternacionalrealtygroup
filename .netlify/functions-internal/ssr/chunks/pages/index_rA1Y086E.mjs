/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent } from '../astro_n4vsnFKN.mjs';
import 'kleur/colors';
import 'clsx';
import { c as clientData, $ as $$Layout } from './404_C8lZD2Mi.mjs';
import { $ as $$CardContact } from './ads_launcher_Cl05ndcs.mjs';
import { s as supabase } from './_slug__BMJmqAtU.mjs';
/* empty css                          */

const $$Astro$g = createAstro("https://castelll0009.github.io");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate``;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/CEO/index.astro", void 0);

const $$file$3 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/CEO/index.astro";
const $$url$3 = "/CEO";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getCatalogosFromSupabase() {
  try {
    let { data: catalogo, error } = await supabase
      .from('catalogo')
      .select('*,product(*)');
      
    if (error) {
      console.error('Error al recuperar Catalogos:', error.message);
      return [];
    }

    return catalogo;
  } catch (error) {
    console.error('Error al recuperar Catalogos:', error.message);
    return [];
  }
}

const $$Astro$f = createAstro("https://castelll0009.github.io");
const $$Cover = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Cover;
  const { imgMobil, imgPc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="header-hero" class="relative  h-fit  flex flex-col section justify-start align-middle text-center rounderd-xl" style="padding: 0 !important;"> <div class="hidden md:block"> <img class="object-center"${addAttribute(imgPc, "src")}${addAttribute(1600, "width")}${addAttribute(800, "height")} alt="Imagen Pc" style="    width: -webkit-fill-available;
      "> </div> <div class="block md:hidden"> <img class="object-center"${addAttribute(imgMobil, "src")}${addAttribute(1600, "width")}${addAttribute(800, "height")} alt="Imagen Mobil" style="    width: -webkit-fill-available;
      "> </div> </header>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/landing/Cover.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$e = createAstro("https://castelll0009.github.io");
const $$Highlights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Highlights;
  const { imgMobil, imgPc } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section class="section flex gap-5 flex-col justify-center text-center"> <h2 class="font-bold text-2xl dark:text-primary text-secondary uppercase">\nHighlights\n</h2> <!-- Swiper Container --> <div class="swiper-container"> <div class="swiper-wrapper flex flex-row gap-5 justify-start md:justify-center "> <!-- Article 1 --> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <div class="swiper-slide"> <article class="flex flex-col items-center"> <a href="#" class="max-w-[280px] max-h-[450px] min-w-[280px] min-h-[450px] bg-white rounded-sm overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700"', '> <!-- Your article content here --> </a> <h3 class="dark:text-primary text-secondary p-6 uppercase">\nHoddies\n</h3> </article> </div> <!-- Repeat for other articles --> </div> <!-- Add Pagination --> <div class="swiper-pagination"></div> <!-- Add Navigation Arrows --> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div> </div> </section> <script>\n    document.addEventListener("DOMContentLoaded", function () {\n      var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;\n  \n      if (isMobile) {\n        var mySwiper = new Swiper(".swiper-container", {\n          // Optional parameters\n          direction: "horizontal",\n          loop: false,\n          centeredSlides: true,\n          slidesPerView: 1,\n          spaceBetween: 0,\n  \n          // If we need pagination\n          pagination: {\n            el: ".swiper-pagination",\n            clickable: true,\n          },\n  \n          // Navigation arrows\n          navigation: {\n            nextEl: ".swiper-button-next",\n            prevEl: ".swiper-button-prev",\n          },\n        });\n      }\n    });\n  <\/script>'])), maybeRenderHead(), addAttribute(`background-image: url(${imgMobil});
              background-position: center;             
              background-size: cover;
              background-repeat: no-repeat;`, "style"), addAttribute(`background-image: url(${imgMobil});
              background-position: center;             
              background-size: cover;
              background-repeat: no-repeat;`, "style"), addAttribute(`background-image: url(${imgMobil});
              background-position: center;          
              background-size: cover;
              background-repeat: no-repeat;`, "style"), addAttribute(`background-image: url(${imgMobil});
              background-position: center;             
              background-size: cover;
              background-repeat: no-repeat;`, "style"));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/landing/Highlights.astro", void 0);

const $$Astro$d = createAstro("https://castelll0009.github.io");
const $$Item = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Item;
  const { id, imgMobil, imgPc, title, subtitle, price, arrayColor, url_imagen, slug } = Astro2.props;
  console.log("ID PRODUCTO:" + id);
  return renderTemplate`${maybeRenderHead()}<article class="w-1/2 relative md:w-1/4" style=""> <a${addAttribute(`/producto/${slug}`, "href")} class="flex flex-col items-start md:items-center w-fit"> <!-- rederizing whit local image --> <!-- <div
            class=" w-full min-w-44 max-w-[50vw] h-[40vh] min-h-[40vh] max-h-[50vh] relative bg-white rounded-sm overflow-hidden  dark:bg-gray-800 dark:border-gray-700"
            style=\`background-image: url(/tshirt/\${imgMobil});
            background-position: center;           
            background-size: cover;
            background-repeat: no-repeat;\`
        > --> <!-- renderizing with url imagen --> <div class="w-full relative bg-white rounded-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700"> <figure class="figure"> <div class="overlay"></div> <img alt="Camiseta básica cropped manga corta , GRIS ANTRACITA" class="image-responsive"${addAttribute(`${url_imagen}`, "src")}> </figure> <!-- Your div content here --> <span class="absolute bottom-3 right-3"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.001 31 5 26c-3-5 3.313-9.687 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V17a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-5a3.5 3.5 0 1 1 7 0v16.615c0 1.897-.422 3.789-1.573 5.297C41.133 37.106 39.017 39.354 36 41c-5.5 3-11.5 2.75-17 0"></path></svg> </span> </div> <div class="p-3 w-full text-start md:text-center items-start md:justify-center"> <h4 class="text-sm tracking-tight text-gray-900 dark:text-white mb-0 text-nowrap text-ellipsis overflow-hidden"> ${title} </h4> <h5 class="mb-0 text-xs text-[#737373] tracking-tight text-gray-900 dark:text-white"> ${subtitle} </h5> <h6 class="font-bold text-sm dark:text-white text-secondary">
$ ${price.toLocaleString()} COP
</h6> <!--  colors camisas  --> <div class="colors_items flex flex-row md:justify-center gap-1" style="display: \${Array.isArray(arrayColor) && arrayColor.length > 0 ? 'flex' : 'none'};"> ${arrayColor && arrayColor.length > 0 && arrayColor.map((color) => renderTemplate`<div class="flex flex-row items-center"> <div class="w-3 h-3 border border-gray-300"${addAttribute({ backgroundColor: color }, "style")}></div> </div>`)} </div> </div> </a> </article>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/productos/Item.astro", void 0);

const $$Astro$c = createAstro("https://castelll0009.github.io");
const $$Catalogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Catalogo;
  const { arrayProductos, sectionTitle } = Astro2.props;
  return renderTemplate`<!-- {Object.keys(arrayProductos).map((productoArray) => (    
    <Productos1  sectionTitle={sectionTitle} productos={arrayProductos[productoArray]} />
))} --><!-- {arrayProductos.map((producto) => (
    <Productos1  
        key={producto.id} // Asegúrate de agregar una clave única para cada elemento
        sectionTitle={producto.title} 
        productos={[producto]} // Pasa cada producto como un array de un solo elemento
    />
))} -->${maybeRenderHead()}<section class="flex section flex-col  items-center justify-center" style="padding: 0 !important;"> <h5 class="uppercase m-2 text-center w-full bg-secondary dark:bg-primary text-primary dark:text-secondary">${sectionTitle}</h5> <div class="flex-row md:flex-row flex-wrap flex  gap-0 md:gap-5   justify-center"> ${arrayProductos.map((item, index) => renderTemplate`${renderComponent($$result, "Item", $$Item, { "key": index, "Aseg\xFArate": true, "de": true, "agregar": true, "una": true, "clave": true, "\xFAnica": true, "para": true, "cada": true, "elemento": true, "id": item.id, "imgMobil": item.imgProducto, "title": item.title, "subtitle": item.subtitle, "price": item.precio, "arrayColor": item.colores, "url_imagen": item.url_imagen, "slug": item.slug })}`)} </div> </section> <!-- arrayColor={producto.arrayColor} -->`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/Catalogo.astro", void 0);

const $$Astro$b = createAstro("https://castelll0009.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$2;
  const catalogoPromise = getCatalogosFromSupabase();
  const catalogo = await catalogoPromise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientData.web_name, "subtitle": clientData.subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 0px; opacity: 0;">CAD: Webs Disign Ads  Marketing Publicidad Branding </h1>  ${renderComponent($$result2, "Cover", $$Cover, { "imgPc": "/cover_men_pc.jpg", "imgMobil": "/cover_men.jpg" })} ${renderComponent($$result2, "Highlights", $$Highlights, { "imgMobil": "/tshirt/shirt1.jpg" })} ${renderComponent($$result2, "Catalogo", $$Catalogo, { "arrayProductos": catalogo[0].product, "sectionTitle": catalogo[0].titulo })} ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/hombre/index.astro", void 0);

const $$file$2 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/hombre/index.astro";
const $$url$2 = "/hombre";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://castelll0009.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientData.web_name, "subtitle": clientData.subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-size: 0px; opacity: 0;">CAD: Webs Disign Ads  Marketing Publicidad Branding </h1>  ${renderComponent($$result2, "Cover", $$Cover, { "imgPc": "/cover_women_pc.webp", "imgMobil": "/cover_women.jpg" })} ${renderComponent($$result2, "CardContact", $$CardContact, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/mujer/index.astro", void 0);

const $$file$1 = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/mujer/index.astro";
const $$url$1 = "/mujer";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://castelll0009.github.io");
const $$CardService = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CardService;
  const { img, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm text-white dark:text-primary relative aspect-2-3 w-[300px] h-[420px] bg-white border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700"${addAttribute(`background-image: url(${img});`, "style")}> <div class="p-8 text-start flex flex-col h-full w-fit justify-between items-start" style="background: linear-gradient(354deg, black, transparent, transparent);
        background: radial-gradient(transparent, #00000074);"> <h5 class="mb-2 text-xl font-bold tracking-tight dark:text-white"> ${title} </h5> <span> <p class="mb-3 font-normal text-sm text-silver line-clamp-1"> ${description} </p> <a href="#" class="inline-flex items-center py-2 text-xs font-medium text-center text-white rounded-lg hover:text-gray-100 focus:ring-4 focus:outline-none uppercase">
Read more
<!-- <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
        >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"></path>
        </svg> --> </a> </span> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/CardService.astro", void 0);

const $$Astro$8 = createAstro("https://castelll0009.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services" class="section text-secondary dark:text-primary text-center bg-transparent
    flex flex-col md:flex-row gap-6 items-center justify-center"${addAttribute(` background: transparent; background-size: 10%;
     padding-top: 0px; 
    
    `, "style")}> ${renderComponent($$result, "CardService", $$CardService, { "img": "https://img.freepik.com/free-photo/financial-independent-woman-buying-new-house_23-2149571926.jpg?w=360", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        interests are well represented. A dedicated Real Estate Broker
        will provide you great advantage in the market. JC International
        Realty Group, LLC knows the business in every step of the
        process. Looking for the perfect home should always start by
        location, this is the most important aspect when buying real
        estate.` })} ${renderComponent($$result, "CardService", $$CardService, { "img": "https://img.freepik.com/free-photo/woman-doing-daily-activities-minimal-decorated-room_23-2150407587.jpg?w=360", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        interests are well represented. A dedicated Real Estate Broker
        will provide you great advantage in the market. JC International
        Realty Group, LLC knows the business in every step of the
        process. Looking for the perfect home should always start by
        location, this is the most important aspect when buying real
        estate.` })} ${renderComponent($$result, "CardService", $$CardService, { "img": "https://img.freepik.com/free-photo/small-kitchen-space-with-modern-design_23-2150710557.jpg?w=360", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        interests are well represented. A dedicated Real Estate Broker
        will provide you great advantage in the market. JC International
        Realty Group, LLC knows the business in every step of the
        process. Looking for the perfect home should always start by
        location, this is the most important aspect when buying real
        estate.` })} ${renderComponent($$result, "CardService", $$CardService, { "img": "https://img.freepik.com/free-photo/woman-couch-eating-front-laptop_23-2148751492.jpg?w=360", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        interests are well represented. A dedicated Real Estate Broker
        will provide you great advantage in the market. JC International
        Realty Group, LLC knows the business in every step of the
        process. Looking for the perfect home should always start by
        location, this is the most important aspect when buying real
        estate.` })} </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/landing/Services.astro", void 0);

async function getTiendasFromSupabase() {
    try {
      let { data: tienda, error } = await supabase
        .from('tienda')
        .select('*,catalogo(*)');
        
      if (error) {
        console.error('Error al recuperar tiendas:', error.message);
        return [];
      }
  
      return tienda;
    } catch (error) {
      console.error('Error al recuperar tiendas:', error.message);
      return [];
    }
  }

const $$Astro$7 = createAstro("https://castelll0009.github.io");
const $$HeroCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroCarousel;
  return renderTemplate`${maybeRenderHead()}<header id="header-hero" class="relative w-full  bg-white dark:bg-secondary flex flex-col section justify-start align-middle text-center rounderd-xl h-[100vh] " style="padding: 0; "> <div id="default-carousel" class="relative w-fullh-[100vh]" data-carousel="static"> <!-- Carousel wrapper --> <div class="relative  overflow-hidden h-[100vh] rounded-none md:h-[100vh]"> <!-- Item 1 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Covercomp", $$Cover, { "imgMobil": "https://img.freepik.com/fotos-premium/arquitectura-diseno-interiores-casa-moderna_916617-1210.jpg?w=826", "imgPc": "https://img.freepik.com/fotos-premium/arquitectura-diseno-interiores-casa-moderna_916617-1210.jpg?w=826" })} </div> <!-- Item 2 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Covercomp", $$Cover, { "imgMobil": "https://img.freepik.com/foto-gratis/balcon-muebles-elegantes-decoracion-ia-generativa_188544-12681.jpg?w=826&t=st=1712020258~exp=1712020858~hmac=8e989e9439c4455b959c45bd483eb69d35d16833658d3b7abbdc62504d07decc", "imgPc": "https://img.freepik.com/foto-gratis/balcon-muebles-elegantes-decoracion-ia-generativa_188544-12681.jpg?w=826&t=st=1712020258~exp=1712020858~hmac=8e989e9439c4455b959c45bd483eb69d35d16833658d3b7abbdc62504d07decc" })} </div> <!-- Item 3 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> ${renderComponent($$result, "Covercomp", $$Cover, { "imgMobil": "https://img.freepik.com/psd-gratis/granja-moderna-colina-pradera-ia-generativa_587448-2096.jpg?t=st=1712020358~exp=1712023958~hmac=8de195577ac3b77235f0876442c9bfda81c6642633fa6fc284c63d21cb7e8d89&w=996", "imgPc": "https://img.freepik.com/psd-gratis/granja-moderna-colina-pradera-ia-generativa_587448-2096.jpg?t=st=1712020358~exp=1712023958~hmac=8de195577ac3b77235f0876442c9bfda81c6642633fa6fc284c63d21cb7e8d89&w=996" })} </div> </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> </div> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/0 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> <div class="absolute w-full h-[100vh] bg-black/10 z-20 flex flex-col justify-center items-center pointer-events-none"> <h1 class="text-third text-5xl md:text-6xl md:pl-[30vw] pl-[10vw] md:pr-[30vw] pr-[10vw]  pb-0 md:pt-0 pt-36  font-medium text-center mb-4 bg-white/20">Where Every Door Opens to Opportunity</h1> <div class="flex flex-col items-center "> <span class="text-primary text-xl">Services <i class="fas fa-arrow-right"></i></span> <span class="text-primary  text-xl">Buyers, Sellers, Commercial & Investement <i class="fas fa-arrow-right"></i></span> <button type="button" class=" pointer-events-auto mt-4 gap-2 text-gray-900 flex flex-row bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-secondary dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
Explore Now
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </button> </div> </div> </header>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/landing/HeroCarousel.astro", void 0);

const $$Astro$6 = createAstro("https://castelll0009.github.io");
const $$Introduction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Introduction;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="section text-secondary dark:text-primary text-center bg-transparent"${addAttribute(`background: transparent; background-size: 10%;
    padding-top: 80px; 
    
    `, "style")}> <div class="flex md:flex-row flex-col gap-10 background-container z-10 "> <div class="flex-1 flex justify-center -mt-[40px] md:justify-center  items-start flex-row gap-5 h-fit "> <span class="text-[120px] text-fourth ">[</span> <div class="flex flex-row self-center gap-6 " style="align-items: end;"> <h6 class="text-6xl font-bold text-third">25%</h6> <h6 class="text-md w-[80px]   tracking-[2px] font-bold bg-dark text-center ">
Prices Soaring High
</h6> </div> <span class="text-[120px] text-fourth">]</span> </div> <div class="flex-1"> <h6 class="text-sm tracking-[6px] bg-dark text-start pb-2 text-third uppercase">
Services
</h6> <h4 class="font-semibold text-3xl w-[300px] text-start">
Discover Your Perfect Real Estate Services
</h4> </div> <div class="flex-1  w-[200px]"> <p class="line-clamp-[10] text-sm text-[#656565] dark:text-[#c9c9c9] text-start">
Real Estate is considered the safest investment avenue for
                making profits. With the property prices rising as much as 25%,
                Real Estate makes perfect investment sense. That is one reason
                why Real Estate is so sought after. If you wanted to look for a
                really good deal in Real Estate, you should start by contacting
                JC International Realty Group, LLC today. Whether you are
                looking for your first home to live in, renting out an apartment
                or looking for investment real estate property, we are the right
                Real Estate Broker in Florida to call.
</p> <button type="button" class="mt-4 gap-2 text-gray-900 flex flex-row bg-white border border-gray-300 focus:outline-none hover:bg-fourth focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-third dark:text-white dark:border-gray-600 dark:hover:bg-fourth dark:hover:border-gray-600 dark:focus:ring-gray-700 w-max">
Continue reading
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </button> </div> <!-- <div class="absolute inset-0 -z-10">
            <BgAbout  />
          </div> --> </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/landing/Introduction.astro", void 0);

const $$Astro$5 = createAstro("https://castelll0009.github.io");
const $$CardValues = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardValues;
  const { img, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full text-center relative  border-gray-200 rounded-none shadow"> <div class="p-0 flex flex-col h-full w-56 items-center"> <div class="bg-black w-fit mb-3 rounded-full p-4" style="background-color: #7b954a;"> <img class="w-[80px]  bg-transparent" style="filter: invert(1);"${addAttribute(img, "src")} alt=""> </div> <h5 class="mb-2 p-3 text-xl font-normal tracking-tight "> ${title} </h5> <span> <p class="mb-3 font-normal text-sm text-[gray] dark:text-gray-400 "> ${description} </p> </span> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/CardValues.astro", void 0);

const $$Astro$4 = createAstro("https://castelll0009.github.io");
const $$HeadTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeadTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-sm tracking-[6px] bg-dark text-start pb-2 text-third uppercase"> ${title} </h3>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/HeadTitle.astro", void 0);

const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$WhyChooseUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhyChooseUs;
  return renderTemplate`${maybeRenderHead()}<section id="services" class="section text-secondary dark:text-primary text-center 
    bg-transparent flex flex-col gap-6 items-center justify-center
    md:pl-[18vw] md:pr-[18vw]"${addAttribute(` background: transparent; background-size: 10%;
           
    `, "style")}> <div class="self-start pb-16 pt-2"> ${renderComponent($$result, "HeadTitle", $$HeadTitle, { "title": "Why choose us" })} <h2 class=" md:w-[500px] text-start">
We work an extremely high standar of customer satisfaction
</h2> </div> <div class="flex flex-col md:flex-row  md:w-full gap-10 items-center justify-center"> ${renderComponent($$result, "CardValues", $$CardValues, { "img": "/whychooseus/1.png", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        location, this is the most important aspect when buying real
        estate.` })} ${renderComponent($$result, "CardValues", $$CardValues, { "img": "/whychooseus/1.png", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        location, this is the most important aspect when buying real
        estate.` })} ${renderComponent($$result, "CardValues", $$CardValues, { "img": "/whychooseus/1.png", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        location, this is the most important aspect when buying real
        estate.` })} ${renderComponent($$result, "CardValues", $$CardValues, { "img": "/whychooseus/1.png", "title": " Residential Property Sales", "description": `When looking for a property, you need to make sure all your
        location, this is the most important aspect when buying real
        estate.` })} </div> </section>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/resources/WhyChooseUs.astro", void 0);

const team = [
	{
		image: "/team/castell.svg",
		name: "Jane Doe",
		carrer: "Manager business"
	},
	{
		image: "/team/core.svg",
		name: "Jane Doe",
		carrer: "Engineer"
	},
	{
		image: "/team/member3.svg",
		name: "Jane Doe",
		carrer: "Invester real state"
	},
	{
		image: "/team/member4.svg",
		name: "Jane Doe",
		carrer: "Designer"
	}
];

const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$HeadtitleTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeadtitleTitle;
  const { headtitle, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="self-start pb-16 pt-2"> ${renderComponent($$result, "HeadTitle", $$HeadTitle, { "title": headtitle })} <h2 class=" md:w-[500px] text-start text-secondary dark:text-primary"> ${title} </h2> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/ui/HeadtitleTitle.astro", void 0);

const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Team;
  console.log(team);
  return renderTemplate`${maybeRenderHead()}<div id="team" class="section text-secondary dark:text-primary justify-center text-center bg-transparent flex flex-col gap-6 items-center md:pl-[5vw] md:pr-[5vw]"${addAttribute(` background: transparent; background-size: 10%;
       
`, "style")} data-astro-cid-opn3u5li> <div class="self-end" data-astro-cid-opn3u5li> ${renderComponent($$result, "HeadtitleTitle", $$HeadtitleTitle, { "headtitle": "Know our team", "title": "Business Leaders", "data-astro-cid-opn3u5li": true })} </div> <div class="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center" data-astro-cid-opn3u5li> <a href="#" class="flex flex-row bg-gradient-to-t from-third to-fourth w-[350px] items-center overflow-hidden bg-third max-h-[200px] relative border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800" data-astro-cid-opn3u5li> <div class="w-[40%] wfit" data-astro-cid-opn3u5li> <img class="object-cover block w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src="/team/image 8.png" alt="" data-astro-cid-opn3u5li> <div class="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-third to-transparent" data-astro-cid-opn3u5li></div> <div class="absolute p-4 pb-2 bottom-0 left-0 font-bold text-primary z-20 text-start" data-astro-cid-opn3u5li> <h2 class="text-lg" data-astro-cid-opn3u5li>Jane Doe</h2> <h3 class="text-sm -mt-2" data-astro-cid-opn3u5li>sales Manager</h3> </div> </div> <div class="w-[60%] h-min flex flex-col justify-between items-center bg-[#263667] dark:bg-primary p-4 leading-normal text-primary dark:text-secondary text-center border-l-10 border-gray-400 rounded-l-full border-solid" style="

   border-left: solid 16px gray;
    padding: 100px;
    margin: 0px;
    height: 100%;
    margin-left: -20px;
    min-width: unset;
    padding-top: 200px;
    transform: rotate(324deg);" data-astro-cid-opn3u5li></div> <div class="bg-[#263667] dark:bg-primary w-[178px] absolute right-0 top-0 text-primary dark:text-secondary flex flex-col items-center pt-2" data-astro-cid-opn3u5li> <img src="/logo.png" class="w-20" alt="" data-astro-cid-opn3u5li> <h2 class="text-xl bg-gray-400 w-fit" data-astro-cid-opn3u5li>1234565890</h2> <h3 data-astro-cid-opn3u5li>example@email.com</h3> <h4 data-astro-cid-opn3u5li>CEO Business</h4> <h3 class="pt-2 text-xs" data-astro-cid-opn3u5li>JC International Member</h3> </div> </a> <a href="#" class="flex flex-row bg-gradient-to-t from-third to-fourth w-[350px] items-center overflow-hidden bg-third max-h-[200px] relative border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800" data-astro-cid-opn3u5li> <div class="w-[40%] wfit" data-astro-cid-opn3u5li> <img class="object-cover block w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src="/team/image 9.png" alt="" data-astro-cid-opn3u5li> <div class="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-third to-transparent" data-astro-cid-opn3u5li></div> <div class="absolute p-4 pb-2 bottom-0 left-0 font-bold text-primary z-20 text-start" data-astro-cid-opn3u5li> <h2 class="text-lg" data-astro-cid-opn3u5li>Jane Doe</h2> <h3 class="text-sm -mt-2" data-astro-cid-opn3u5li>sales Manager</h3> </div> </div> <div class="w-[60%] h-min flex flex-col justify-between items-center bg-[#263667] dark:bg-primary p-4 leading-normal text-primary dark:text-secondary text-center border-l-10 border-gray-400 rounded-l-full border-solid" style="

   border-left: solid 16px gray;
    padding: 100px;
    margin: 0px;
    height: 100%;
    margin-left: -20px;
    min-width: unset;
    padding-top: 200px;
    transform: rotate(324deg);" data-astro-cid-opn3u5li></div> <div class="bg-[#263667] dark:bg-primary w-[178px] absolute right-0 top-0 text-primary dark:text-secondary flex flex-col items-center pt-2" data-astro-cid-opn3u5li> <img src="/logo.png" class="w-20" alt="" data-astro-cid-opn3u5li> <h2 class="text-xl bg-gray-400 w-fit" data-astro-cid-opn3u5li>1234565890</h2> <h3 data-astro-cid-opn3u5li>example@email.com</h3> <h4 data-astro-cid-opn3u5li>CEO Business</h4> <h3 class="pt-2 text-xs" data-astro-cid-opn3u5li>JC International Member</h3> </div> </a> <a href="#" class="flex flex-row bg-gradient-to-t from-third to-fourth w-[350px] items-center overflow-hidden bg-third max-h-[200px] relative border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800" data-astro-cid-opn3u5li> <div class="w-[40%] wfit" data-astro-cid-opn3u5li> <img class="object-cover block w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src="/team/image 10.png" alt="" data-astro-cid-opn3u5li> <div class="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-third to-transparent" data-astro-cid-opn3u5li></div> <div class="absolute p-4 pb-2 bottom-0 left-0 font-bold text-primary z-20 text-start" data-astro-cid-opn3u5li> <h2 class="text-lg" data-astro-cid-opn3u5li>Jane Doe</h2> <h3 class="text-sm -mt-2" data-astro-cid-opn3u5li>sales Manager</h3> </div> </div> <div class="w-[60%] h-min flex flex-col justify-between items-center bg-[#263667] dark:bg-primary p-4 leading-normal text-primary dark:text-secondary text-center border-l-10 border-gray-400 rounded-l-full border-solid" style="

   border-left: solid 16px gray;
    padding: 100px;
    margin: 0px;
    height: 100%;
    margin-left: -20px;
    min-width: unset;
    padding-top: 200px;
    transform: rotate(324deg);" data-astro-cid-opn3u5li></div> <div class="bg-[#263667] dark:bg-primary w-[178px] absolute right-0 top-0 text-primary dark:text-secondary flex flex-col items-center pt-2" data-astro-cid-opn3u5li> <img src="/logo.png" class="w-20" alt="" data-astro-cid-opn3u5li> <h2 class="text-xl bg-gray-400 w-fit" data-astro-cid-opn3u5li>1234565890</h2> <h3 data-astro-cid-opn3u5li>example@email.com</h3> <h4 data-astro-cid-opn3u5li>CEO Business</h4> <h3 class="pt-2 text-xs" data-astro-cid-opn3u5li>JC International Member</h3> </div> </a> <a href="#" class="flex flex-row bg-gradient-to-t from-third to-fourth w-[350px] items-center overflow-hidden bg-third max-h-[200px] relative border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800" data-astro-cid-opn3u5li> <div class="w-[40%] wfit" data-astro-cid-opn3u5li> <img class="object-cover block w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src="/team/image 11.png" alt="" data-astro-cid-opn3u5li> <div class="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-third to-transparent" data-astro-cid-opn3u5li></div> <div class="absolute p-4 pb-2 bottom-0 left-0 font-bold text-primary z-20 text-start" data-astro-cid-opn3u5li> <h2 class="text-lg" data-astro-cid-opn3u5li>Jane Doe</h2> <h3 class="text-sm -mt-2" data-astro-cid-opn3u5li>sales Manager</h3> </div> </div> <div class="w-[60%] h-min flex flex-col justify-between items-center bg-[#263667] dark:bg-primary p-4 leading-normal text-primary dark:text-secondary text-center border-l-10 border-gray-400 rounded-l-full border-solid" style="

   border-left: solid 16px gray;
    padding: 100px;
    margin: 0px;
    height: 100%;
    margin-left: -20px;
    min-width: unset;
    padding-top: 200px;
    transform: rotate(324deg);" data-astro-cid-opn3u5li></div> <div class="bg-[#263667] dark:bg-primary w-[178px] absolute right-0 top-0 text-primary dark:text-secondary flex flex-col items-center pt-2" data-astro-cid-opn3u5li> <img src="/logo.png" class="w-20" alt="" data-astro-cid-opn3u5li> <h2 class="text-xl bg-gray-400 w-fit" data-astro-cid-opn3u5li>1234565890</h2> <h3 data-astro-cid-opn3u5li>example@email.com</h3> <h4 data-astro-cid-opn3u5li>CEO Business</h4> <h3 class="pt-2 text-xs" data-astro-cid-opn3u5li>JC International Member</h3> </div> </a> <!-- wrapper teams --> </div> </div>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/components/landing/Team.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const tiendasPromise = getTiendasFromSupabase();
  await tiendasPromise;
  const catalogoPromise = getCatalogosFromSupabase();
  await catalogoPromise;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": clientData.web_name, "subtitle": clientData.subtitle }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroCarousel", $$HeroCarousel, {})} ${renderComponent($$result2, "Introduction", $$Introduction, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "Team", $$Team, {})}  ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/index.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/jcinternacionalrealtygroup/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Services as $, index$2 as a, index$1 as b, index as c, index$3 as i };
