// -------------------------------
// 1. ALERT MESSAGE (Home Page)
// -------------------------------
function showWelcomeMessage() {
    alert("Welcome back! Stay consistent and keep pushing toward your goals!");
}



// -------------------------------
// 2. FORM VALIDATION (About Page)
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const feedback = document.getElementById("formFeedback");

            if (name === "" || email === "" || message === "") {
                feedback.style.color = "red";
                feedback.textContent = "Please fill out all fields.";
                return;
            }

            if (!email.includes("@")) {
                feedback.style.color = "red";
                feedback.textContent = "Please enter a valid email.";
                return;
            }

            feedback.style.color = "green";
            feedback.textContent = "Message sent successfully!";
            form.reset();
        });
    }
});



// -------------------------------
// 3. IMAGE SLIDESHOW (Media Page)
// -------------------------------
$(document).ready(function () {
    if ($(".slideshow img").length > 1) {
        $(".slideshow img:gt(0)").hide();

        setInterval(function () {
            $('.slideshow :first-child')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideshow');
        }, 3000); // 3 seconds per image
    }
});
