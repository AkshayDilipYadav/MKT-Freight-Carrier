document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.item');
    let animationTriggered = false; // To ensure animations are triggered only once

    // Function to check scroll position
    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const triggerPoint = document.body.scrollHeight * 0.45; // 60% of the total page height

        if (!animationTriggered && scrollPosition >= triggerPoint) {
            animationTriggered = true; // Prevent multiple triggers
            items.forEach((item, index) => {
                // Add delay to each item's animation
                item.style.setProperty('--index', index);
                setTimeout(() => {
                    item.classList.add('active'); // Start animation to shrink
                    setTimeout(() => {
                        item.classList.add('card'); // Set final card position
                    }, 50); // Ensure animation finishes (matches CSS animation duration)
                }, index * 150); // Delay each animation
            });
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', checkScroll);
});