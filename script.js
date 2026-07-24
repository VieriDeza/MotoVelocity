/* ============================================================
   MOTOVELOCITY — JAVASCRIPT PRINCIPAL
   Autor: Proyecto Integrador — Taller de Programacion Web
   ============================================================
   Modulos incluidos:
   - Navbar con efecto scroll y menu hamburguesa responsive
   - Carrito de compras con persistencia en LocalStorage
   - Catalogo con filtros por tipo/marca y buscador en tiempo real
   - Accesorios con filtros por categoria y buscador
   - Animaciones de entrada con IntersectionObserver (scroll reveal)
   - Contadores animados con easing cubico
   - Pagina de detalle dinamica generada desde el array MOTOS
   - Formulario de contacto con validacion avanzada en tiempo real
   ============================================================ */

/* ── DATOS DE MOTOS ─────────────────────────────────────────── */
var MOTOS = [
  /* ── YAMAHA ─────────────────────────────────────── */
  {
    id: 1,
    marca: 'Yamaha',
    modelo: 'YZF-R3',
    tipo: 'sport',
    precio: 16990,
    img: 'https://tse2.mm.bing.net/th/id/OIP._YfUy8NbdcEQCreTp4vWFwHaE8?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3',
    cc: '321cc', hp: '42 HP', peso: '169 kg',
    tanque: '14 L', asiento: '780 mm', transmision: '6 vel.',
    freno_del: 'Disco 298 mm', freno_tras: 'Disco 220 mm',
    desc: 'Motor bicilíndrico paralelo DOHC de alta revolución. Aerodinámica inspirada en la YZF-R1 de MotoGP. La puerta de entrada perfecta al mundo supersport con tecnología de competición.',
    badge: 'Más vendida', badgeColor: '',
    cuota: 'Desde S/. 470/mes'
  },
  {
    id: 2,
    marca: 'Yamaha',
    modelo: 'MT-07',
    tipo: 'naked',
    precio: 32900,
    img: 'https://img3.stcrm.it/images/6449688/HOR_STD/1000x/2017-yam-mt07-eu-bns4dsj-stu-001-03.jpg',
    cc: '689cc', hp: '73 HP', peso: '184 kg',
    tanque: '14 L', asiento: '805 mm', transmision: '6 vel.',
    freno_del: 'Disco 282 mm x2', freno_tras: 'Disco 245 mm',
    desc: 'El hyper naked definitivo de Yamaha. Motor CP2 de 689cc con par brutal desde bajas RPM y chasis Deltabox ultra rígido. Control de tracción y modos de manejo incluidos.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 905/mes'
  },
  {
    id: 3,
    marca: 'Yamaha',
    modelo: 'MT-09',
    tipo: 'naked',
    precio: 44900,
    img: 'https://www.tech2roo.com/423193-large_default/kit-deco-stickers-pyramid-bra0217-sp-colours-pour-tete-de-fourche-yamaha-mt09-sp-2024-et-.jpg',
    cc: '890cc', hp: '119 HP', peso: '193 kg',
    tanque: '14 L', asiento: '825 mm', transmision: '6 vel.',
    freno_del: 'Disco 298 mm x2', freno_tras: 'Disco 245 mm',
    desc: 'Triple cilíndrico de 890cc con carácter explosivo e inconfundible. Quickshifter, control de tracción de 3 niveles, frenos Brembo radiales y pantalla TFT a color de 5".',
    badge: 'Nuevo', badgeColor: '',
    cuota: 'Desde S/. 1,235/mes'
  },
  {
    id: 4,
    marca: 'Yamaha',
    modelo: 'Ténéré 700',
    tipo: 'adventure',
    precio: 38500,
    img: 'https://www.yamaha-motor.eu/content/dam/yme/shared/news/2025-tenere-700/2025_tenere_700_news.jpg',
    cc: '689cc', hp: '72 HP', peso: '205 kg',
    tanque: '16 L', asiento: '875 mm', transmision: '6 vel.',
    freno_del: 'Disco 282 mm x2', freno_tras: 'Disco 245 mm',
    desc: 'Aventurera pura basada en el ADN del rally. Motor CP2 de 689cc, suspensión KYB de largo recorrido (200 mm), protecciones de serie y depósito de 16 L para largas distancias.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 1,060/mes'
  },

  /* ── HONDA ──────────────────────────────────────── */
  {
    id: 5,
    marca: 'Honda',
    modelo: 'CB 300R',
    tipo: 'naked',
    precio: 14500,
    img: 'https://assets.newatlas.com/dims4/default/3b0896b/2147483647/strip/true/crop/1620x1080+0+0/resize/1620x1080!/format/webp/quality/90/?url=https:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fhonda-cb300r-3.jpg',
    cc: '286cc', hp: '31 HP', peso: '147 kg',
    tanque: '10 L', asiento: '800 mm', transmision: '6 vel.',
    freno_del: 'Disco 296 mm', freno_tras: 'Disco 220 mm',
    desc: 'Naked minimalista Neo Sports Café con motor monocilíndrico DOHC refrigerado por líquido. Chasis tubular de acero ligero, ABS de serie e iluminación full LED. Perfecta para estrenar licencia.',
    badge: 'Oferta', badgeColor: 'dorado',
    cuota: 'Desde S/. 400/mes'
  },
  {
    id: 6,
    marca: 'Honda',
    modelo: 'CBR 600RR',
    tipo: 'sport',
    precio: 48900,
    img: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2020/11/2021-Honda-CBR600RR2.jpg',
    cc: '599cc', hp: '120 HP', peso: '194 kg',
    tanque: '18.1 L', asiento: '820 mm', transmision: '6 vel.',
    freno_del: 'Disco 310 mm x2', freno_tras: 'Disco 220 mm',
    desc: 'La supersport de referencia absoluta. Motor de 4 cilindros en línea con tecnología de MotoGP, frenos Nissin radiales, chasis aluminio twin-spar y sistema PGM-FI de inyección dual.',
    badge: 'Élite', badgeColor: 'dorado',
    cuota: 'Desde S/. 1,345/mes'
  },
  {
    id: 7,
    marca: 'Honda',
    modelo: 'Africa Twin',
    tipo: 'adventure',
    precio: 52900,
    img: 'https://www.eicma.it/storage/2023/08/aa154d76ebbe42a3a8d2a25ba4b90ff0_008-honda-africa-twin-adventure-sports-2023-mat-iridium-gray-metallic-1-1-5.jpg',
    cc: '1084cc', hp: '101 HP', peso: '226 kg',
    tanque: '24.2 L', asiento: '850 mm', transmision: 'DCT / 6 vel.',
    freno_del: 'Disco 310 mm x2', freno_tras: 'Disco 256 mm',
    desc: 'La aventurera definitiva con herencia del Rally Dakar. Bicilíndrico paralelo de 1084cc, DCT opcional, suspensión Showa semi-activa, modos off-road y tanque de 24 L para cruzar el continente.',
    badge: 'Élite', badgeColor: 'dorado',
    cuota: 'Desde S/. 1,455/mes'
  },
  {
    id: 8,
    marca: 'Honda',
    modelo: 'CB 500F',
    tipo: 'naked',
    precio: 22900,
    img: 'https://thfvnext.bing.com/th/id/R.19fbfba0751527ef688c313feea4cf00?rik=luJhP0K9wStafA&pid=ImgRaw&r=0',
    cc: '471cc', hp: '47 HP', peso: '189 kg',
    tanque: '17.5 L', asiento: '790 mm', transmision: '6 vel.',
    freno_del: 'Disco 320 mm x2', freno_tras: 'Disco 240 mm',
    desc: 'La naked media gama más equilibrada del mercado. Motor bicilíndrico paralelo suave y versátil, ABS de serie, instrumentación digital y ergonomía cómoda para ciudad y carretera.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 630/mes'
  },

  /* ── KAWASAKI ────────────────────────────────────── */
  {
    id: 9,
    marca: 'Kawasaki',
    modelo: 'Ninja 400',
    tipo: 'sport',
    precio: 19800,
    img: 'https://www.totalmotorcycle.com/wp-content/uploads/2018/10/2019-Kawasaki-Ninja-400c.jpg',
    cc: '399cc', hp: '45 HP', peso: '167 kg',
    tanque: '14 L', asiento: '785 mm', transmision: '6 vel.',
    freno_del: 'Disco 310 mm', freno_tras: 'Disco 220 mm',
    desc: 'La deportiva más premiada de su segmento tres años consecutivos. Bicilíndrico parallel twin con respuesta explosiva, chasis trellis ultraligero y carenado aerodinámico de Ninja H2.',
    badge: 'Nuevo', badgeColor: '',
    cuota: 'Desde S/. 545/mes'
  },
  {
    id: 10,
    marca: 'Kawasaki',
    modelo: 'Z650',
    tipo: 'naked',
    precio: 27500,
    img: 'https://oler.com.tw/wp-content/uploads/2024/02/2024-Z650-red-3-768x768.jpg',
    cc: '649cc', hp: '68 HP', peso: '187 kg',
    tanque: '15 L', asiento: '790 mm', transmision: '6 vel.',
    freno_del: 'Disco 300 mm x2', freno_tras: 'Disco 220 mm',
    desc: 'Naked con carácter agresivo y motor bicilíndrico parallel twin de 649cc. Diseño sugomi intimidante, chasis trellis de acero, frenos petal y ABS de serie para el piloto urbano exigente.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 755/mes'
  },
  {
    id: 11,
    marca: 'Kawasaki',
    modelo: 'Z900',
    tipo: 'naked',
    precio: 38900,
    img: 'https://content2.kawasaki.com/ContentStorage/KMC/Products/9592/81ce522f-6b5e-48d0-911d-f84637353e21.jpg',
    cc: '948cc', hp: '125 HP', peso: '212 kg',
    tanque: '17 L', asiento: '795 mm', transmision: '6 vel.',
    freno_del: 'Disco 300 mm x2', freno_tras: 'Disco 250 mm',
    desc: 'El hipernaked supermoto de Kawasaki. Motor de 4 cilindros en línea de 948cc, control de tracción KTRC de 3 modos, frenos radiales Brembo M4.32 y quickshifter KQS bidireccional.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 1,070/mes'
  },
  {
    id: 12,
    marca: 'Kawasaki',
    modelo: 'Versys 650',
    tipo: 'adventure',
    precio: 29900,
    img: 'https://thfvnext.bing.com/th/id/R.0fe65c4011bdbf2c4e86461bd1ca1b50?rik=qoVZVUYpv2b0NA&riu=http%3a%2f%2fs1.cdn.autoevolution.com%2fimages%2fmoto_gallery%2fKAWASAKI-Versys-650-ABS-6812_2.jpg&ehk=ow%2fzn3XKt5Na9bjaFz1CabWt35omx5HIvxfY7ibUX%2fQ%3d&risl=&pid=ImgRaw&r=0',
    cc: '649cc', hp: '69 HP', peso: '216 kg',
    tanque: '21 L', asiento: '840 mm', transmision: '6 vel.',
    freno_del: 'Disco 300 mm x2', freno_tras: 'Disco 220 mm',
    desc: 'La tourer versátil para todo terreno. Motor parallel twin de 649cc suave y eficiente, depósito de 21 L, parabrisas ajustable, maletas laterales opcionales y suspensión de largo recorrido.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 820/mes'
  },

  /* ── BMW MOTORRAD ────────────────────────────────── */
  {
    id: 13,
    marca: 'BMW',
    modelo: 'G 310 R',
    tipo: 'naked',
    precio: 24900,
    img: 'https://tse2.mm.bing.net/th/id/OIP.7uHnyaB6GozYlTPccOWuHwHaFI?cb=thfvnextfalcon4&w=650&h=450&rs=1&pid=ImgDetMain&o=7&rm=3',
    cc: '313cc', hp: '34 HP', peso: '158 kg',
    tanque: '11 L', asiento: '785 mm', transmision: '6 vel.',
    freno_del: 'Disco 300 mm', freno_tras: 'Disco 240 mm',
    desc: 'La entrada al mundo BMW con calidad premium alemana. Motor monocilíndrico invertido DOHC refrigerado por líquido, instrumentación TFT, ABS de serie y acabados de primera categoría.',
    badge: 'Premium', badgeColor: 'dorado',
    cuota: 'Desde S/. 685/mes'
  },
  {
    id: 14,
    marca: 'BMW',
    modelo: 'F 900 R',
    tipo: 'naked',
    precio: 62900,
    img: 'https://dhqlmcogwd1an.cloudfront.net/images/phocagallery/BMW_Motorrad/f-900-r-2023/01-bmw-f-900-r-2022-estudio-azul-sport-01.jpg',
    cc: '895cc', hp: '105 HP', peso: '211 kg',
    tanque: '13 L', asiento: '815 mm', transmision: '6 vel.',
    freno_del: 'Disco 320 mm x2', freno_tras: 'Disco 265 mm',
    desc: 'Naked deportiva de altas prestaciones con motor bicilíndrico paralelo de 895cc. Modos de conducción Dynamic/Road/Rain, control de tracción DTC, ABS Pro y pantalla TFT con conectividad.',
    badge: 'Premium', badgeColor: 'dorado',
    cuota: 'Desde S/. 1,730/mes'
  },
  {
    id: 15,
    marca: 'BMW',
    modelo: 'GS 1250',
    tipo: 'adventure',
    precio: 89900,
    img: 'https://static-data2.manualslib.com/product-images/2fc/3068605/bmw-motorrad-r-1250-gs-adventure-2022.jpg',
    cc: '1254cc', hp: '136 HP', peso: '268 kg',
    tanque: '20 L', asiento: '850 mm', transmision: '6 vel.',
    freno_del: 'Disco 305 mm x2', freno_tras: 'Disco 285 mm',
    desc: 'El rey indiscutible de las aventuras. Boxer bicilindrícico de 1254cc, suspensión semi-activa Dynamic ESA, modos Enduro/Enduro Pro/Dynamic/Road/Rain, radar adaptativo y GPS integrado.',
    badge: 'Top de gama', badgeColor: 'dorado',
    cuota: 'Desde S/. 2,470/mes'
  },

  /* ── SUZUKI ──────────────────────────────────────── */
  {
    id: 16,
    marca: 'Suzuki',
    modelo: 'GSX-S750',
    tipo: 'naked',
    precio: 34500,
    img: 'https://thfvnext.bing.com/th/id/R.b79fa902a60778d1de52b4c0b527399d?rik=%2bT9hzmTnMi9RmA&riu=http%3a%2f%2fbazamoto.ru%2fimg%2fsuzuki%2fgsx-s-750%2fGSX-S-750_2017_3.jpg&ehk=bgp3qP1HnczCEaET3ROxmkkPkLw5pmuQjOoWXJaXimI%3d&risl=&pid=ImgRaw&r=0',
    cc: '749cc', hp: '105 HP', peso: '213 kg',
    tanque: '16 L', asiento: '820 mm', transmision: '6 vel.',
    freno_del: 'Disco 310 mm x2', freno_tras: 'Disco 240 mm',
    desc: 'Naked de media-alta gama con motor derivado de la legendaria GSX-R750 de competición. Traction Control a 3 niveles, frenos Brembo, chasis aluminio twin-spar y modos de manejo seleccionables.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 950/mes'
  },
  {
    id: 17,
    marca: 'Suzuki',
    modelo: 'V-Strom 650',
    tipo: 'adventure',
    precio: 31900,
    img: 'https://www.moto-data.net/media/suzuki/pics/suzuki-dl-650-v-strom-2011[2].jpg',
    cc: '645cc', hp: '71 HP', peso: '213 kg',
    tanque: '20 L', asiento: '835 mm', transmision: '6 vel.',
    freno_del: 'Disco 310 mm x2', freno_tras: 'Disco 260 mm',
    desc: 'La tourer aventurera más accesible y confiable. Motor bicilíndrico en V de 90° suave y eficiente, depósito de 20 L, ABS y control de tracción de serie. Ideal para turismo de largo aliento.',
    badge: '', badgeColor: '',
    cuota: 'Desde S/. 878/mes'
  },
  {
    id: 18,
    marca: 'Suzuki',
    modelo: 'GSX-R1000R',
    tipo: 'sport',
    precio: 78900,
    img: 'https://tse2.mm.bing.net/th/id/OIP.FsR6yopHADdv-u0GwSXrRQHaE7?cb=thfvnextfalcon4&w=2560&h=1703&rs=1&pid=ImgDetMain&o=7&rm=3',
    cc: '999cc', hp: '202 HP', peso: '203 kg',
    tanque: '16 L', asiento: '825 mm', transmision: '6 vel.',
    freno_del: 'Disco 320 mm x2', freno_tras: 'Disco 220 mm',
    desc: 'La supersport definitiva de Suzuki con tecnología MotoGP. Motor de 4 cilindros en línea de 202 HP, sistema de combustible dual injector, control de tracción STCS de 10 niveles y frenos Brembo Monobloc.',
    badge: 'Top de gama', badgeColor: 'dorado',
    cuota: 'Desde S/. 2,170/mes'
  }
];

