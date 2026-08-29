const chatUrl = "https://jayryankerry.app.n8n.cloud/webhook/b7dc9adb-4d59-4659-b696-9fc6385285fa/chat";

const buttons = document.querySelectorAll(
  '#start-chat, .nav-button, .card-button, .primary-button[href="#chat"]'
);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (
      button.id === "start-chat" ||
      button.classList.contains("card-button")
    ) {
      event.preventDefault();
      window.open(chatUrl, "_blank");
    }
  });
});
