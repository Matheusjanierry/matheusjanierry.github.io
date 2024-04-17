document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel img");
  const totalImages = images.length;

  setInterval(() => {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = "inline-block";
  }, 3000); // Troca de imagem a cada 3 segundos
});