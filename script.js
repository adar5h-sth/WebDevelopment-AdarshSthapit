// // Navigation section 
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-links a');
    const currentLocation = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});


// Form Validation Section
document.addEventListener("DOMContentLoaded", function () {
    const storyForm = document.querySelector('.story-form');
    const anonForm = document.querySelector('.anon-form');

    // Handle submission for the story form
    storyForm.addEventListener('submit', function (event) {
        if (!validateForm(storyForm)) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all required fields.");
        } else {
            alert("Your story has been submitted successfully!");
        }
    });
    // Handle submission for the anonymous form
    anonForm.addEventListener('submit', function (event) {
        if (!validateForm(anonForm)) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all required fields.");
        } else {
            alert("Your anonymous message has been submitted successfully!");
        }
    });

    // Function to validate required fields in a form
    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(function (field) {
            if (!field.value.trim()) {
                isValid = false;
            }
        });
        return isValid;
    }
});

// Button Highlight Section
document.addEventListener('DOMContentLoaded', () => {
    const startJourneyButton = document.querySelector('.cta-button');
    const loginButton = document.getElementById('login-link');

    // Highlight the login button when the start journey button is clicked
    startJourneyButton.addEventListener('click', () => {
        loginButton.classList.remove('highlight');
        loginButton.classList.add('highlight');

        // Remove highlight class after a short delay
        setTimeout(() => {
            loginButton.classList.remove('highlight');
        }, 300);
    });
});


// chat section
function openChat(name) {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = `<h3>Chat with ${name}</h3>`;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messagesDiv = document.getElementById('messages');

    // Check if the input is not empty before sending
    if (input.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = input.value;
        messagesDiv.appendChild(newMessage);
        input.value = ''; // Clear input after sending
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    }
}

// In Development Alert 
function showDevelopmentAlert() {
    alert("Feature under development. Please check back later!");
}

