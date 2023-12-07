// JavaScript code for dynamic careers list
document.addEventListener('DOMContentLoaded', function () {
    // Sample careers data (replace with your actual data)
    const careersData = [
        { title: 'Software Developer', description: 'Create and maintain software applications.' },
        { title: 'Graphic Designer', description: 'Design visual content for various purposes.' },
        { title: 'Marketing Specialist', description: 'Promote and advertise products or services.' },
    ];

    // Get the careers list element
    const careersList = document.getElementById('careers-list');

    // Add careers to the list
    careersData.forEach(career => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${career.title}</h3><p>${career.description}</p>`;
        careersList.appendChild(listItem);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.href.split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.getElementById('subscribe-form');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        alert(`Thank you for subscribing! We will send newsletters to ${emailInput.value}`);
        // You can add additional logic here, such as sending data to a server
    });
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    if (messageInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageInput.value;
        chatMessages.appendChild(message);

        // You can add logic here to send the message to a server or other participants

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

const careersData = [
    { title: 'Software Developer', description: 'Create and maintain software applications.' },
    { title: 'Graphic Designer', description: 'Design visual content for various purposes.' },
    { title: 'Marketing Specialist', description: 'Promote and advertise products or services.' },
];

// Get the careers list element
const careersList = document.getElementById('careers-list');

// Add careers to the list
careersData.forEach(career => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<h3>${career.title}</h3><p>${career.description}</p>`;
    careersList.appendChild(listItem);
});

// JavaScript code for handling forms
const subscribeForm = document.getElementById('subscribe-form');
const contactForm = document.getElementById('contact-form');

subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    alert(`Thank you for subscribing! We will send newsletters to ${emailInput.value}`);
    // You can add additional logic here, such as sending data to a server
});

document.addEventListener('DOMContentLoaded', function () {
    // ... (previous code)

    // Check if the user is already logged in
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
        showDashboard(storedUser);
    }

    // JavaScript code for handling forms
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        // In a real-world scenario, you would validate credentials on the server
        // For simplicity, we'll use a simple check here
        if (usernameInput.value === 'demo' && passwordInput.value === 'password') {
            // Set user as logged in
            localStorage.setItem('loggedInUser', usernameInput.value);

            // Show the user dashboard
            showDashboard(usernameInput.value);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    function showDashboard(username) {
        // Redirect to the user dashboard page
        window.location.href = 'dashboard.html';

        // Alternatively, you can show/hide sections on the current page
        // For simplicity, we're redirecting in this example
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // ... (previous code)

    // Check if the user is already logged in
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
        showDashboard(storedUser);
    }

    // JavaScript code for handling forms
    const loginForm = document.getElementById('login-form');
    const settingsForm = document.getElementById('settings-form');

    loginForm.addEventListener('submit', function (event) {
        // ... (previous code)
    });

    settingsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newPasswordInput = document.getElementById('newPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        // Check if passwords match
        if (newPasswordInput.value === confirmPasswordInput.value) {
            // In a real-world scenario, you would send the updated password to the server
            alert('Password updated successfully!');
            // Clear the form
            newPasswordInput.value = '';
            confirmPasswordInput.value = '';
        } else {
            alert('Passwords do not match. Please try again.');
        }
    });

    function showDashboard(username) {
        const usernameSpan = document.getElementById('username');
        const progressSpan = document.getElementById('progress');

        // Set the username on the dashboard
        usernameSpan.textContent = username;

        // Simulate progress tracking
        const storedProgress = localStorage.getItem('userProgress') || 0;
        progressSpan.textContent = `${storedProgress}%`;
    }

    // Function to update progress (for demonstration purposes)
    window.updateProgress = function () {
        const progressSpan = document.getElementById('progress');

        // Simulate progress update
        let currentProgress = parseInt(progressSpan.textContent);
        currentProgress = (currentProgress + 10) % 101; // Increment by 10%, loop from 100% to 0%
        progressSpan.textContent = `${currentProgress}%`;

        // Update stored progress in localStorage
        localStorage.setItem('userProgress', currentProgress);
    }
});
