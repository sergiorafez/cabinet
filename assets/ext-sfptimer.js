function calculateRemainingTime() {
  var targetDate = new Date("2024-06-13T00:00:00");
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  if (timeDifference < 0) {
    document.getElementById("result").innerHTML = "<i>This project has already expired. Further information in this page.</i>";
    return;
  }

  // quick yet for november 24th
  if (currentDate < new Date("2023-11-24T00:00:00")) {
    document.getElementById("result").innerHTML = "<i>This project hasn't started yet, come back later!</i>";
    return;
  }

  var remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // HTML Result
  document.getElementById("result").innerHTML = "<i>Project expires in: " +
    remainingDays + " days, " +
    remainingHours + " hours, " +
    remainingMinutes + " minutes.</i>";
}

window.onload = calculateRemainingTime;