/* ── MODO OSCURO / CLARO ────────────────────────────────────── */
function initTema() {
  var btn = document.getElementById('btn-tema');

  var temaGuardado = null;
  try { temaGuardado = localStorage.getItem('mv_tema'); } catch (e) { temaGuardado = null; }

  if (temaGuardado === 'oscuro') {
    document.body.classList.add('tema-oscuro');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      document.body.classList.toggle('tema-oscuro');
      var esOscuro = document.body.classList.contains('tema-oscuro');
      try { localStorage.setItem('mv_tema', esOscuro ? 'oscuro' : 'claro'); } catch (e) {}
    });
  }
}

/* ── NAVBAR ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var toggle = document.getElementById('menu-toggle');
  var nav    = document.querySelector('header nav');

  // Scroll efecto sombra
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Hamburguesa
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('activo');
      nav.classList.toggle('aberto');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('activo');
        nav.classList.remove('aberto');
      });
    });
  }

  // Cerrar nav al hacer click fuera
  document.addEventListener('click', function (e) {
    if (nav && nav.classList.contains('aberto') && !nav.contains(e.target) && e.target !== toggle) {
      toggle.classList.remove('activo');
      nav.classList.remove('aberto');
    }
  });

  // Inicializar todo
  initTema();
  initCarrito();
  initComparador();
  initScrollAnimations();
  initContadores();

  // Catálogo o preview
  if (document.getElementById('grid-motos')) {
    var path = window.location.pathname;
    var isIndex   = path.endsWith('index.html') || path === '/' || path.endsWith('/');
    var isDetalle = path.endsWith('detalle.html');
    if (isIndex) {
      renderPreviewHome();
    } else if (isDetalle) {
      // motos relacionadas se renderizan tras initDetalle
    } else {
      initCatalogo();
    }
  }

  // Accesorios
  if (document.getElementById('grid-accesorios')) {
    initAccesorios();
  }

  // Formulario
  var form = document.getElementById('formulario');
  if (form) {
    form.addEventListener('submit', enviarFormulario);
    initValidacionTiempoReal();
  }

  // Página de detalle
  if (document.getElementById('detalle-container')) {
    initDetalle();
  }

  // Página del comparador
  if (document.getElementById('comparador-container')) {
    renderComparador();
  }
});

/* ── DATOS DE ACCESORIOS ────────────────────────────────────── */
var ACCESORIOS = [
  {
    id: 101,
    categoria: 'Protección',
    nombre: 'Casco Integral AGV K3',
    tipo: 'casco',
    precio: 890,
    img: 'https://www.bikestop.co.uk/media/catalog/product/k/5/k5-s-marble-img1.jpg?width=1000&height=1000&canvas=1000,1000&optimize=high&bg-color=255,255,255&fit=bounds',
    desc: 'Casco integral homologado con doble ventilación, visor antirrayas y forro interior desmontable lavable.'
  },
  {
    id: 102,
    categoria: 'Protección',
    nombre: 'Guantes Racing Alpinestars',
    tipo: 'guantes',
    precio: 249,
    img: 'https://item-shopping.c.yimg.jp/i/n/bikelenet_bikele-glove-alpinestars-gp-pro-r3_3',
    desc: 'Guantes de cuero con protecciones en nudillos y palma reforzada para mayor seguridad en carretera.'
  },
  {
    id: 103,
    categoria: 'Vestimenta',
    nombre: 'Chaqueta Textil Dainese',
    tipo: 'chaqueta',
    precio: 690,
    img: 'https://i.pinimg.com/736x/3e/f1/b0/3ef1b05e7a24a71470bd81111cab6592.jpg',
    desc: 'Chaqueta impermeable con protecciones removibles en hombros y codos, ideal para todo tipo de clima.'
  },
  {
    id: 104,
    categoria: 'Vestimenta',
    nombre: 'Botas Touring TCX',
    tipo: 'botas',
    precio: 520,
    img: 'https://images.tcdn.com.br/img/img_prod/1432891/bota_tcx_lady_tourer_gtx_preto_feminino_3885_1_af2c2c30c5512b8230de662c8eea3497.jpg',
    desc: 'Botas resistentes al agua con suela antideslizante y protección de tobillo reforzada.'
  },
  {
    id: 105,
    categoria: 'Tecnología',
    nombre: 'Intercomunicador Sena 50S',
    tipo: 'intercomunicador',
    precio: 780,
    img: 'https://cdnx.jumpseller.com/isayi-motorbike/image/38284770/resize/1438/1438?1696345329',
    desc: 'Sistema de comunicación Bluetooth con Mesh Intercom, control por voz y radio FM integrada.'
  },
  {
    id: 106,
    categoria: 'Almacenamiento',
    nombre: 'Maleta Lateral Givi',
    tipo: 'maleta',
    precio: 640,
    img: 'https://tse2.mm.bing.net/th/id/OIP.FRwRMVdUPvL1IavDvgfbKwHaHa?cb=thfvnextfalcon4&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Maleta lateral de 22 litros, resistente al agua, con sistema de anclaje rápido y llave de seguridad.'
  },
  {
    id: 107,
    categoria: 'Protección',
    nombre: 'Protector de Motor R&G',
    tipo: 'protector',
    precio: 310,
    img: 'https://static1.wrs.it/1550307-thickbox_default/right-cover-clutch-and-pick-up-pro-rg-bmw-m-1000-r-rr-2021-2024.jpg',
    desc: 'Protector de carenado y motor en aluminio, diseñado para absorber impactos ante una caída.'
  },
  {
    id: 108,
    categoria: 'Seguridad',
    nombre: 'Candado de Disco Xena',
    tipo: 'candado',
    precio: 180,
    img: 'https://tse2.mm.bing.net/th/id/OIP.wa_s5IMQBHL4tG5O01nDDAHaHa?cb=thfvnextfalcon4&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Candado de disco con alarma de 120 dB y sensor de movimiento, incluye funda de transporte.'
  },
  {
    id: 109,
    categoria: 'Vestimenta',
    nombre: "Pantalón Cordura Rev'It",
    tipo: 'pantalon',
    precio: 430,
    img: 'https://tse3.mm.bing.net/th/id/OIP.7cGUt4dF-u35UjN3WMV16AHaHa?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Pantalón de tela Cordura con protecciones en rodillas y cadera, ajuste regulable con velcro.'
  },
  {
    id: 110,
    categoria: 'Tecnología',
    nombre: 'Soporte GPS RAM Mount',
    tipo: 'soporte',
    precio: 150,
    img: 'https://tse1.mm.bing.net/th/id/OIP.qoOXrXmap65kp_Bt1jEk5AHaFj?cb=thfvnextfalcon4&w=1200&h=900&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Soporte universal para GPS o celular, resistente a vibraciones, de fácil instalación en el manubrio.'
  },
  {
    id: 111,
    categoria: 'Seguridad',
    nombre: 'Alarma Antirrobo Scorpio',
    tipo: 'alarma',
    precio: 450,
    img: 'https://www.moto-segura.com/69-thickbox_default/alarma-scorpio-srx-950-2-vias-rfid-kit-con-sensor-perimetral-y-corte-de-encendido.jpg',
    desc: 'Sistema de alarma con sensor de impacto, control remoto y activación automática para mayor seguridad.'
  },
  {
    id: 112,
    categoria: 'Iluminación',
    nombre: 'Faros LED Auxiliares',
    tipo: 'luces',
    precio: 320,
    img: 'https://tse3.mm.bing.net/th/id/OIP.w4QMyHAGJpZ0AqhHwC79mAHaHa?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Juego de faros LED de alta intensidad con bajo consumo energético y excelente visibilidad nocturna.'
  },
  {
    id: 113,
    categoria: 'Equipaje',
    nombre: 'Mochila Impermeable 30L',
    tipo: 'mochila',
    precio: 260,
    img: 'https://tse2.mm.bing.net/th/id/OIP.QkVS-SfXgvjUI8vHh6i2KwHaHa?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Mochila resistente al agua con gran capacidad, ideal para viajes y trayectos largos.'
  },
  {
    id: 114,
    categoria: 'Mantenimiento',
    nombre: 'Kit de Limpieza Motul',
    tipo: 'limpieza',
    precio: 145,
    img: 'https://tse3.mm.bing.net/th/id/OIP.-LwkKvhygAwz5YaWJgfycgHaHa?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Incluye limpiador de cadena, lubricante y paño de microfibra para mantener la motocicleta en perfecto estado.'
  },
  {
    id: 115,
    categoria: 'Accesorios',
    nombre: 'Cargador USB para Manillar',
    tipo: 'cargador',
    precio: 95,
    img: 'https://tse2.mm.bing.net/th/id/OIP.g17yvqwyKfWLKRtJ0sTe4wHaHa?cb=thfvnextfalcon4&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'Puerto USB impermeable de carga rápida para alimentar celulares y GPS mientras conduces.'
  },
  {
    id: 116,
    categoria: 'Protección',
    nombre: 'Rodilleras Fox Titan',
    tipo: 'rodilleras',
    precio: 210,
    img: 'https://bikecity.com.mx/wp-content/uploads/2021/10/g6zg1te8pe8gsd6aygme.jpg',
    desc: 'Rodilleras ergonómicas con protección reforzada y ajuste mediante correas elásticas.'
  },
  {
    id: 117,
    categoria: 'Mantenimiento',
    nombre: 'Caballete Trasero Universal',
    tipo: 'caballete',
    precio: 340,
    img: 'https://emobex.com/59929-thickbox_default/caballete-trasero-honda-cb-750-hornet.jpg',
    desc: 'Caballete de acero para facilitar el mantenimiento, limpieza y lubricación de la cadena.'
  },
  {
    id: 118,
    categoria: 'Tecnología',
    nombre: 'Cámara Deportiva GoPro HERO',
    tipo: 'camara',
    precio: 1490,
    img: 'https://i5.walmartimages.cl/asr/5181c649-b54c-4874-b8de-06ceca7907a9.d8c5331c61f456689a0df829ecdf332e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
    desc: 'Cámara de acción 4K con estabilización de imagen, ideal para registrar rutas y aventuras en moto.'
  }
];

