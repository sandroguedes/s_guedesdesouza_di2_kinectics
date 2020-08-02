(() => {

console.log('you wake up and and go into a state of horror as you notice the horse head on your left hand side');

let audio = document.querySelector('audio'),
	playButton = document.querySelector(".playbtn");

function playSequence()
{
console.log('sequence playing');
document.querySelector(".svglayout").classList.add(".svglayoutanimation");

audio.play()
}

playButton.addEventListener('Click', playSequence);

})();