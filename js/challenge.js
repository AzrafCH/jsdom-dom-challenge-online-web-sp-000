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
    counter.innerText--;
  });

  //plus button
  plus.addEventListener("click", function(e){
    counter.innerText++;
  });

  //pause button
  pause.addEventListener("click", function(e) {
    if (pause.innerText === "pause"){
      pause.innerText = "resume";
      clearInterval(count);

      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
      likes.disabled = true;
    }
    else {
      count = setInterval(function () {
        counter.innerText++;
      }, 1000);
      pause.innerText = "pause";

      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      likes.disabled = false;
    }
  });


});
