function makeTime() {
  var date = new Date();
  var hour = date.getHours();
  if (hour > 12) {
    hour -= 12;
  }

  var min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }

  var sec = date.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }
  var time = hour + ":" + min + ":" + sec;
  document.getElementById("timer").innerHTML = time;
}

setInterval(makeTime, 1000);


