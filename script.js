const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

// Detect if device is mobile
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 480;

// Desktop behavior: "No" button runs away
if (!isMobile) {
  noButton.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100; // random shift
    const y = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  });
} else {
  // Mobile behavior: "Yes" button grows bigger each tap
  let scale = 1; // initial size
  noButton.addEventListener("click", () => {
    scale += 0.2; // increase size
    yesButton.style.transform = `scale(${scale})`;
  });
}

// "Yes" button click - same for all devices
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
      <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" style="max-width:300px;">
    </div>
  `;
});
