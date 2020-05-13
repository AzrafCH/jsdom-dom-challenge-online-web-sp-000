document.addEventListener("DOMContentLoaded", () => {

  //counter
  const counter = document.getElementById('counter')

  let count = setInterval(function () {
    counter.innerText++;
  }, 1000);


  // Dom elements
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const heart = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const likes = document.getElementsByClassName('likes');
  const submit = document.getElementById('submit')
  const comments = document.getElementById('comment-form')

  //minus button
  minus.addEventListener("click", function(e){
    minus.innerText = count - 1;
  });

  //plus button
  plus.addEventListener("click", function(e){
    plus.innerText = count++;
  });

  //pause button
  pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause"){
      pause.innerText = "resume";
      clearInterval(count);

      minus.disable = true;
      plus.disable = true;
      heart.disable = true;
      submit.disable = true;
      likes.disable = true;
    }
    else {
      count = setInterval(function () {
        counter.innerText++;
      }, 1000);
      pause.innerText = "pause";

      minus.disable = false;
      plus.disable = false;
      heart.disable = false;
      submit.disable = false;
      likes.disable = false;
    }
  });


});
