function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== "") {
        // 채팅창에 새로운 메시지를 추가
        var chatBox = document.getElementById('chat-box');
        var messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = message;

        chatBox.appendChild(messageElement);

        // 입력창 비우기
        messageInput.value = "";

        // 스크롤을 아래로
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}