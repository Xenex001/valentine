const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

// Make "No" button run away when hovered
noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

// "Yes" button click
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
