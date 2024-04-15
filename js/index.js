// Get the input field and form
const messageInput = document.getElementById('sendMessageButton');
const messageForm = document.getElementById('messageForm');

// Add an event listener to the input field
messageInput.addEventListener('click', function() {
    // If there's text in the input field, show the form, otherwise hide it
    if (this.value.trim() !== '') {
        messageForm.style.display = 'block';
    } else {
        messageForm.style.display = 'none';
    }
});
