// SELECTORI
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const body = document.body;

// Culori background pentru fiecare card (opțional)
const bgColors = [
  "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
];

let current = 0;

// FUNCTIA PRINCIPALA PENTRU SCHIMBAREA CARDULUI
function showCard(index, direction = "right") {
  const currentCard = cards[current];
  const nextCard = cards[index];

  // eliminam toate clasele de animatie
  cards.forEach((card) =>
    card.classList.remove(
      "active",
      "slide-out-left",
      "slide-in-right",
      "slide-out-right",
      "slide-in-left"
    )
  );

  // animatie iesire
  if (direction === "right") currentCard.classList.add("slide-out-left");
  else currentCard.classList.add("slide-out-right");

  // activeaza cardul urmator
  nextCard.classList.add("active");

  // animatie intrare
  setTimeout(() => {
    nextCard.classList.add(
      direction === "right" ? "slide-in-right" : "slide-in-left"
    );
  }, 50);

  // schimbare background
  if (bgColors[index]) body.style.background = bgColors[index];

  current = index;
}

// BUTOANE
prevBtn.addEventListener("click", () => {
  const newIndex = (current - 1 + cards.length) % cards.length;
  showCard(newIndex, "left");
});

nextBtn.addEventListener("click", () => {
  const newIndex = (current + 1) % cards.length;
  showCard(newIndex, "right");
});

//animatie tipare scris titlu
const title = document.querySelector(".mainTitle");
const text = "UNITBV STUDENTS";
title.textContent = "";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();
