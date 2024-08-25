document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send-button');

    function addMessage(text, isUserMessage) {
        const messageElement = document.createElement('div');
        messageElement.className = isUserMessage ? 'message user-message' : 'message';
        messageElement.textContent = text;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText, true); // User message
            messageInput.value = '';

            // Simulate a response from the "server"
            setTimeout(() => {
                addMessage('This is a simulated response', false); // "Server" response
            }, 1000);
        }
    });

    // Allow sending messages with Enter key
    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    });
});