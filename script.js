
const noButton = document.getElementById("no-button");

noButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});

const yesButton = document.getElementById("yes-button");

yesButton.addEventListener("click", () => {
  var confettiElement = document.getElementById("confetti-canvas");
  var confettiSettings = {
    target: confettiElement,
    max: 729,
    size: 1,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
    rotate: true,
    start_from_edge: true,
    respawn: true,
  };

  yesButton.style.display = "none";
  noButton.style.display = "none";

  var gif = document.getElementById("gif");
  var header = document.getElementById("main");
  header.style.display = "none";
  gif.style.display = "none";

  confettiElement.style.position = "absolute";
  confettiElement.style.top = "0";
  confettiElement.style.left = "0";
  confettiElement.style.width = "100%";
  confettiElement.style.height = "100%";
  confettiElement.style.zIndex = "1000";

  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  let thankYouMessage = document.createElement("div");
  thankYouMessage.innerHTML = `
    <p style="font-size: 2rem; font-weight: bold; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      Thank You! 😊 <br>
      You just made my day! 🎉
    </p>
  `;
  document.body.appendChild(thankYouMessage);
});
