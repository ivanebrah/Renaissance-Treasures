let slideIndex = 1; // Initialize the slide index
showSlides(slideIndex); // Display the first slide

// Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); // Increment or decrement the slide index and show the corresponding slide
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); // Set the slide index to the selected slide and show it
}

// Function to display the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides"
    if (slides.length === 0) return; // Prevent errors if there are no slides
    if (n > slides.length) {slideIndex = 1} // Wrap around to the first slide
    if (n < 1) {slideIndex = slides.length} // Wrap around to the last slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }    
    slides[slideIndex-1].style.display = "block"; // Show the current slide
}

// Contact Us page
// Function to validate the contact form
function validateForm() {
    // Get the values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (name === "" || email === "" || mobile === "" || subject === "" || message === "") {
        alert("All fields must be filled out."); // Alert the user if any field is empty
        return false;  // Prevent form submission
    }
    return true;  // Allow form submission if all fields are filled
}



// Scroll animation for elements with class 'scroll-animate'
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.scroll-animate'); // Get all elements with class 'scroll-animate'
    for (var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect(); // Get the position of the element
        if (position.top < window.innerHeight && position.bottom >= 0) {
            elements[i].classList.add('fadeIn'); // Add the 'fadeIn' class if the element is in view
        }
    }
});

// Expand/collapse functionality for timeline events
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('expanded'); // Toggle the 'expanded' class on click
    });
});