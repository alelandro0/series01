document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".box-container-1");
  const btnModal = document.querySelector("#btn-modal");
  const modalVideo = document.getElementById("modal-video");
  const videoContainer = document.querySelector(".video-container");
  const video = document.getElementById('video')

  const videoLinks = [
    'trailer.mp4',
    'trailer1.mp4',
    'trailer2.mp4',
    'trailer3.mp4',
    'trailer4.mp4',
    'trailer5.mp4',
    'trailer6.mp4'
  ];

  container.addEventListener("click", (event) => {
    const clickedImage = event.target.closest(".movie-poster");
    if (clickedImage) {
      btnModal.checked = true;
      const randomVideoLink = getRandomElement(videoLinks);
      loadLocalVideo(randomVideoLink);
      video.src = randomVideoLink;
      video.play();
      videoContainer.style.display = "block";
    }
  });

  // Añade un listener al documento para cerrar el modal al presionar la tecla 'Esc'
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVideo();
    }
  });

  // Añade evento al botón de cerrar dentro del modal
  const btnCerrarModal = document.querySelector(".btn-cerrar label");
  btnCerrarModal.addEventListener("click", () => {
    closeVideo();
  });

  function closeVideo() {
    btnModal.checked = false;
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = "none";
  }

  function loadLocalVideo(videoLink) {
    modalVideo.style.display = "none"; // Oculta el reproductor de YouTube
    modalVideo.src = ""; // Limpia la fuente del reproductor de YouTube
    video.style.display = "block"; // Muestra el reproductor de video local
  }

  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
});
