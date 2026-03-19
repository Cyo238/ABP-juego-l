// Lista de URLs de las imágenes
const imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Landing_of_Columbus_by_John_Vanderlyn.jpg/800px-Landing_of_Columbus_by_John_Vanderlyn.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Christoper_Columbus_statue_in_Central_Park.jpg/600px-Christoper_Columbus_statue_in_Central_Park.jpg',
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
