// audio pop-up player for dik cadbury website
// on local drive it's in /Users/arup/"dik cadbury"/dikcadbury.com/new-site/dc2012/audioplayer.js
// there is page that gets loaded into the window called audioplayer.html
// the function below is for the first version of the playPause which was never used
/*
var clip = document.getElementById("clip1");
function playPause() {
	if (clip1.paused) {
		clip1.play();
		document.getElementById("audio_clip").style.backgroundImage="url('/images/audio-icon.png')";
		document.getElementById("audio_clip").style.borderColor="green";
		//*document.getElementById("audio").style.color="#000";
	} else {
		clip1.pause();
		document.getElementById("audio_clip").style.borderColor="red";
	}
}
*/

var launchPopupPlayer = function() {
	var playerWindow = window.open("http://dikcadbury.com/new-site/wp-content/themes/dc2012/audioplayer.html","Listen while browsing","width=350,height=100,location=no");
};