/* ── CARRITO ────────────────────────────────────────────────── */
var carrito = [];

function initCarrito() {
  // Cargar desde localStorage
  try {
    var guardado = localStorage.getItem('mv_carrito');
    if (guardado) carrito = JSON.parse(guardado);
  } catch(e) { carrito = []; }

  actualizarUICarrito();

  // Botón abrir carrito
  var btnAbrir = document.getElementById('btn-carrito');
  if (btnAbrir) btnAbrir.addEventListener('click', abrirCarrito);

  // Botón cerrar
  var btnCerrar = document.getElementById('btn-cerrar-carrito');
  if (btnCerrar) btnCerrar.addEventListener('click', cerrarCarrito);

  // Overlay
  var overlay = document.getElementById('carrito-overlay');
  if (overlay) overlay.addEventListener('click', cerrarCarrito);

  // Vaciar
  var btnVaciar = document.getElementById('btn-vaciar');
  if (btnVaciar) btnVaciar.addEventListener('click', vaciarCarrito);

  // Checkout
  var btnCk = document.getElementById('btn-checkout');
  if (btnCk) btnCk.addEventListener('click', function () {
    if (carrito.length === 0) return;
    mostrarToast('¡Gracias! Te contactaremos para coordinar tu compra.');
    vaciarCarrito();
    cerrarCarrito();
  });
}

