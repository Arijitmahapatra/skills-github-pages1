// Create floating hearts
function createHearts() {
    const container = document.getElementById('floatingHearts');
    const colors = ['#ff6b6b', '#ff8e8e', '#d23669', '#ff4757', '#ff9a9e'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);
    }
}

// Gift box click event
document.getElementById('giftBox').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    if (surprise.style.display === 'block') {
        surprise.style.display = 'none';
    } else {
        surprise.style.display = 'block';
    }
});

// Create random hearts on click
document.addEventListener('click', function(e) {
    if (e.target.id !== 'giftBox') {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});

// Initialize
window.onload = function() {
    createHearts();
    
    // Typewriter effect for the message (optional)
    const message = document.querySelector('.message p');
    if (message) {
        const text = message.innerText;
        message.innerText = '';
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                message.innerText += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 30);
    }
};