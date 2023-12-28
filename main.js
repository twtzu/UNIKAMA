console.log("Inline script is loaded!");

// Listen to scroll events
$(document).ready(function() {
    $(window).scroll(function() {
        // Get the current scroll position
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 530) {
            $('.main-navigation-display').addClass('sticky');

            // Modify font size and padding when scroll position exceeds 500 pixels
            $('.subnav').css({
                'font-size': '10px',
                'padding': '2px 8px 4px 6px'
            });


        } else {
            $('.main-navigation-display').removeClass('sticky');

            // Reset font size and padding when scroll position is less than or equal to 500 pixels
            $('.subnav').css({
                'font-size': '15px',
                'padding': '6px 12px 8px 10px'
            });

        }
        console.log("Scroll Position:", scrollPos);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const carousel1 = new bootstrap.Carousel(document.getElementById('carousel1'));
    const carousel2 = new bootstrap.Carousel(document.getElementById('carousel2'));

    // Add an event listener for the slide event on carousel1
    carousel1._element.addEventListener('slide.bs.carousel', function(event) {
        // Get the index of the target slide in carousel1
        const slideIndex = event.to;

        // Move carousel2 to the corresponding slide
        carousel2.to(slideIndex);
    });
});