function guardarCarrito() {
  try { localStorage.setItem('mv_carrito', JSON.stringify(carrito)); } catch(e) {}
}

function agregarAlCarrito(id) {
  var moto = MOTOS.find(function (m) { return m.id === id; });
  var item = moto
    ? { id: moto.id, marca: moto.marca, modelo: moto.modelo, precio: moto.precio, img: moto.img }
    : null;

  if (!item) {
    var accesorio = ACCESORIOS.find(function (a) { return a.id === id; });
    if (!accesorio) return;
    item = { id: accesorio.id, marca: accesorio.categoria, modelo: accesorio.nombre, precio: accesorio.precio, img: accesorio.img };
  }

  var existe = carrito.find(function (i) { return i.id === id; });
  if (existe) {
    mostrarToast(item.modelo + ' ya se encuentra en tu carrito.');
    return;
  }
  carrito.push(item);
  guardarCarrito();
  actualizarUICarrito();
  mostrarToast(item.modelo + ' añadido al carrito.');
}

function quitarDelCarrito(id) {
  carrito = carrito.filter(function (item) { return item.id !== id; });
  guardarCarrito();
  actualizarUICarrito();
  renderItemsCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarUICarrito();
  renderItemsCarrito();
}

function actualizarUICarrito() {
  var badge = document.getElementById('carrito-badge');
  if (badge) {
    badge.textContent = carrito.length;
    badge.classList.toggle('visible', carrito.length > 0);
  }
}

