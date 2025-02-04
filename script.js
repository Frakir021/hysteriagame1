document.querySelectorAll('.menuButton').forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        const textContainer = document.querySelector('.textContainer');
        
        // Array of new text for each button
        const texts = [
            "Fight your way through the lore of your chosen character",
            "Pit yourself against other players, or against the CPU",
            "Go hand to hand against players in other regions",
            "Text for Training",
            "Text for Extras",
            "Text for Exit"
        ];
        
        // Update text in textContainer based on which button was hovered
        textContainer.textContent = texts[index];
    });
});



const hoverSound = new Audio("animation/computer-processing-sound-effects-short-click-select-02-122133.mp3");

const clickSound = new Audio("animation/computer-processing-sound-effects-short-click-select-01-122134.mp3");

const backgroundMusic = new Audio("animation/computer-processing-sound-effects-short-click-select-03-122132.mp3"); // Replace with your track URL

let audioUnlocked = false; // Tracks if audio is allowed to play

// Enable quick replay by cloning the sound
function playSound(audio) {
    const soundClone = audio.cloneNode();
    soundClone.play();
}

// Function to unlock and play audio after the first interaction
function unlockAudio() {
    if (!audioUnlocked) {
        // Trigger background music to play after first interaction
        // document.getElementById('backgroundMusic').play().catch(error => {
        //     console.log("Background music failed to play due to autoplay restrictions.");
        // });
        
        // Allow further sounds to play
        audioUnlocked = true;
    }
}

// Force a keypress or click to unlock audio and start background music
// document.addEventListener("click", unlockAudio);
// document.addEventListener("keydown", unlockAudio);

document.querySelectorAll(".menuButton").forEach(button => {
    button.addEventListener("mouseenter", () => {
         playSound(hoverSound);
    });
    button.addEventListener("click", () => {
         playSound(clickSound);
    });
});
