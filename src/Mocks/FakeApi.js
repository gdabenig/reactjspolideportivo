export const productos = [
  {
      id: 1,
      title: 'Samsung galaxy S10',
      price: 65000,
      stock: 4,

      image: 'https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp',
      category: 'samsung',
      description:
                'Con un diseño de vanguardia, el Samsung S10 es un teléfono único que ofrece una pantalla AMOLED con una resolución Quad HD+ (3040 x 1440 píxeles) sin Notch ni distracciones. Además, cuenta con lector de huellas en pantalla y un sistema multicámara increíble.',
  },
  {
      id: 2,
      title: 'Samsung galaxy S20',
      price: 128000,
      stock: 10,

      image: 'https://images.samsung.com/my/smartphones/galaxy-s20/images/galaxy-s20-share-image.jpg',
      category: 'samsung',
      description:
          'Un smartphone que te da lo que querés para que puedas hacer más de lo que disfrutás, ese es el Galaxy S20 FE.',
  },
  {
      id: 3,
      title: 'Iphone 11',
      price: 265000,
      stock: 4,

      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021766023',
      category: 'iphone',
      description:
          'El iPhone 11 tiene un sistema de dos cámaras de 12MP con ultra gran angular, con modo Noche, modo Retrato y video 4K de hasta 60 cps. La cámara frontal True Depth de 12MP con modo Retrato, video 4K y vídeo en cámara lenta.',
  },
  {
      id: 4,
      title: 'Ihpone 12',
      price: 298000,
      stock: 4,

      image: 'https://www.mylshop.com.ar/wp-content/uploads/2022/03/apple-iphone-12-128gb-verde.jpg',
      category: 'iphone',
      description:
          'Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529.',
  },

  {
      id: 5,
      title: 'Motorola one vision',
      price: 67000,
      stock: 20,

      image: 'https://http2.mlstatic.com/D_NQ_NP_667419-MLA31651956517_082019-O.webp',
      category: 'motorola',
      description:
          'El Motorola One Vision es el nuevo miembro de la serie One de Motorola. Con una pantalla Full HD+ de 6.3 pulgadas con un agujero para cámara frontal, el Motorola One Vision está potenciado por un procesador Samsung Exynos 9609 de ocho núcleos acompañado de 4GB de memoria RAM y 128GB de almacenamiento interno expandible. La cámara principal del One Vision es dual, de 48 MP + 5 MP, mientras que su cámara para selfies es de 25 MP.Como parte del programa Android One, el Motorola One Vision corre Android 9.0 Pie y recibirá actualizaciones de Android directamente de Google.',
  },
  {
      id: 6,
      title: 'Motorola One Fusion Plus',
      price: 55000,
      stock: 5,

      image: 'https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70008437.jpg',
      category: 'motorola',
      description:
          '5G habilitado: el OnePlus Nord N20 es el teléfono 5G de nivel básico perfecto, con especificaciones premium y un precio asequible. *5G compatible con T-mobile, Google Fi, Mint Mobile, Metro by TMO, Simple Mobile. 5G disponible en áreas seleccionadas.',
  },
  {
    id: 7,
    title: 'Samsung Galaxy Z3 Flit3 5G',
    price: 314000,
    stock: 3,

    image: 'https://m.media-amazon.com/images/I/416fm1ITV6L._AC_SX425_.jpg',
    category: 'samsung',
    description:
        'Sin dudas el Samsung Galaxy Z Flip3 es ideal para quienes buscan innovación, tecnología de punta y durabilidad en un mismo dispositivo. En su nueva versión además de ajustarse a cualquier bolsillo, está disponible en una gama de colores brillantes para que elijas el ideal para vos .',
},
{
    id: 8,
    title: 'Samsung Galaxy S21 FE 5G',
    price: 167000,
    stock: 6,

    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFj2NbQwxxyLWwiaL_gl-TaAb2a19K71nejexSyW6tTtfSvqHjevf_a4MUOR8GGW13ek&usqp=CAU',
    category: 'samsung',
    description:
        ' El Galaxy S21 Fan Edition 128GB tiene todo lo que te gusta en 6,4 pulgadas, un tamaño diseñado para conectarte con amigos, explorar nuevas pasiones, realizar una transmisión en vivo y disfrutar durante horas de tus programas favoritos.',
},
{
    id: 9,
    title: 'Motorola Edge 20 Pro',
    price: 97000,
    stock: 9,

    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-T_h0Wyg4agZwuYGHUAdI88S5C_fQ09N9g&usqp=CAU',
    category: 'motorola',
    description:
        'Su procesador Qualcomm Snapdragon de 870, hace del Motorola Edge 20 Pro un smartphone ultra potente, perfecto para realizar múltiples tareas a la vez. Además, incluye la Plataforma Ready For, para que conectes el equipo con la TV o con tu computadora y disfrutes de tus apps favoritas en una pantalla más grande. ',
},
];

export const getProds = (categoryId) => {
  return new Promise((resolve, reject) => {
      const productosFiltrados = productos.filter(
          (prod) => prod.category === categoryId
      );
      setTimeout(() => {
          categoryId ? resolve(productosFiltrados) : resolve(productos);
      }, 1000);
  });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
      const productoEncontrado = productos.find(
          (prod) => prod.id === Number(id)
      );
      setTimeout(() => {
          resolve(productoEncontrado);
      }, 1000);
  });
};

  

    

  