function renderItemsCarrito() {
  var contenedor = document.getElementById('carrito-items');
  var totalEl    = document.getElementById('carrito-total');
  if (!contenedor) return;

  if (carrito.length === 0) {
    contenedor.innerHTML = '<div class="carrito-vacio"><div class="icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><p>Tu carrito esta vacio.<br>Explora nuestro catalogo.</p></div>';
    if (totalEl) totalEl.textContent = 'S/. 0';
    return;
  }

  var total = carrito.reduce(function (acc, item) { return acc + item.precio; }, 0);
  contenedor.innerHTML = carrito.map(function (item) {
    return '<div class="carrito-item">' +
      '<img src="' + item.img + '" alt="' + item.modelo + '">' +
      '<div class="carrito-item-info">' +
        '<span class="marca-tag">' + item.marca + '</span>' +
        '<h4>' + item.modelo + '</h4>' +
        '<span class="precio-item">S/. ' + item.precio.toLocaleString('es-PE') + '</span>' +
      '</div>' +
      '<button class="btn-quitar" onclick="quitarDelCarrito(' + item.id + ')" title="Quitar">&times;</button>' +
    '</div>';
  }).join('');

  if (totalEl) totalEl.textContent = 'S/. ' + total.toLocaleString('es-PE');
}

function abrirCarrito() {
  var drawer  = document.getElementById('carrito-drawer');
  var overlay = document.getElementById('carrito-overlay');
  if (drawer)  drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  renderItemsCarrito();
  document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
  var drawer  = document.getElementById('carrito-drawer');
  var overlay = document.getElementById('carrito-overlay');
  if (drawer)  drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── COMPARADOR DE MOTOCICLETAS ─────────────────────────────── */
var MAX_COMPARADOR = 2;
var comparador = [];

function initComparador() {
  try {
    var guardado = localStorage.getItem('mv_comparador');
    if (guardado) comparador = JSON.parse(guardado);
  } catch (e) { comparador = []; }

  actualizarBotonesComparar();
}

function guardarComparador() {
  try { localStorage.setItem('mv_comparador', JSON.stringify(comparador)); } catch (e) {}
}

/* Agrega o quita una moto del comparador (maximo 2 a la vez) */
function toggleComparar(id) {
  var yaEsta = comparador.indexOf(id) !== -1;

  if (yaEsta) {
    comparador = comparador.filter(function (i) { return i !== id; });
  } else {
    if (comparador.length >= MAX_COMPARADOR) {
      mostrarToast('Solo puedes comparar hasta ' + MAX_COMPARADOR + ' motos. Quita una para agregar otra.');
      return;
    }
    comparador.push(id);
  }

  guardarComparador();
  actualizarBotonesComparar();

  if (document.getElementById('comparador-container')) {
    renderComparador();
  }
}

function quitarDeComparador(id) {
  comparador = comparador.filter(function (i) { return i !== id; });
  guardarComparador();
  actualizarBotonesComparar();
  renderComparador();
}

/* Genera el markup del boton "Comparar" para una tarjeta de moto */
function generarBotonComparar(id) {
  var activo = comparador.indexOf(id) !== -1 ? ' activo' : '';
  return '<button class="btn-comparar' + activo + '" data-comparar-id="' + id + '" onclick="toggleComparar(' + id + ')" title="Comparar">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 3v18M15 3v18M4 8h4M16 8h4M4 16h4M16 16h4"/></svg>' +
    '<span>Comparar</span>' +
  '</button>';
}

/* Sincroniza el estado visual (activo/inactivo) de todos los botones "Comparar" en pantalla */
function actualizarBotonesComparar() {
  document.querySelectorAll('[data-comparar-id]').forEach(function (btn) {
    var id = parseInt(btn.dataset.compararId, 10);
    btn.classList.toggle('activo', comparador.indexOf(id) !== -1);
  });
}

/* Renderiza la tabla comparativa en la pagina del comparador */
function renderComparador() {
  var cont = document.getElementById('comparador-container');
  if (!cont) return;

  var motos = comparador
    .map(function (id) { return MOTOS.find(function (m) { return m.id === id; }); })
    .filter(Boolean);

  if (motos.length === 0) {
    cont.innerHTML =
      '<div class="comparador-vacio">' +
        '<div class="icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3v18M15 3v18M4 8h4M16 8h4M4 16h4M16 16h4"/></svg></div>' +
        '<p>Aun no has seleccionado motos para comparar.<br>Ve al catalogo y pulsa "Comparar" en hasta 2 modelos.</p>' +
        '<a href="catalogo.html" class="boton-principal">Ir al catalogo</a>' +
      '</div>';
    return;
  }

  var aviso = motos.length < MAX_COMPARADOR
    ? '<p class="comparador-aviso">Puedes agregar ' + (MAX_COMPARADOR - motos.length) + ' moto(s) mas desde el catalogo.</p>'
    : '';

  var filaImagen = '<tr><td class="comparador-fila-label">Imagen</td>' + motos.map(function (m) {
    return '<td class="comparador-img-cell"><img src="' + m.img + '" alt="' + m.marca + ' ' + m.modelo + '"></td>';
  }).join('') + '</tr>';

  var filaMarca = '<tr class="comparador-fila-marca"><td class="comparador-fila-label">Marca</td>' + motos.map(function (m) {
    return '<td>' + m.marca + '</td>';
  }).join('') + '</tr>';

  var filaModelo = '<tr class="comparador-fila-nombre"><td class="comparador-fila-label">Modelo</td>' + motos.map(function (m) {
    return '<td>' + m.modelo + '</td>';
  }).join('') + '</tr>';

  var filaPrecio = '<tr class="comparador-fila-precio"><td class="comparador-fila-label">Precio</td>' + motos.map(function (m) {
    return '<td>S/. ' + m.precio.toLocaleString('es-PE') + '</td>';
  }).join('') + '</tr>';

  var filaCilindrada = '<tr><td class="comparador-fila-label">Cilindrada</td>' + motos.map(function (m) {
    return '<td>' + m.cc + '</td>';
  }).join('') + '</tr>';

  var filaPotencia = '<tr><td class="comparador-fila-label">Potencia</td>' + motos.map(function (m) {
    return '<td>' + m.hp + '</td>';
  }).join('') + '</tr>';

  var filaPeso = '<tr><td class="comparador-fila-label">Peso</td>' + motos.map(function (m) {
    return '<td>' + m.peso + '</td>';
  }).join('') + '</tr>';

  var filaTransmision = '<tr><td class="comparador-fila-label">Transmisión</td>' + motos.map(function (m) {
    return '<td>' + m.transmision + '</td>';
  }).join('') + '</tr>';

  var filaAcciones = '<tr><td class="comparador-fila-label"></td>' + motos.map(function (m) {
    return '<td><button class="comparador-quitar" onclick="quitarDeComparador(' + m.id + ')">Quitar</button></td>';
  }).join('') + '</tr>';

  cont.innerHTML =
    aviso +
    '<div class="comparador-tabla-contenedor reveal">' +
      '<table class="comparador-tabla">' +
        '<thead><tr><th></th>' + motos.map(function () { return '<th></th>'; }).join('') + '</tr></thead>' +
        '<tbody>' +
          filaImagen + filaMarca + filaModelo + filaPrecio +
          filaCilindrada + filaPotencia + filaPeso + filaTransmision +
          filaAcciones +
        '</tbody>' +
      '</table>' +
    '</div>';

  observarElementos();
}

/* ── TOAST ──────────────────────────────────────────────────── */
function mostrarToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, 3200);
}

