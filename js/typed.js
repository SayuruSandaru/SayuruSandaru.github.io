const typeText = "Bathiya & Santhush.";
const textElement = document.querySelector(".typedText");

let currentIndex = 0;

function type() {
  if (currentIndex < typeText.length) {
    textElement.textContent += typeText[currentIndex];
    currentIndex++;
    setTimeout(type, 100);
  }
}

type();
