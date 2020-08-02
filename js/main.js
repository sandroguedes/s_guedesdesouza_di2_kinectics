(() => {
  console.log('you wake up and and go into a state of horror as you notice the horse head on your left hand side');

  let audio = document.querySelector("audio"),
      playButton = document.querySelector(".controls button");

  function playAudio() {
    document.querySelectorAll("path").forEach(path => path.classList.add("textanimation"))
    document.querySelectorAll("rect").forEach(rect => rect.classList.add("textanimation"))
    document.querySelector("#svgcontainer").classList.add("containeranimation")
    audio.play()
  }

  playButton.addEventListener("click", playAudio);

})();
