const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const fontSize = 20;
const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const charColumns = [];
let speed = 1;

// Initialize character columns
for (let i = 0; i < columns; i++) {
    charColumns[i] = Math.floor(Math.random() * canvas.height / fontSize) - 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Character color

    for (let i = 0; i < columns; i++) {
        const index = Math.floor(Math.random() * charSet.length);
        const char = charSet[index];
        ctx.fillText(char, i * fontSize, charColumns[i] * fontSize);

        // Move character down
        if (charColumns[i] * fontSize > canvas.height && Math.random() > 0.95) {
            charColumns[i] = 0;
        }
        charColumns[i]++;
    }
}

function update() {
    draw();
    setTimeout(update, speed);
}

update();
