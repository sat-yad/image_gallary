const cards = document.querySelectorAll(".Card");

document.addEventListener("DOMContentLoaded", function () {
  const leftNavLinks = document.querySelectorAll(".left-navbar a");

  leftNavLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".container");
//   const navbar = document.querySelector(".left-navbar");

//   container.addEventListener("scroll", function () {
//     const scrollPos = this.scrollLeft;
//     navbar.style.left = `${scrollPos}px`;
//   });
// });

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
