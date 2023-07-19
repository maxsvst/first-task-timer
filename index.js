const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    const startTime = new Date();
    const inputTime = new Date(seconds * 1000);

    const timer = setInterval(
      (startTime, inputTime) => {
        const currentTime = new Date();
        const elapsedTime = new Date(currentTime - startTime);

        timerEl.innerHTML = elapsedTime
          .toLocaleTimeString("ru", { timeZone: "UTC" })
          .split(" ")[0];
        if (inputTime - elapsedTime <= 0) clearInterval(timer);
      },
      100,
      startTime,
      inputTime
    );
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  return parseFloat(e.target.value) || 0;
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
