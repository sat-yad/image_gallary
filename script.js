const cards = document.querySelectorAll(".Card");

const showCardImage = (card) => {
  const images = card.querySelectorAll(".galleryImage");
  const figcaptions = card.querySelectorAll("figcaption");
  let currentIndex = 0;

  const showImage = (index) => {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
        figcaptions[i].style.display = "block";
      } else {
        image.style.display = "none";
        figcaptions[i].style.display = "none";
      }
    });
  };

  showImage(currentIndex);
  card.addEventListener("click", () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
  });
};

cards.forEach((card) => {
  showCardImage(card);
});
