let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('userGuess');
const message = document.getElementById('message');
const hintIcon = document.getElementById('visual-hint');
const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');

// This part makes the ENTER key work!
guessInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        showFeedback("Oops! Pick 1 to 100! 🍭", "❓", "animate__shakeX");
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        showFeedback(`🎉 WOW! ${guess} is correct!`, "🏆", "animate__tada");
        message.style.color = "#27ae60";
        resetBtn.classList.remove('hidden');
        guessInput.disabled = true;
    } else if (guess > secretNumber) {
        showFeedback("Too High! Lower...", "📉", "shake");
        message.style.color = "#e67e22";
    } else {
        showFeedback("Too Low! Higher...", "📈", "shake");
        message.style.color = "#3498db";
    }

    guessInput.value = "";
    guessInput.focus();
}

function showFeedback(text, emoji, animationClass) {
    message.textContent = text;
    hintIcon.textContent = emoji;
    
    // Reset and trigger animation
    container.classList.remove('shake', 'animate__tada', 'animate__shakeX');
    void container.offsetWidth; // Magic line to restart CSS animations
    container.classList.add(animationClass);
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    hintIcon.textContent = "";
    guessInput.disabled = false;
    resetBtn.classList.add('hidden');
    guessInput.focus();
    container.classList.remove('animate__tada', 'shake', 'animate__shakeX');
}