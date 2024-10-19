document.addEventListener("DOMContentLoaded", function () {
    // Navigation section
    let path = window.location.pathname;
    
    if (path === "/") {
        path = "/index.html";
    }
    
    const navLinks = {
        '/index.html': 'home-link',
        '/blogs.html': 'blogs-link',
        '/profile.html': 'profile-link',
        '/about.html': 'about-link'
    };

    const currentLink = navLinks[path];
    if (currentLink) {
        document.getElementById(currentLink).classList.add('active');
    }

    // Form Validation Section
    const storyForm = document.querySelector('.story-form');
    const anonForm = document.querySelector('.anon-form');

    if (storyForm) {
        storyForm.addEventListener('submit', function (event) {
            if (!validateForm(storyForm)) {
                event.preventDefault(); 
                alert("Please fill in all required fields.");
            } else {
                alert("Your story has been submitted successfully!");
            }
        });
    }

    if (anonForm) {
        anonForm.addEventListener('submit', function (event) {
            if (!validateForm(anonForm)) {
                event.preventDefault(); 
                alert("Please fill in all required fields.");
            } else {
                alert("Your anonymous message has been submitted successfully!");
            }
        });
    }

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

    // Button Highlight Section
    const startJourneyButton = document.querySelector('.cta-button');
    const loginButton = document.getElementById('login-link');

    if (startJourneyButton && loginButton) {
        startJourneyButton.addEventListener('click', () => {
            loginButton.classList.add('highlight');
            setTimeout(() => {
                loginButton.classList.remove('highlight');
            }, 300);
        });
    }
});

// Chat Section
function openChat(name) {
    const messagesDiv = document.getElementById('messages');
    if (messagesDiv) {
        messagesDiv.innerHTML = `<h3>Chat with ${name}</h3>`;
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messagesDiv = document.getElementById('messages');

    if (input && messagesDiv && input.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = input.value;
        messagesDiv.appendChild(newMessage);
        input.value = ''; 
        messagesDiv.scrollTop = messagesDiv.scrollHeight; 
    }
}
