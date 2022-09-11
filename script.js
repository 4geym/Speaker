const btnSpeak = document.querySelector(".speak");

btnSpeak.onclick = () => {
    const message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.pitch = 1.5;
    message.text = document.querySelector(".message").value;
    window.speechSynthesis.speak(message);
}