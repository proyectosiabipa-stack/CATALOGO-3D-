/* =====================================================================
   CATÁLOGO BIPA · DATOS DE PRODUCTOS
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que editar para actualizar el catálogo.

   Cada producto tiene:
     id            identificador único, sin espacios ni tildes (se usa en el enlace)
     nombre        nombre visible
     categoria     uno de los id de "categorias"
     descripcion   texto corto
     pesoUnidad    (opcional) peso de una unidad, ej. "150 g"
     pesoNombre    (opcional) cómo se llama ese peso en la ficha, ej. "Peso paquete"
     modelo        cómo se dibuja en 3D:
                     tipo: cirio | votiva | paquete5 | bolsa | bandeja | velon | paquito | novenario |
                           liturgica | cumple | incienso | varillas | aromatica | gel
                     alto / diametro en centímetros (reales, se muestran con regla)
                     etiqueta (opcional): foto de la etiqueta real desenrollada
                       { src: "texturas/velon-1.webp", alto: cm, centro: cm desde la base }
                       etiqueta: false = vela sin etiqueta (por ejemplo el Paquito)
                     tope: "plano" para cirios de tope liso (los velones llevan anillos)
                     faja / tarjeta / costado / tapa: fotos del empaque real (carpeta texturas)
                     etiquetas / ceras: etiqueta (foto desenrollada) y color de cera de cada aroma
                     costados / tapas: costado o tapa de cada aroma, { "Chutney de arándano": "texturas/....webp" }
                     bolsa: foto de la bolsa enderezada { src, ancho: cm, alto: cm }
                     cajas: foto de la caja de cada aroma, { "Sándalo": "texturas/....webp" }
                     escala: false  para no mostrar la regla (ej. empaques)
                     aprox: true  si las medidas son estimadas (se muestran con ≈)
     presentaciones  lista de empaques: empaque, contenido, peso, precio
                     precio: número (ej. 12.5) o null para "Consultar"
     colores       (opcional) colores disponibles; el primero es el de inicio
     aromas        (opcional) aromas disponibles
     destacados    (opcional) sellos cortos que se muestran como etiquetas
     nota          (opcional) texto resaltado
     foto / fotos  (opcional) fotos reales de referencia; por ahora la ficha no las muestra
     glb           (opcional) ruta a un modelo 3D .glb, ej. "modelos/vela-aa.glb"
                   si existe, se muestra en lugar del modelo dibujado
   ===================================================================== */

