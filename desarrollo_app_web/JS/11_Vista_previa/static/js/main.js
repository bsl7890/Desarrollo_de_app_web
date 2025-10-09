// Reproduce el video pequeño al pasar el mouse
function playVideo(videoElement) {
    videoElement.play();
}

// Pausa el video pequeño cuando quitas el mouse
function pauseVideo(videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0; // vuelve al inicio como miniatura
}

// Cambia el video principal y el título al hacer click
function cambioVideo(videoElement) {
    const mainVideo = document.getElementById('main-video');
    const mainSource = mainVideo.querySelector('source');
    const titleElement = document.getElementById('texto');

    // Cambiar la fuente del video principal
    mainSource.src = videoElement.src;
    mainVideo.load();
    mainVideo.play();

    // Buscar el título pequeño (es el siguiente hermano <span> del video)
    const smallTitle = videoElement.nextElementSibling;
    if (smallTitle && smallTitle.classList.contains('video-title')) {
        titleElement.textContent = smallTitle.textContent;
    }
}
// Reproduce el video principal al cargar la página
window.onload = function() {
    const mainVideo = document.getElementById('main-video');
    mainVideo.play();
};
