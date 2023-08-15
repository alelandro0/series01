document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".box-container-1");
  const btnModal = document.querySelector("#btn-modal");
  const modalVideo = document.getElementById("modal-video");
  const videoContainer = document.querySelector(".video-container");
  const titleElement = document.querySelector(".content-modal h2");
  const infoElements = document.querySelectorAll(".info p");
  const descriptionElement = document.querySelector(".description");
  
  const listaReproducion = [
    { src: '/trailer.mp4', title: 'EL HOYO', duration: '1 h 30 min', synopsis: 'Una pricion donde los pricioneros pele por comer para sobrevivir' },
    { src: '/trailer1.mp4', title: 'CAMINOS SIN FRONTERAS', duration: '2 h 10 min', synopsis: 'Sinopsis del Video 2' },
    { src: '/trailer2.mp4', title: 'DETRAS DEL ULTIMO NO AHI OTRO', duration: '1 h 45 min', synopsis: 'Sinopsis del Video 3' },
    { src: '/trailer3.mp4', title: 'VITALITY', duration: '1 h 15 min', synopsis: 'Sinopsis del Video 3' },
    { src: '/trailer5.mp4', title: 'MUNDO PERDIDO', duration: '1 h 40 min', synopsis: 'Sinopsis del Video 3' },
    { src: '/trailer6.mp4', title: 'EN LA ESQUINA DEL ROMPOY', duration: '2 h 10 min', synopsis: 'Sinopsis del Video 3' },
    // Agrega más objetos de video aquí
  ];
  let currentVideoIndex = 0;

  container.addEventListener("click", (event) => {
    const clickedImage = event.target.closest(".movie-poster");
    if (clickedImage) {
      btnModal.checked = true;
      modalVideo.src = listaReproducion[currentVideoIndex].src;
      modalVideo.play();
      videoContainer.style.display = "block";

      // Mostrar información del video actual
      titleElement.textContent = listaReproducion[currentVideoIndex].title;
      infoElements[0].textContent = listaReproducion[currentVideoIndex].duration;
      // Puedes agregar más información aquí si es necesario
      descriptionElement.textContent = listaReproducion[currentVideoIndex].synopsis;

      currentVideoIndex = (currentVideoIndex + 1) % listaReproducion.length;
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
    modalVideo.pause();
    modalVideo.currentTime = 0;
    videoContainer.style.display = "none";
  }
});


