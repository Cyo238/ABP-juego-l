// Lista de URLs de las imágenes
const imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Spanish_Empire_%28c.1580%29.png/1280px-Spanish_Empire_%28c.1580%29.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Landing_of_Columbus_by_John_Vanderlyn.jpg/800px-Landing_of_Columbus_by_John_Vanderlyn.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Christoper_Columbus_statue_in_Central_Park.jpg/600px-Christoper_Columbus_statue_in_Central_Park.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Charles_III_of_Spain_by_Anton_Raphael_Mengs.jpg/600px-Charles_III_of_Spain_by_Anton_Raphael_Mengs.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Expulsi%C3%B3n_de_los_jesuitas.jpg/600px-Expulsi%C3%B3n_de_los_jesuitas.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Intendencias_Nueva_Espa%C3%B1a.svg/600px-Intendencias_Nueva_Espa%C3%B1a.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Universidad_de_San_Marcos_Lima.jpg/800px-Universidad_de_San_Marcos_Lima.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/UNAM_Ciudad_Universitaria.jpg/800px-UNAM_Ciudad_Universitaria.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/De_espa%C3%B1ol_y_negra_nace_mulata.jpg/600px-De_espa%C3%B1ol_y_negra_nace_mulata.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/De_espa%C3%B1ol_e_india_sale_mestizo.jpg/600px-De_espa%C3%B1ol_e_india_sale_mestizo.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/De_mulato_y_espa%C3%B1ola_sale_morisco.jpg/600px-De_mulato_y_espa%C3%B1ola_sale_morisco.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/La_Virgen_de_Guadalupe_%28original%29.jpg/600px-La_Virgen_de_Guadalupe_%28original%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/D%C3%ADa_de_Muertos_en_M%C3%A9xico.jpg/600px-D%C3%ADa_de_Muertos_en_M%C3%A9xico.jpg',
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
