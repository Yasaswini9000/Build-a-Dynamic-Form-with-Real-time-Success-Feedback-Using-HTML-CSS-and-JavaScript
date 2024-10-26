document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload
    document.getElementById('success-message').classList.remove('hidden'); // Show success message
});
