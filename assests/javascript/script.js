const video = document.getElementById("myVideo");
const playPauseButton = document.getElementById("playPauseButton");




playPauseButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="ri-pause-circle-line"></i>'; // Change button to pause icon
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="ri-play-circle-fill"></i>'; // Change button to play icon
    }
});

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="ri-pause-circle-line"></i>'; // Change button to pause icon
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="ri-play-circle-fill"></i>'; // Change button to play icon
    }
});
