document.addEventListener("DOMContentLoaded", () => {

  //counter
  const counter = document.getElementById('counter')

  let count = setInterval(function () {
    counter.innerText++;
  }, 1000);


  // Dom elements
  const minus = document.getElementById('minus')
  const plus = document.getElementById('plus')
  const heart = document.getElementById('heart')
  const pause = document.getElementById('pause')
  const likes = document.getElementsByClassName('likes')

  //minus button
  minus.addEventListener("click", function(e){
    minus.innerText--;
  });

  //plus button
  plus.addEventListener("click", function(e){
    plus.innerText++;
  });

  //pause button

});