/* ── PREVIEW INICIO (3 motos destacadas) ───────────────────── */
function renderPreviewHome() {
  var grid = document.getElementById('grid-motos');
  if (!grid) return;
  var preview = MOTOS.slice(0, 3);
  grid.innerHTML = preview.map(function (m) {
    var badge = m.badge ? '<span class="tarjeta-badge ' + m.badgeColor + '">' + m.badge + '</span>' : '';
    return '<div class="tarjeta-moto reveal">' +
      '<div class="tarjeta-img-wrap">' +
        '<img src="' + m.img + '" alt="' + m.marca + ' ' + m.modelo + '" loading="lazy">' +
        badge +
      '</div>' +
      '<div class="tarjeta-info">' +
        '<span class="marca">' + m.marca + '</span>' +
        '<h3>' + m.modelo + '</h3>' +
        '<p>' + m.desc + '</p>' +
        '<div class="tarjeta-specs">' +
          '<div class="spec"><span class="spec-val">' + m.cc + '</span><span class="spec-key">Motor</span></div>' +
          '<div class="spec"><span class="spec-val">' + m.hp + '</span><span class="spec-key">Potencia</span></div>' +
          '<div class="spec"><span class="spec-val">' + m.peso + '</span><span class="spec-key">Peso</span></div>' +
        '</div>' +
        '<div class="tarjeta-footer">' +
          '<div>' +
            '<div class="precio">S/. ' + m.precio.toLocaleString('es-PE') + '</div>' +
            '<span class="precio-cuota">' + m.cuota + '</span>' +
          '</div>' +
          '<div class="tarjeta-acciones">' +
            '<a href="detalle.html?id=' + m.id + '" class="btn-detalle">Ver más</a>' +
            generarBotonComparar(m.id) +
            '<button class="btn-add-carrito" onclick="agregarAlCarrito(' + m.id + ')" title="Añadir al carrito">+</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
  observarElementos();
}

/* ── CATÁLOGO: FILTROS & BUSCADOR ───────────────────────────── */
var filtroActual = 'todos';
var busquedaActual = '';

function initCatalogo() {
  renderCatalogo();

  // Filtros
  document.querySelectorAll('.filtro-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filtro-btn').forEach(function (b) { b.classList.remove('activo'); });
      btn.classList.add('activo');
      filtroActual = btn.dataset.filtro;
      renderCatalogo();
    });
  });

  // Buscador
  var buscador = document.getElementById('buscador');
  if (buscador) {
    buscador.addEventListener('input', function () {
      busquedaActual = buscador.value.toLowerCase().trim();
      renderCatalogo();
    });
  }
}

