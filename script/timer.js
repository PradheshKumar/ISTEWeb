const dayBox = document.getElementById("day");
const hourBox = document.getElementById("hour");
const minuteBox = document.getElementById("minute");
const secondBox = document.getElementById("second");

function updateClock() {
  const now = new Date();
  const timeDiff = now.getTime() - new Date("2023-04-29T00:00:00Z").getTime();
  const days = Math.floor(-timeDiff / (1000 * 60 * 60 * 24));
  const hours = 24 - now.getHours().toString().padStart(2, "0");
  const minutes = 60 - now.getMinutes().toString().padStart(2, "0");
  const seconds = 60 - now.getSeconds().toString().padStart(2, "0");
  dayBox.textContent = days;
  hourBox.textContent = hours;
  minuteBox.textContent = minutes;
  secondBox.textContent = seconds;
}

setInterval(updateClock, 1000);
