(() => {
  let audio = document.querySelector("audio"),
      playButton = document.querySelector(".controls button");

  function playAudio() {
    document.querySelectorAll("path").forEach(path => path.classList.add("textanimation"))
    document.querySelector("#svgcontainer").classList.add("containeranimation")
    audio.play()
  }

  playButton.addEventListener("click", playAudio);

})();
