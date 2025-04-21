const devTips = [
    "A single tip can spark a better habit. 💭",
  "Every good dev was once a beginner. Keep going. 🚀",
  "You’re not stuck. You’re learning. One line at a time. ⏳",
  "Clean code isn’t just beautiful — it’s kind to your future self. 🧹",
  "Consistency beats intensity. Even in coding. 💪",
  "It’s okay to Google it. That’s part of the job. 🔍",
  "Read code like you read books. That’s how you grow. 📘",
  "One tip a day — one step closer to mastery. 📈",
  "Remember: code is meant to be read by humans, not machines. 👀",
  "The best devs aren’t the fastest — they’re the most thoughtful. 🧠"
  ];
  
  const tipText = document.getElementById("tipText");
  
  function showDailyTip() {
    const today = new Date();
    const index = today.getDate() % devTips.length;
    showTipWithFade(devTips[index]);
  }
  
  function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * devTips.length);
    showTipWithFade(devTips[randomIndex]);
  }
  
  function showTipWithFade(tip) {
    tipText.classList.remove("opacity-100");
    tipText.classList.add("opacity-0");
    setTimeout(() => {
      tipText.textContent = tip;
      tipText.classList.remove("opacity-0");
      tipText.classList.add("opacity-100");
    }, 200);
  }
  
  showDailyTip();

  function showTipWithFade(tip) {
    tipText.classList.remove("opacity-100", "translate-y-0");
    tipText.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => {
      tipText.textContent = tip;
      tipText.classList.remove("opacity-0", "translate-y-2");
      tipText.classList.add("opacity-100", "translate-y-0");
    }, 200);
  }
  

  