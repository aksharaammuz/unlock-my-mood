document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('.start-btn');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            console.log("Button clicked!");
            // Add your functionality here
        });
    }
});
// Button click event
document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('.start-btn');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            // Add temporary active class
            this.classList.add('clicked');
            
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
            
            // Redirect after animation completes
            setTimeout(() => {
                window.location.href = "message.html";
            }, 400);
        });
    }
});