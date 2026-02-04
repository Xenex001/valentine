const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

// Detect if device is mobile
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 480;

if (isMobile) {
  // Mobile: clicking "No" makes "Yes" grow
  let scale = 1; // initial size
  noButton.addEventListener("click", () => {
    scale += 0.2; // increase size
    yesButton.style.transform = `scale(${scale})`;
    yesButton.style.transition = "transform 0.3s"; // smooth growth
  });

  // Remove any desktop hover behavior on Mobile
  noButton.onmouseover = null;
} else {
  // Desktop: "No" button runs away
  noButton.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// "Yes" button click for all devices
yesButton.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      flex-direction:column;
      background:#ffebf0;
      font-family:Arial;
      text-align:center;
    ">
      <h1 style="color:#e6005c;">YAYYYY 💕🥰</h1>
      <img src="https://media.tenor.com/UFLqRF9t2rwAAAAi/peach-goma-peach-and-goma.gif" style="width:80%; max-width:400px; height:auto;">
    </div>
  `;
});
