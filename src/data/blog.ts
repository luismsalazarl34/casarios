export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "el-origen-del-cafe-de-especialidad",
    title: "El Origen del Café de Especialidad",
    excerpt:
      "¿Qué diferencia a un café de especialidad de uno comercial? Todo comienza en el origen, con la altitud, el suelo y las manos que lo cosechan.",
    content: `
## ¿Qué hace especial a un café?

El café de especialidad no es un marketing vacío — es una clasificación técnica. Para llevar ese nombre, un lote debe alcanzar 80 puntos o más en la escala de la Specialty Coffee Association (SCA), evaluado por catadores certificados llamados Q-Graders.

Pero detrás del puntaje hay algo más profundo: **la trazabilidad**. Sabemos exactamente en qué finca creció, a qué altitud, bajo qué sombra, cuándo fue cosechado y cómo fue procesado.

## El papel de la altitud

A mayor altitud, el grano madura más lentamente. Esa maduración lenta concentra azúcares y desarrolla perfiles aromáticos complejos que no encontrarás en granos cultivados al nivel del mar.

Los mejores orígenes del mundo — Yirgacheffe en Etiopía, Huila en Colombia, las laderas del Kilimanjaro — comparten una cosa: alturas entre 1,500 y 2,200 metros sobre el nivel del mar.

## El productor, el eslabón más importante

En Casa Rios trabajamos directamente con productores. Eso significa que el precio que pagan por su cosecha está por encima del mercado convencional — no como caridad, sino como reconocimiento al trabajo extraordinario que representa cultivar café de calidad.

Cuando bebes una taza de nuestro Etiopía Yirgacheffe, estás conectado a una cadena de cuidado que comienza con manos que seleccionan cereza por cereza.
    `,
    date: "2026-06-15",
    readTime: "5 min",
    category: "Origen",
    image: "/assets/blog/origen-cafe.jpg",
    author: "Casa Rios",
  },
  {
    slug: "metodos-de-extraccion-guia",
    title: "Métodos de Extracción: Guía Esencial",
    excerpt:
      "Pour over, prensa francesa, espresso. Cada método extrae diferente. Aquí la guía para elegir el que mejor exprese tu café.",
    content: `
## El agua y el café: una conversación

La extracción es una conversación entre el agua y el café molido. La temperatura, el tiempo de contacto, la molienda y la presión determinan qué compuestos se disuelven en tu taza.

## Pour Over / V60

El más preciso y el favorito en cafeterías de especialidad. El agua fluye por gravedad, controlando el tiempo de contacto con la molienda.

**Ideal para:** Perfiles florales y frutales. Perfectos para nuestro Etiopía y Kenya.
**Ratio:** 60g de café por litro de agua. Temperatura: 92-94°C.

## Prensa Francesa

Inmersión total. El café queda en contacto con el agua durante 4 minutos. Produce una taza de cuerpo completo y textura oleosa.

**Ideal para:** Chocolates, nueces, caramelos. Perfecto para nuestro Guatemala.
**Ratio:** 55g por litro. Temperatura: 93-95°C. Tiempo: 4 minutos exactos.

## Espresso

Alta presión (9 bares) extrae en 25-30 segundos. Concentrado, intenso, la base de lattes y cappuccinos.

**Ideal para:** Colombia Huila. La acidez brillante se transforma con la presión.

## La regla de oro

No hay método "mejor". Hay método apropiado para cada café. Empieza con el perfil de notas del café y trabaja hacia atrás para elegir la extracción.
    `,
    date: "2026-05-28",
    readTime: "7 min",
    category: "Preparación",
    image: "/assets/blog/metodos-extraccion.jpg",
    author: "Casa Rios",
  },
  {
    slug: "como-almacenar-tu-cafe",
    title: "Cómo Almacenar Tu Café Correctamente",
    excerpt:
      "El café es perecedero. Los cuatro enemigos — luz, aire, humedad y calor — destruyen lo que el tostador construyó. Aquí cómo protegerlo.",
    content: `
## El café envejece

Un café recién tostado está vivo. Libera CO₂ durante días, los aceites evolucionan y los compuestos aromáticos se transforman. Esa ventana de frescura — entre 7 y 30 días después del tostado — es donde vive el mejor sabor.

## Los cuatro enemigos

**Luz:** La radiación UV degrada los compuestos aromáticos. Nunca en frascos de vidrio transparente.

**Aire:** El oxígeno oxida los aceites del café, produciendo sabores rancios. El sellado hermético es esencial.

**Humedad:** El café es higroscópico — absorbe humedad del ambiente y con ella bacterias. Lejos del fregadero y zonas húmedas.

**Calor:** Las reacciones químicas de degradación se aceleran con la temperatura. No encima del horno ni junto a ventanas soleadas.

## La solución correcta

Recipiente opaco, hermético, a temperatura ambiente. Un buen contenedor de cerámica con válvula unidireccional (para liberar CO₂ sin dejar entrar oxígeno) es la opción ideal.

**¿Congelador?** Solo si vas a guardar más de un mes. Divídelo en porciones, congela en sellado hermético y nunca recongelar una vez abierto.

## Molido vs Grano Entero

Siempre entero, siempre. El molido expone una superficie 40 veces mayor al aire. Muele solo lo que vas a preparar.
    `,
    date: "2026-05-10",
    readTime: "4 min",
    category: "Consejos",
    image: "/assets/blog/almacenar-cafe.jpg",
    author: "Casa Rios",
  },
];
