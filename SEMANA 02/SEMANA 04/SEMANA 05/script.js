// Referencias al DOM
const gallery = document.getElementById('gallery');
const addImageBtn = document.getElementById('add-image');
const removeImageBtn = document.getElementById('remove-image');
const imageUrlInput = document.getElementById('image-url');

let selectedImage = null;

// Función para agregar imagen
addImageBtn.addEventListener('click', () => {
    const url = imageUrlInput.value.trim();
    if (url) {
        const img = document.createElement('img');
        img.src = url;

        // Evento para seleccionar imagen
        img.addEventListener('click', () => {
            // Deseleccionar cualquier otra imagen
            if (selectedImage) {
                selectedImage.classList.remove('selected');
            }
            selectedImage = img;
            img.classList.add('selected');
        });

        gallery.appendChild(img);
        imageUrlInput.value = '';
    } else {
        alert('Por favor ingresa una URL válida.');
    }
});

// Función para eliminar imagen seleccionada
removeImageBtn.addEventListener('click', () => {
    if (selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    } else {
        alert('No hay ninguna imagen seleccionada.');
    }
});

// Opcional: permitir agregar imagen presionando Enter
imageUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addImageBtn.click();
    }
});
