document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    getStartedBtn.addEventListener('click', function() {
        // Show loading screen and redirect after animation
        mainContent.style.display = 'none';
        loadingScreen.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'instructions.html';
        }, 2000); // Delay to allow loading screen animation to play
    });
});