window.CATALOGO = {
  empresa: {
    nombre: "BIPA",
    lema: "Buenas ideas puestas en acción",
    // Sin uso por ahora: el botón de WhatsApp envía solo la imagen de la ficha y el vendedor elige el contacto.
    whatsapp: "",
    moneda: "$",
    web: "www.productosbipa.com",
    instagram: "productosbipa",
    origen: "Valera, Trujillo · Venezuela"
  },

  categorias: [
    { id: "velas", nombre: "Velas religiosas" },
    { id: "velones", nombre: "Velones religiosos" },
    { id: "cirios", nombre: "Cirios y litúrgicas" },
    { id: "cumple", nombre: "Cumpleaños" },
    { id: "aromas", nombre: "Aromas y hogar" }
  ],

  productos: [
    {
      id: "vela-aa-18",
      nombre: "Vela AA 18 cm",
      categoria: "velas",
      descripcion: "Vela religiosa clásica de 18 cm, la más alta de la línea de velas.",
      modelo: { tipo: "cirio", alto: 18, diametro: 1.9 },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Caja", contenido: "80 unidades", peso: "3,2 kg", precio: null },
        { empaque: "Paquete", contenido: "40 unidades", peso: "1,6 kg", precio: null }
      ]
    },
    {
      id: "vela-160",
      nombre: "Vela tipo 160 o velación",
      categoria: "velas",
      descripcion: "Vela corta de velación, práctica para altares y velorios.",
      modelo: { tipo: "cirio", alto: 8, diametro: 1.6 },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Caja", contenido: "80 unidades", peso: "1,6 kg", precio: null },
        { empaque: "Paquete", contenido: "40 unidades", peso: "800 g", precio: null }
      ]
    },
    {
      id: "vela-80",
      nombre: "Vela tipo 80",
      categoria: "velas",
      descripcion: "Vela delgada de 13,5 cm para uso diario.",
      modelo: { tipo: "cirio", alto: 13.5, diametro: 1.3 },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Caja", contenido: "80 unidades", peso: "2,4 kg", precio: null },
        { empaque: "Paquete", contenido: "40 unidades", peso: "1,2 kg", precio: null }
      ]
    },
    {
      id: "lamparita-super",
      nombre: "Vela lamparita súper",
      categoria: "velas",
      descripcion: "Vela votiva compacta de 4,5 cm, se vende por caja de 150.",
      foto: "fotos/lamparita-super.jpg",
      modelo: { tipo: "votiva", alto: 4.5, diametro: 3.5 },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      presentaciones: [
        { empaque: "Caja", contenido: "150 unidades", peso: "4,5 kg", precio: null }
      ]
    },
    {
      id: "vela-80-pack-5",
      nombre: "Velas de oración",
      categoria: "velas",
      descripcion: "La vela tipo 80 en bolsa de 5 unidades \"Velas de oración · La fe une\": baja emisión de humo, extra duración y especial para la oración.",
      pesoUnidad: "200 g",
      pesoNombre: "Peso paquete",
      foto: "fotos/velas-oracion.jpg",
      modelo: { tipo: "bolsa", alto: 13.5, diametro: 1.3, bolsa: { src: "texturas/velas-oracion.webp", ancho: 8.6, alto: 17.4 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo", "Especial para la oración"],
      nota: "Ideal para supermercado o minimarket",
      presentaciones: [
        { empaque: "Caja", contenido: "32 paquetes", peso: "5,76 kg", precio: null },
        { empaque: "Caja", contenido: "16 paquetes", peso: "2,8 kg", precio: null },
        { empaque: "Caja", contenido: "8 paquetes", peso: "1,4 kg", precio: null }
      ]
    },
    {
      id: "lamparitas-semanarios",
      nombre: "Velas lamparitas semanarios",
      categoria: "velas",
      descripcion: "Paquete de 8 lamparitas de cúpula en espiral, en su caja \"Para la fe\" envuelta en plástico, en un solo color o en colores mixtos.",
      foto: "fotos/lamparitas-semanarios.jpg",
      fotos: [
        { src: "fotos/semanarios-colores.jpg", color: "Colores mixtos" },
        { src: "fotos/semanarios-colores-arriba.jpg", color: "Colores mixtos" },
        { src: "fotos/semanarios-blancos.jpg", color: "Blanco" },
        { src: "fotos/semanarios-blancos-arriba.jpg", color: "Blanco" }
      ],
      modelo: { tipo: "bandeja", faja: "texturas/semanarios-faja.webp", interior: "texturas/semanarios-faja-interior.webp", lado: "texturas/semanarios-lado.webp" },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado", "Colores mixtos"],
      destacados: ["8 lamparitas por paquete", "Extra duración"],
      presentaciones: [
        { empaque: "Caja", contenido: "40 paquetes", peso: "", precio: null },
        { empaque: "Caja", contenido: "20 paquetes", peso: "", precio: null }
      ]
    },
    {
      id: "lamparitas-novenario",
      nombre: "Lamparitas novenario",
      categoria: "velas",
      descripcion: "Paquete de 9 lamparitas para novenarios.",
      foto: "fotos/lamparitas-novenario.jpg",
      modelo: { tipo: "novenario", escala: false, etiqueta: { src: "texturas/lamparitas-novenario.webp", ancho: 5.73, alto: 5.4, centro: 6.25 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Paquete", contenido: "9 unidades", peso: "", precio: null }
      ]
    },
    {
      id: "velon-1",
      nombre: "Velón #1",
      categoria: "velones",
      descripcion: "El velón más compacto de la línea, en siete colores.",
      pesoUnidad: "150 g",
      foto: "fotos/velon-1.jpg",
      modelo: { tipo: "velon", alto: 7.5, diametro: 5.6, etiqueta: { src: "texturas/velon-1.webp", alto: 4.98, centro: 3.58 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Caja", contenido: "18 unidades", peso: "2,790 kg", precio: null }
      ]
    },
    {
      id: "velon-4",
      nombre: "Velón #4",
      categoria: "velones",
      descripcion: "Velón mediano de 12,5 cm con la etiqueta de San José Gregorio Hernández, en siete colores.",
      pesoUnidad: "280 g",
      foto: "fotos/velon-4.jpg",
      modelo: { tipo: "velon", alto: 12.5, diametro: 5.6, etiqueta: { src: "texturas/velon-4.webp", alto: 8.87, centro: 5.29 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Caja", contenido: "18 unidades", peso: "4,910 kg", precio: null }
      ]
    },
    {
      id: "velon-5",
      nombre: "Velón #5",
      categoria: "velones",
      descripcion: "Velón de 16,5 cm con la etiqueta BIPA Extra duración, en siete colores.",
      pesoUnidad: "387 g",
      modelo: { tipo: "velon", alto: 16.5, diametro: 5.6, etiqueta: { src: "texturas/velon-5.webp", alto: 6.2, centro: 10.5 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Caja", contenido: "18 unidades", peso: "6,390 kg", precio: null }
      ]
    },
    {
      id: "velon-7",
      nombre: "Velón #7",
      categoria: "velones",
      descripcion: "Velón alto con la etiqueta de San José Gregorio Hernández, en siete colores.",
      pesoUnidad: "450 g",
      foto: "fotos/velon-7.jpg",
      modelo: { tipo: "velon", alto: 20, diametro: 5.6, aprox: true, etiqueta: { src: "texturas/velon-7.webp", alto: 7.5, centro: 11 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Extra duración", "Baja emisión de humo"],
      presentaciones: [
        { empaque: "Unidad", contenido: "1 velón", peso: "450 g", precio: null }
      ]
    },
    {
      id: "paquito",
      nombre: "Paquito",
      categoria: "velones",
      descripcion: "Velón pequeño de 11 cm de largo y 3,5 cm de diámetro, sin etiqueta, en siete colores.",
      foto: "fotos/paquito.jpg",
      modelo: { tipo: "velon", alto: 11, diametro: 3.5, etiqueta: false },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"]
    },
    {
      id: "velon-paquito-3",
      nombre: "Velón Paquito 3 unidades",
      categoria: "velones",
      descripcion: "Tres velones de 12 cm en un solo paquete, en siete colores.",
      foto: "fotos/velon-paquito-3.jpg",
      modelo: { tipo: "paquito", alto: 12, etiqueta: { src: "texturas/velon-paquito-3.webp", ancho: 4.89, alto: 6.77, centro: 5.16 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      presentaciones: [
        { empaque: "Caja", contenido: "40 unidades", peso: "3,8 kg", precio: null }
      ]
    },
    {
      id: "velas-liturgicas",
      nombre: "Velas litúrgicas",
      categoria: "cirios",
      descripcion: "Vela litúrgica de 35 cm, se presenta en pares unidos con etiqueta dorada. Siete colores, para iglesias y celebraciones.",
      pesoUnidad: "325 g",
      pesoNombre: "Peso del par",
      foto: "fotos/velas-liturgicas.jpg",
      modelo: { tipo: "liturgica", alto: 35, diametro: 2.9, etiqueta: { src: "texturas/liturgicas-etiqueta.webp", ancho: 5.2, alto: 9.55, centro: 21.5 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["Baja emisión de humo"],
      presentaciones: [
        { empaque: "Paquete", contenido: "10 unidades", peso: "1,6 kg", precio: null }
      ]
    },
    {
      id: "cirio-1",
      nombre: "Cirio Nº1",
      categoria: "cirios",
      descripcion: "Cirio alto y esbelto con etiqueta dorada.",
      pesoUnidad: "545 g",
      foto: "fotos/cirio-1.jpg",
      modelo: { tipo: "velon", tope: "plano", alto: 25, diametro: 5.5, aprox: true, etiqueta: { src: "texturas/cirio-1.webp", alto: 11.7, centro: 13.8 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      presentaciones: [
        { empaque: "Unidad", contenido: "1 cirio", peso: "545 g", precio: null }
      ]
    },
    {
      id: "cirio-2",
      nombre: "Cirio Nº2",
      categoria: "cirios",
      descripcion: "Cirio grueso de gran duración con etiqueta dorada.",
      pesoUnidad: "1750 g",
      foto: "fotos/cirio-2.jpg",
      modelo: { tipo: "velon", tope: "plano", alto: 26, diametro: 9.6, aprox: true, etiqueta: { src: "texturas/cirio-2.webp", alto: 12.5, centro: 12.8 } },
      colores: ["Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      presentaciones: [
        { empaque: "Unidad", contenido: "1 cirio", peso: "1750 g", precio: null }
      ]
    },
    {
      id: "cumpleanos-12",
      nombre: "Velas de cumpleaños 12 cm",
      categoria: "cumple",
      descripcion: "Paquete de 12 velas de cumpleaños de 12 cm, en colores mixtos o en un solo color.",
      foto: "fotos/cumpleanos-12.jpg",
      modelo: { tipo: "cumple", alto: 12, escala: false, tarjeta: "texturas/cumple-12.webp" },
      colores: ["Colores mixtos", "Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["12 velas por paquete"],
      presentaciones: [
        { empaque: "Display", contenido: "24 unidades", peso: "", precio: null }
      ]
    },
    {
      id: "cumpleanos-7",
      nombre: "Velas de cumpleaños 7 cm",
      categoria: "cumple",
      descripcion: "Paquete de 12 velas de cumpleaños de 7 cm, en colores mixtos o en un solo color.",
      foto: "fotos/cumpleanos-7.jpg",
      modelo: { tipo: "cumple", alto: 7, escala: false, tarjeta: "texturas/cumple-7.webp" },
      colores: ["Colores mixtos", "Blanco", "Amarillo", "Azul", "Rojo", "Verde", "Morado", "Rosado"],
      destacados: ["12 velas por paquete"],
      presentaciones: [
        { empaque: "Display", contenido: "24 unidades", peso: "", precio: null }
      ]
    },
    {
      id: "inciensos",
      nombre: "Inciensos aromáticos",
      categoria: "aromas",
      descripcion: "Lo mejor para ambientar tus espacios favoritos.",
      foto: "fotos/inciensos.jpg",
      modelo: { tipo: "incienso", cajas: {
        "Manzana y canela": "texturas/incienso-manzana-canela.webp",
        "Arándanos": "texturas/incienso-arandano.webp",
        "Sándalo": "texturas/incienso-sandalo.webp",
        "Vainilla y jazmín": "texturas/incienso-vainilla-jazmin.webp"
      } },
      destacados: ["14 varitas por caja", "30 min cada varita"],
      aromas: ["Manzana y canela", "Coco y limón", "Arándanos", "Sándalo", "Vainilla y jazmín"],
      presentaciones: [
        { empaque: "Display", contenido: "24 unidades por aroma o mixtos", peso: "", precio: null }
      ]
    },
    {
      id: "varillas-repelentes",
      nombre: "Varillas repelentes de mosquitos",
      categoria: "aromas",
      descripcion: "Una barrera natural contra los mosquitos con un agradable aroma.",
      foto: "fotos/varillas-repelentes.jpg",
      fotos: [
        { src: "fotos/varillas-cherry.jpg", aroma: "Cherry" },
        { src: "fotos/varillas-coco.jpg", aroma: "Coco" },
        { src: "fotos/varillas-citronela.jpg", aroma: "Citronela" }
      ],
      modelo: { tipo: "varillas", cajas: {
        "Cherry": "texturas/varillas-cherry.webp",
        "Canela": "texturas/varillas-canela.webp",
        "Citronela": "texturas/varillas-citronela.webp",
        "Coco": "texturas/varillas-coco.webp"
      } },
      destacados: ["Contra insectos voladores", "14 varillas por caja", "30 min cada varilla"],
      aromas: ["Cherry", "Canela", "Citronela", "Coco"],
      presentaciones: [
        { empaque: "Display", contenido: "24 unidades", peso: "", precio: null }
      ]
    },
    {
      id: "velas-aromaticas",
      nombre: "Velas aromáticas",
      categoria: "aromas",
      descripcion: "Muy buenas para ambientar y decorar tus espacios favoritos.",
      foto: "fotos/velas-aromaticas.jpg",
      modelo: { tipo: "aromatica", altos: ["Vainilla y canela"],
        etiquetas: {
        "Blueberry": "texturas/aromatica-blueberry.webp",
        "Citronela y limón": "texturas/aromatica-citronela-limon.webp",
        "Piña colada": "texturas/aromatica-pina-colada.webp",
        "Vainilla y canela": "texturas/aromatica-vainilla-canela.webp",
        "Canela": "texturas/aromatica-canela.webp",
        "Palmera": "texturas/aromatica-palmera.webp",
        "Coco": "texturas/aromatica-coco.webp",
        "Dulce popurrí": "texturas/aromatica-dulce-popurri.webp",
        "Fresa silvestre": "texturas/aromatica-fresa-silvestre.webp",
        "La Frut": "texturas/aromatica-la-frut.webp",
        "Mandarina": "texturas/aromatica-mandarina.webp",
        "Manzana y canela": "texturas/aromatica-manzana-canela.webp",
        "Mar Caribe": "texturas/aromatica-mar-caribe.webp",
        "Cherry": "texturas/aromatica-cherry.webp"
        },
        ceras: { "Blueberry": "#1f4f93", "Citronela y limón": "#8dbb2c", "Piña colada": "#e8cf3c", "Vainilla y canela": "#f3efe4", "Canela": "#4a3329", "Palmera": "#2f97b0", "Coco": "#efe6d2", "Dulce popurrí": "#f07a68", "Fresa silvestre": "#b3262f", "La Frut": "#6e5a86", "Mandarina": "#e0603e", "Manzana y canela": "#9a2834", "Mar Caribe": "#2b8d9e", "Cherry": "#7d1f33" } },
      destacados: ["Aroma intenso"],
      aromas: ["Blueberry", "Citronela y limón", "Piña colada", "Vainilla y canela", "Canela", "Palmera", "Coco", "Dulce popurrí", "Fresa silvestre", "La Frut", "Mandarina", "Manzana y canela", "Mar Caribe", "Cherry"],
      presentaciones: [
        { empaque: "Vela", contenido: "Con tapa metálica", peso: "", precio: null },
        { empaque: "Vela", contenido: "Tradicional", peso: "", precio: null }
      ]
    },
    {
      id: "gel-ambientador",
      nombre: "Gel ambientador",
      categoria: "aromas",
      descripcion: "Ideal para perfumar el automóvil, baños y espacios pequeños.",
      pesoUnidad: "70 g",
      foto: "fotos/gel-ambientador.jpg",
      fotos: [{ src: "fotos/gel-arandano.jpg", aroma: "Chutney de arándano" }],
      modelo: { tipo: "gel", costado: "texturas/gel-costado.webp", tapa: "texturas/gel-tapa.webp",
        costados: {
          "Chutney de arándano": "texturas/gel-arandano-costado.webp",
          "Mango y mandarina": "texturas/gel-mango-costado.webp",
          "Manzana y canela": "texturas/gel-manzana-costado.webp",
          "Piña colada": "texturas/gel-pina-costado.webp"
        },
        tapas: {
          "Chutney de arándano": "texturas/gel-arandano-tapa.webp",
          "Mango y mandarina": "texturas/gel-mango-tapa.webp",
          "Manzana y canela": "texturas/gel-manzana-tapa.webp",
          "Piña colada": "texturas/gel-pina-tapa.webp"
        } },
      aromas: ["Mar Caribe", "Chutney de arándano", "Mango y mandarina", "Manzana y canela", "Piña colada"],
      destacados: ["Hasta 30 días"],
      presentaciones: [
        { empaque: "Unidad", contenido: "Pote de gel ambientador", peso: "70 g", precio: null }
      ]
    }
  ]
};
