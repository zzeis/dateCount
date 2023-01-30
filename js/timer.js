/* Calculating the difference between the current date and a special date. */
window.onload = function () {
  const now = new Date(); // current date

  const specialDay = new Date("2022-03-09"); //special date

  const countDiff = Math.abs(now.getTime() - specialDay.getTime());

  const days = Math.ceil(countDiff / (1000 * 60 * 60 * 24));

  var years = 0,
    currentY = now.getFullYear(),
    specialY = specialDay.getFullYear(),
    currentM = now.getMonth() + 1,
    specialM = specialDay.getMonth() + 1;

  if (currentM === specialM) {
    years = currentY - specialY;
  }

  var months =
    (now.getFullYear() - specialDay.getFullYear()) * 12 +
    (now.getMonth() - specialDay.getMonth());

  document.querySelector("#days").innerHTML = "Dias: " + days;

  document.querySelector("#months").innerHTML = "Meses: " + months;

  document.querySelector("#years").innerHTML = "Anos: " + years;

  console.log(months);
};
