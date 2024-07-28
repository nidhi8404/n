AOS.init();

let currentPhotoIndex = 0;

function openPhotoModal(images) {
  const modal = document.getElementById("photo-modal");
  const carousel = document.querySelector(".photo-carousel");
  carousel.innerHTML = ""; // Clear existing images
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Project Photo";
    carousel.appendChild(img);
  });
  currentPhotoIndex = 0; // Reset the index
  showPhoto(currentPhotoIndex);
  modal.style.display = "flex";
}

function closePhotoModal() {
  document.getElementById("photo-modal").style.display = "none";
}

function openVideoModal(videoSrc) {
  const modal = document.getElementById("video-modal");
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.src = videoSrc;
  modal.style.display = "flex";
}

function closeVideoModal() {
  document.getElementById("video-modal").style.display = "none";
  document.getElementById("video-player").src = ""; // Stop the video
}

function showPhoto(index) {
  const images = document.querySelectorAll(".photo-carousel img");
  if (images.length > 0) {
    images.forEach((img, i) => {
      img.style.transform = `translateX(-${index * 100}%)`;
    });
  }
}

function prevPhoto() {
  const images = document.querySelectorAll(".photo-carousel img");
  if (images.length > 0) {
    currentPhotoIndex =
      currentPhotoIndex > 0 ? currentPhotoIndex - 1 : images.length - 1;
    showPhoto(currentPhotoIndex);
  }
}

function nextPhoto() {
  const images = document.querySelectorAll(".photo-carousel img");
  if (images.length > 0) {
    currentPhotoIndex =
      currentPhotoIndex < images.length - 1 ? currentPhotoIndex + 1 : 0;
    showPhoto(currentPhotoIndex);
  }
}