function renderCatalogo() {
  var grid = document.getElementById('grid-motos');
  if (!grid) return;

  var marcas = ['Yamaha','Honda','Kawasaki','BMW','Suzuki'];
  var esMarca = marcas.indexOf(filtroActual) !== -1;
  var motos = MOTOS.filter(function (m) {
    var pasaFiltro = filtroActual === 'todos' ||
      (esMarca ? m.marca === filtroActual : m.tipo === filtroActual);
    var pasaBusqueda = busquedaActual === '' ||
      m.marca.toLowerCase().includes(busquedaActual) ||
      m.modelo.toLowerCase().includes(busquedaActual) ||
      m.tipo.toLowerCase().includes(busquedaActual);
    return pasaFiltro && pasaBusqueda;
  });

  if (motos.length === 0) {
    grid.innerHTML = '<div class="sin-resultados"><div class="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div><p>No encontramos motos con ese criterio.<br>Prueba con otro filtro o termino.</p></div>';
    return;
  }

  grid.innerHTML = motos.map(function (m) {
    var badge = m.badge ? '<span class="tarjeta-badge ' + m.badgeColor + '">' + m.badge + '</span>' : '';
    return '<div class="tarjeta-moto reveal">' +
      '<div class="tarjeta-img-wrap">' +
        '<img src="' + m.img + '" alt="' + m.marca + ' ' + m.modelo + '" loading="lazy">' +
        badge +
      '</div>' +
      '<div class="tarjeta-info">' +
        '<span class="marca">' + m.marca + '</span>' +
        '<h3>' + m.modelo + '</h3>' +
        '<p>' + m.desc + '</p>' +
        '<div class="tarjeta-specs">' +
          '<div class="spec"><span class="spec-val">' + m.cc + '</span><span class="spec-key">Motor</span></div>' +
          '<div class="spec"><span class="spec-val">' + m.hp + '</span><span class="spec-key">Potencia</span></div>' +
          '<div class="spec"><span class="spec-val">' + m.peso + '</span><span class="spec-key">Peso</span></div>' +
        '</div>' +
        '<div class="tarjeta-footer">' +
          '<div>' +
            '<div class="precio">S/. ' + m.precio.toLocaleString('es-PE') + '</div>' +
            '<span class="precio-cuota">' + m.cuota + '</span>' +
          '</div>' +
          '<div class="tarjeta-acciones">' +
            '<a href="detalle.html?id=' + m.id + '" class="btn-detalle">Ver más</a>' +
            generarBotonComparar(m.id) +
            '<button class="btn-add-carrito" onclick="agregarAlCarrito(' + m.id + ')" title="Añadir al carrito">+</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  // Re-observar elementos nuevos
  observarElementos();
}

/* ── ACCESORIOS: FILTROS & BUSCADOR ─────────────────────────── */
var filtroAccesorioActual = 'todos';
var busquedaAccesorioActual = '';

function initAccesorios() {
  renderAccesorios();

  document.querySelectorAll('.filtro-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filtro-btn').forEach(function (b) { b.classList.remove('activo'); });
      btn.classList.add('activo');
      filtroAccesorioActual = btn.dataset.filtro;
      renderAccesorios();
    });
  });

  var buscador = document.getElementById('buscador-accesorios');
  if (buscador) {
    buscador.addEventListener('input', function () {
      busquedaAccesorioActual = buscador.value.toLowerCase().trim();
      renderAccesorios();
    });
  }
}

