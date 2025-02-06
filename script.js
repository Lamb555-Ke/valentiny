const messages = [
    "Are you sure? :(",
    "Really sure??",
    "Are you positive?",
    "Bubba pleaseeeee",
    "Just think about it for a sec...",
    "If you say no one more time, ill get really sad :(",
    "I'll be super sad.....",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! (this is the last one so say yes) ❤️"
    "Ugh ok fine hmph"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
