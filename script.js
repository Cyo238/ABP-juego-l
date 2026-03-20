// Lista de URLs de las imágenes
const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJwzkhM1Idniel3U1_WY_qCX50fbqDBa5zw&s',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Desembarco_de_Col%C3%B3n_de_Di%C3%B3scoro_Puebla.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b5/Monumento_a_Col%C3%B3n_Paseo_de_la_Reforma_Ciudad_de_M%C3%A9xico.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1xwUDwQnDtPAGrvNdTBvEfJGm9CFoMMBTA&s',
    'https://www.cervantesvirtual.com/images/banners_portales/open_graph/expulsion-y-exilio-de-los-jesuitas-de-los-dominios-de-carlos-iii-0.jpg',
    'https://i.pinimg.com/736x/8c/b4/d8/8cb4d8b061601bee0515f884d073d3db.jpg',
    'https://luiscavibotsample.s3-sa-east-1.amazonaws.com/assets/universidad/linea+de+tiempo/modal/21_Sanfernado_unmsm_1920.webp',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Biblioteca_central_de_la_UNAM.jpg/330px-Biblioteca_central_de_la_UNAM.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Retrato_de_Juan_Pareja%2C_by_Diego_Vel%C3%A1zquez.jpg/330px-Retrato_de_Juan_Pareja%2C_by_Diego_Vel%C3%A1zquez.jpg',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mestizo._Mestiza._Mestiza.jpg/250px-Mestizo._Mestiza._Mestiza.jpg',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCYKxOO65tdlHouibScs9rW8zdZ6EhB0KXw&s',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfb5OIe9e1Q5IFiaGToX4dG2cdslE9RtPDDA&s',
     'https://cdn-3.expansion.mx/dims4/default/d3e0b08/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F82%2Ffb%2Fc50f3a264906932cd72d87d7073f%2Fistock-598086670.jpg',
     '',
     '',
     '',
    // Agrega más URLs según necesites
];

// Función para cargar las imágenes en el contenedor
function loadImages() {
    const container = document.getElementById('image-container');

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Descripción de la imagen'; // Cambia según tu necesidad
        container.appendChild(img);
    });
}

// Llama a la función al cargar la página
window.onload = loadImages;
