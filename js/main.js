(() => {

console.log('you wake up and and go into a state of horror as you notice the horse head on your left hand side');

let audio = new Audio('../audio/the godfather best scene_1.mp3'),
	playButton = document.querySelector(".playbtn");

function playSequence()
{
document.querySelector(".svglayout").classList.add(".svglayoutanimation")
audio.play()
}

playButton.addEventListener("Click", playSequence);


})();