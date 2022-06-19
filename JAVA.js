
var countDownDate = new Date("Jun 20, 2022 24:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  var img = new Image(); 
  var div = document.getElementById('demo');
  

  if (distance < 0) {
    
    clearInterval(x);

    document.getElementById("demo").innerHTML = "Giveaway Is End";
  }
}, 1000);