document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".Card");

  function scrollToCard(cardId) {
    var card = document.getElementById(cardId);
    if (card) {
      var container = document.querySelector(".Gallery");
      var cardRect = card.getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();
      var scrollY =
        cardRect.top -
        containerRect.top -
        (container.clientHeight - cardRect.height) / 2;
      container.scrollTo({ top: scrollY, behavior: "smooth" });
    }
  }

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

  document.addEventListener("DOMContentLoaded", function () {
    const leftNavLinks = document.querySelectorAll(".left-navbar a");

    leftNavLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const container = document.querySelector(".container");
          const scrollTo = targetElement.offsetTop - container.offsetTop;
          container.scrollTop = scrollTo;
        }
      });
    });
  });
  const searchInput = document.querySelector('input[name="search"]');
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();

    cards.forEach((card) => {
      const cardId = card.id.toLowerCase();
      const cardTitle = card
        .querySelector("figcaption")
        .textContent.toLowerCase();

      if (cardId.includes(searchTerm) || cardTitle.includes(searchTerm)) {
        card.style.display = "block";
        scrollToCard(card.id);
      } else {
        card.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const sidebar = document.getElementById("sidebar");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });
});
