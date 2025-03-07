document.addEventListener("DOMContentLoaded", function () {
    const gameArea = document.getElementById("game-area");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-icon");
        heart.style.left = Math.random() * 90 + "%";
        heart.style.top = Math.random() * 90 + "%";
        gameArea.appendChild(heart);

        heart.addEventListener("click", function () {
            score++;
            scoreDisplay.textContent = score;
            heart.remove();
        });

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    setInterval(createHeart, 1000);
});
