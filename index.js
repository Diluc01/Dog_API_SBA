import { addSlide, startCarousel } from "./carousel.js";
import { favouriteDog, getDogs } from "./dogs.js";

async function start() {
  const dogs = await getDogs();
  console.log(dogs);
  for (const i in dogs) {
    const dog = dogs[i];
    console.log(i);
    addSlide(dog.url, dog.id);
  }
  startCarousel();

  $(".favourite").on("click", favourite);
}

async function favourite() {
  const imgId = $(".active").data("imgId");
  favouriteDog(imgId);
}

start();
