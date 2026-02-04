const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 480;

if (!isMobile) {
  noButton.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  });
} else {
  let scale = 1;
  noButton.addEventListener("click", () => {
    scale += 0.2;
    yesButton.style.transform = `scale(${scale})`;
    yesButton.style.transition = "transform 0.3s";
  });
}

// "Yes" button click
yesButton.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="celebration-container">
      <h1 class="yay-text">Spanky Time 💕🥰</h1>
      <div class="gif-heart-wrapper">
        <img src="https://media.tenor.com/UFLqRF9t2rwAAAAi/peach-goma-peach-and-goma.gif" class="yay-gif">
        <div class="heart-circle">
          <span class="heart" data-action="start-question">💖</span>
          <span class="heart">💘</span>
          <span class="heart">💕</span>
          <span class="heart">💗</span>
          <span class="heart">💓</span>
        </div>
      </div>
    </div>
  `;

  // Heart click to start questionnaire
  document.querySelectorAll(".heart[data-action='start-question']").forEach(h => {
    h.addEventListener("click", startQuestionnaire);
  });
});

// Questionnaire data with text only
const questions = [
  {
    question: "Was für blumen willst du für den Valentinstag?",
    choices: [
      { text: "Blumentstrauß" },
      { text: "Topfblument" }
    ]
  },
  {
    question: "Wie soll unser essen aussehen?",
    choices: [
      { text: "Restaurant" },
      { text: "Kochen" }
    ]
  }
];

let currentQuestion = 0;

function startQuestionnaire() {
  showQuestion(currentQuestion);
}

function showQuestion(index) {
  if (index >= questions.length) {
    document.body.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;background:#ffebf0;text-align:center;">
        <h1 style="color:#e6005c;">Ich liebe dich über alles! Für Immer!! 💖</h1>
      </div>
    `;
    return;
  }

  const q = questions[index];
  document.body.innerHTML = `
    <div class="question-container">
      <h2>${q.question}</h2>
      <div class="choices">
        ${q.choices.map(c => `
          <div class="choice">
            <p>${c.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll(".choice").forEach((el, i) => {
    el.addEventListener("click", () => {
      currentQuestion++;
      showQuestion(currentQuestion);
    });
  });
}
