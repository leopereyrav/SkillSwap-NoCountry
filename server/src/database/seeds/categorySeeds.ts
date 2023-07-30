import 'dotenv/config';

export const getCategories = () => {
  return [
    {
      name: 'idiomas',
      description:
        'Espacio donde puedes aprender o enseñar diferentes idiomas. Practicar, conversar con personas que persiguen el mismo objetivo. Recibir y compartir tips y materiales que promuevan el aprendizaje colaborativo.',
    },
    {
      name: 'tecnología',
      description:
        'Espacio donde puedes aprender y enseñar programación, base de datos, uso de herramientas informáticas, seguridad y mucho más.',
    },
    {
      name: 'cocina',
      description:
        'Si te gusta o apasiona la cocina, acá podrás encontrar y compartir diferentes técnicas de cocina, materiales, consejos, recetas y más.',
    },
    {
      name: 'yoga',
      description:
        'El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general.',
    },
    {
      name: 'música',
      description:
        'Espacio donde puedes aprender o enseñar a dominar diferentes instrumentos musicales, leer partituras, canto y más.',
    },
    {
      name: 'artes plásticas',
      description: 'Pintura, escultura, dibujo, cerámica, orfebrería, artesanía...',
    },
    {
      name: 'jardinería',
      description: 'Aprende y comparte prácticas y técnicas para cultivar en espacios abiertos o cerrados.',
    },
  ];
};
