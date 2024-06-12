document.querySelector('.send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const messageInput = document.querySelector('.chat-box input');
    const message = messageInput.value.trim();

    if (message.length > 0) {
        // Add the message to the chat list
        addMessageToChat(message);

        // Clear the message input
        messageInput.value = '';
    }
}

function addMessageToChat(message) {
    const chatList = document.querySelector('.chat-list');
    const chatItem = document.createElement('div');
    chatItem.classList.add('chat-item');

    // Create the message element
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');

    // Append the message to the chat item
    chatItem.appendChild(messageElement);

    // Append the chat item to the chat list
    chatList.appendChild(chatItem);

    // Scroll to the bottom of the chat list
    chatList.scrollTop = chatList.scrollHeight;
}
