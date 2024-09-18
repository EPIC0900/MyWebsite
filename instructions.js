document.addEventListener('DOMContentLoaded', function() {
    const homeBtn = document.getElementById('homeBtn');
    const loadingScreen = document.getElementById('loadingScreen');

    homeBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        if (loadingScreen) {
            // Show loading screen and redirect after animation
            loadingScreen.style.display = 'flex';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // Delay to allow loading screen animation to play
        } else {
            // If loadingScreen is not present, redirect immediately
            window.location.href = 'index.html';
        }
    });
});