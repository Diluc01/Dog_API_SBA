export function addSlide(imgSrc, imgId) {
  const carouselItem = $("<div>");
  carouselItem.addClass("carousel-item");
  carouselItem.css("background-image", `url(${imgSrc})`);
  carouselItem.data("imgId", imgId);

  const carousel = $(".carousel-inner");
  carousel.append(carouselItem);
}

export function startCarousel() {
  $(".carousel-item").first().addClass("active");
}
