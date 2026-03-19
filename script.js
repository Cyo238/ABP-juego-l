// Lista de URLs de las imágenes
const imageUrls = [
    // Sección 1
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Landing_of_Columbus_by_John_Vanderlyn.jpg/800px-Landing_of_Columbus_by_John_Vanderlyn.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Christoper_Columbus_statue_in_Central_Park.jpg/600px-Christoper_Columbus_statue_in_Central_Park.jpg',

    // Sección 2
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Charles_III_of_Spain_by_Anton_Raphael_Mengs.jpg/600px-Charles_III_of_Spain_by_Anton_Raphael_Mengs.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Expulsi%C3%B3n_de_los_jesuitas.jpg/600px-Expulsi%C3%B3n_de_los_jesuitas.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Viceroyalty_of_New_Spain_map.png', // arreglada

    // Sección 3
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Universidad_de_San_Marcos_Lima.jpg/800px-Universidad_de_San_Marcos_Lima.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/CU_UNAM.jpg', // arreglada

    // Sección 4
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/De_espa%C3%B1ol_y_negra_nace_mulata.jpg/600px-De_espa%C3%B1ol_y_negra_nace_mulata.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/De_espa%C3%B1ol_e_india_sale_mestizo.jpg/600px-De_espa%C3%B1ol_e_india_sale_mestizo.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/De_mulato_y_espa%C3%B1ola_sale_morisco.jpg/600px-De_mulato_y_espa%C3%B1ola_sale_morisco.jpg',

    // Sección 5
    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Virgen_de_Guadalupe.jpg', // arreglada
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Dia_de_los_Muertos_Ofrenda.jpg' // arreglada
];

// Función para cargar las imágenes en el contenedor
function loadImages() {
    const container = document.getElementById('image-container');

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagen histórica';
        img.classList.add('img-fluid'); // opcional si usas Bootstrap
        container.appendChild(img);
    });
}

// Llama a la función al cargar la página
window.onload = loadImages;