function renderAccesorios() {
  var grid = document.getElementById('grid-accesorios');
  if (!grid) return;

  var accesorios = ACCESORIOS.filter(function (a) {
    var pasaFiltro = filtroAccesorioActual === 'todos' || a.tipo === filtroAccesorioActual;
    var pasaBusqueda = busquedaAccesorioActual === '' ||
      a.nombre.toLowerCase().includes(busquedaAccesorioActual) ||
      a.categoria.toLowerCase().includes(busquedaAccesorioActual);
    return pasaFiltro && pasaBusqueda;
  });

  if (accesorios.length === 0) {
    grid.innerHTML = '<div class="sin-resultados"><div class="icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div><p>No encontramos accesorios con ese criterio.<br>Prueba con otro filtro o termino.</p></div>';
    return;
  }

  grid.innerHTML = accesorios.map(function (a) {
    return '<div class="tarjeta-moto reveal">' +
      '<div class="tarjeta-img-wrap">' +
        '<img src="' + a.img + '" alt="' + a.nombre + '" loading="lazy">' +
      '</div>' +
      '<div class="tarjeta-info">' +
        '<span class="marca">' + a.categoria + '</span>' +
        '<h3>' + a.nombre + '</h3>' +
        '<p>' + a.desc + '</p>' +
        '<div class="tarjeta-footer">' +
          '<div>' +
            '<div class="precio">S/. ' + a.precio.toLocaleString('es-PE') + '</div>' +
          '</div>' +
          '<div class="tarjeta-acciones">' +
            '<button class="btn-add-carrito" onclick="agregarAlCarrito(' + a.id + ')" title="Añadir al carrito">+</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  observarElementos();
}

/* ── SCROLL ANIMATIONS ──────────────────────────────────────── */
function initScrollAnimations() {
  observarElementos();
}

function observarElementos() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

/* ── CONTADORES ANIMADOS ────────────────────────────────────── */
function initContadores() {
  var contadores = document.querySelectorAll('.contador-num[data-target]');
  if (!contadores.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animarContador(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  contadores.forEach(function (el) { observer.observe(el); });
}

function animarContador(el) {
  var target  = parseInt(el.dataset.target, 10);
  var sufijo  = el.dataset.sufijo || '';
  var duracion = 1800;
  var inicio   = Date.now();

  function tick() {
    var progreso = Math.min((Date.now() - inicio) / duracion, 1);
    var ease = 1 - Math.pow(1 - progreso, 3);
    var valor = Math.floor(ease * target);
    el.innerHTML = valor.toLocaleString('es-PE') + '<span>' + sufijo + '</span>';
    if (progreso < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── PÁGINA DE DETALLE ──────────────────────────────────────── */
function initDetalle() {
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get('id'), 10);
  var moto = MOTOS.find(function (m) { return m.id === id; });

  var container = document.getElementById('detalle-container');
  if (!moto || !container) {
    container.innerHTML = '<div style="text-align:center;padding:80px 20px;color:#666;"><h2>Moto no encontrada</h2><p><a href="catalogo.html" style="color:#e31b23;">Volver al catalogo</a></p></div>';
    return;
  }

  document.title = 'MotoVélocity — ' + moto.marca + ' ' + moto.modelo;

  container.innerHTML =
    '<section class="detalle-hero">' +
      '<div class="detalle-inner contenedor">' +
        '<div class="detalle-img-wrap reveal-left">' +
          '<img src="' + moto.img + '" alt="' + moto.marca + ' ' + moto.modelo + '">' +
        '</div>' +
        '<div class="detalle-info reveal-right">' +
          '<div class="breadcrumb"><a href="index.html">Inicio</a><span>›</span><a href="catalogo.html">Catálogo</a><span>›</span>' + moto.marca + ' ' + moto.modelo + '</div>' +
          '<span class="marca-tag">' + moto.marca + '</span>' +
          '<h1>' + moto.modelo + '</h1>' +
          '<p class="desc">' + moto.desc + '</p>' +
          '<div class="detalle-precio-wrap">' +
            '<div class="detalle-precio">S/. ' + moto.precio.toLocaleString('es-PE') + '</div>' +
            '<div class="detalle-precio-cuota">' + moto.cuota + '</div>' +
          '</div>' +
          '<div class="detalle-specs-grid">' +
            '<div class="detalle-spec"><div class="detalle-spec-val">' + moto.cc + '</div><div class="detalle-spec-key">Cilindrada</div></div>' +
            '<div class="detalle-spec"><div class="detalle-spec-val">' + moto.hp + '</div><div class="detalle-spec-key">Potencia</div></div>' +
            '<div class="detalle-spec"><div class="detalle-spec-val">' + moto.peso + '</div><div class="detalle-spec-key">Peso</div></div>' +
          '</div>' +
          '<div class="detalle-acciones">' +
            '<button class="boton-principal" onclick="agregarAlCarrito(' + moto.id + ');abrirCarrito()">Anadir al carrito</button>' +
            '<a href="contacto.html" class="boton-secundario">Consultar</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<section class="ficha-tecnica">' +
      '<div class="contenedor">' +
        '<h2 class="titulo-seccion reveal">Ficha Técnica</h2>' +
        '<div class="ficha-grid reveal">' +
          '<div class="ficha-grupo">' +
            '<h4>Motor</h4>' +
            '<div class="ficha-fila"><span>Cilindrada</span><span>' + moto.cc + '</span></div>' +
            '<div class="ficha-fila"><span>Potencia máxima</span><span>' + moto.hp + '</span></div>' +
            '<div class="ficha-fila"><span>Tipo de motor</span><span>4 tiempos, DOHC</span></div>' +
            '<div class="ficha-fila"><span>Refrigeración</span><span>Líquida</span></div>' +
            '<div class="ficha-fila"><span>Transmisión</span><span>' + moto.transmision + '</span></div>' +
          '</div>' +
          '<div class="ficha-grupo">' +
            '<h4>Dimensiones y frenos</h4>' +
            '<div class="ficha-fila"><span>Peso</span><span>' + moto.peso + '</span></div>' +
            '<div class="ficha-fila"><span>Capacidad tanque</span><span>' + moto.tanque + '</span></div>' +
            '<div class="ficha-fila"><span>Altura de asiento</span><span>' + moto.asiento + '</span></div>' +
            '<div class="ficha-fila"><span>Freno delantero</span><span>' + moto.freno_del + '</span></div>' +
            '<div class="ficha-fila"><span>Freno trasero</span><span>' + moto.freno_tras + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  // Motos relacionadas (excluyendo la actual)
  var gridRelacionadas = document.getElementById('grid-motos');
  if (gridRelacionadas) {
    var relacionadas = MOTOS.filter(function(m){ return m.id !== id; }).slice(0,3);
    gridRelacionadas.innerHTML = relacionadas.map(function (m) {
      var badge = m.badge ? '<span class="tarjeta-badge ' + m.badgeColor + '">' + m.badge + '</span>' : '';
      return '<div class="tarjeta-moto reveal">' +
        '<div class="tarjeta-img-wrap">' +
          '<img src="' + m.img + '" alt="' + m.marca + ' ' + m.modelo + '" loading="lazy">' +
          badge +
        '</div>' +
        '<div class="tarjeta-info">' +
          '<span class="marca">' + m.marca + '</span>' +
          '<h3>' + m.modelo + '</h3>' +
          '<p>' + m.desc + '</p>' +
          '<div class="tarjeta-specs">' +
            '<div class="spec"><span class="spec-val">' + m.cc + '</span><span class="spec-key">Motor</span></div>' +
            '<div class="spec"><span class="spec-val">' + m.hp + '</span><span class="spec-key">Potencia</span></div>' +
            '<div class="spec"><span class="spec-val">' + m.peso + '</span><span class="spec-key">Peso</span></div>' +
          '</div>' +
          '<div class="tarjeta-footer">' +
            '<div>' +
              '<div class="precio">S/. ' + m.precio.toLocaleString('es-PE') + '</div>' +
              '<span class="precio-cuota">' + m.cuota + '</span>' +
            '</div>' +
            '<div class="tarjeta-acciones">' +
              '<a href="detalle.html?id=' + m.id + '" class="btn-detalle">Ver más</a>' +
              generarBotonComparar(m.id) +
              '<button class="btn-add-carrito" onclick="agregarAlCarrito(' + m.id + ')" title="Añadir al carrito">+</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  observarElementos();
}

/* ── FORMULARIO CONTACTO ────────────────────────────────────── */

/* Muestra o limpia el mensaje de error de un campo */
function setError(id, msg) {
  var campo = document.getElementById(id);
  if (!campo) return;
  var parent = campo.closest('.campo') || campo.parentElement;
  var err = parent.querySelector('.campo-error');
  if (msg) {
    campo.classList.add('campo-invalido');
    if (!err) {
      err = document.createElement('span');
      err.className = 'campo-error';
      parent.appendChild(err);
    }
    err.textContent = msg;
  } else {
    campo.classList.remove('campo-invalido');
    if (err) err.remove();
  }
}

/* Validacion en tiempo real al salir del campo */
function initValidacionTiempoReal() {
  var camposTexto = document.querySelectorAll('#nombre, #email, #telefono, #mensaje');
  camposTexto.forEach(function (campo) {
    campo.addEventListener('blur', function () {
      validarCampo(campo.id);
    });
    campo.addEventListener('input', function () {
      if (campo.classList.contains('campo-invalido')) {
        validarCampo(campo.id);
      }
    });
  });
}

function validarCampo(id) {
  var campo = document.getElementById(id);
  if (!campo) return true;
  var valor = campo.value.trim();

  if (id === 'nombre') {
    if (!valor) { setError(id, 'El nombre es obligatorio.'); return false; }
    if (valor.length < 3) { setError(id, 'El nombre debe tener al menos 3 caracteres.'); return false; }
    if (valor.length > 80) { setError(id, 'El nombre no puede superar los 80 caracteres.'); return false; }
  }

  if (id === 'email') {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!valor) { setError(id, 'El correo electronico es obligatorio.'); return false; }
    if (!regexEmail.test(valor)) { setError(id, 'Ingresa un correo electronico valido (ej: nombre@dominio.com).'); return false; }
  }

  if (id === 'telefono' && valor) {
    var regexTel = /^[+]?[\d\s\-().]{7,20}$/;
    if (!regexTel.test(valor)) { setError(id, 'Ingresa un numero de telefono valido.'); return false; }
  }

  if (id === 'mensaje' && valor && valor.length < 10) {
    setError(id, 'El mensaje debe tener al menos 10 caracteres.'); return false;
  }

  setError(id, '');
  return true;
}

function enviarFormulario(evento) {
  evento.preventDefault();

  /* Validar todos los campos antes de enviar */
  var camposValidos = [
    validarCampo('nombre'),
    validarCampo('email'),
    validarCampo('telefono'),
    validarCampo('mensaje')
  ];

  var nombre   = document.getElementById('nombre').value.trim();
  var email    = document.getElementById('email').value.trim();
  var terminos = document.getElementById('terminos') ? document.getElementById('terminos').checked : true;

  if (camposValidos.indexOf(false) !== -1) {
    mostrarToast('Revisa los campos marcados en rojo antes de continuar.');
    return;
  }

  if (!nombre || !email) {
    mostrarToast('Por favor, completa tu nombre y correo electronico.');
    return;
  }

  if (!terminos) {
    mostrarToast('Debes aceptar los terminos y condiciones para continuar.');
    return;
  }

  var exito = document.getElementById('mensaje-exito');
  if (exito) exito.style.display = 'block';
  evento.target.reset();
  /* Limpiar estados de error tras envio exitoso */
  document.querySelectorAll('.campo-invalido').forEach(function(el){ el.classList.remove('campo-invalido'); });
  document.querySelectorAll('.campo-error').forEach(function(el){ el.remove(); });
  mostrarToast('Mensaje enviado correctamente. Te contactaremos pronto.');
}
