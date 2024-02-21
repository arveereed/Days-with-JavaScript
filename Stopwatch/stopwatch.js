let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
  // if timer NOT EQUAL to NULL
  if (timer != null) {
    clearInterval(timer);
  }

  // if timer is equal to NULL
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = `00:00:00`;
}

document.querySelector(".js-start-button").addEventListener("click", () => {
  watchStart();
});

document.querySelector(".js-stop-button").addEventListener("click", () => {
  watchStop();
});

document.querySelector(".js-reset-button").addEventListener("click", () => {
  watchReset();
});
