const buttons = document.querySelectorAll(
  '#start-chat, .nav-button, .card-button'
);

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const chatButton = document.querySelector('.chat-window-toggle');

    if (chatButton) {
      chatButton.click();
    }
  });
});
