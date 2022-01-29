// Set the date program will be counting down to
var countDownDate = new Date("Jan 31, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  //loop
  var i;
  var timeArray = document.querySelectorAll('.timeleft');

  //testcode (a day = 86400000 , an year = 31536000000)
  //var test = new Date("Sep 19, 2022 00:00:00").getTime();
  //var distanceTest = countDownDate - test;
  //document.getElementById("testarti").innerHTML = distance;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  if(0 < distance)  {
  document.getElementById("day").innerHTML = days + " 일 ";
  document.getElementById("hour").innerHTML = hours + " 시간 ";
  document.getElementById("min").innerHTML = minutes + " 분 ";
  document.getElementById("sec").innerHTML = seconds + " 초 ";
  document.getElementById("textarti").innerHTML = " <br>남았어요 ";
  }

  // Count down is finished
  else if (-86400000 < distance && distance < 0) {
    document.querySelector(".timeleft").innerHTML = " ";
    document.getElementById("countdown").innerHTML = "생일축쾅!<br><a href=\"gamdongjuk_page.html\">문채연의 감동적 편지 보기</a>";document.getElementById("sound").innerHTML = "<audio controls src=\"tada.mp3\">Your browser does not support the <code>audio</code> element.</audio>";
  }

  //next birthday setting
  else {
    countDownDate = countDownDate + 31536000000;
  }
}, 1000);
