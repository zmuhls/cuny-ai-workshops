// Classic Pong-style Arcade Game Visualization
function initArcadeGame() {
    const canvas = document.getElementById('arcadeCanvas');
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // Game colors
    const primaryColor = '#42affa';
    const accentColor = '#ff6b6b';
    const secondaryColor = '#4ecdc4';

    // Paddles
    const paddleWidth = 12;
    const paddleHeight = 80;
    const leftPaddle = { x: 30, y: height / 2 - paddleHeight / 2, dy: 3 };
    const rightPaddle = { x: width - 30 - paddleWidth, y: height / 2 - paddleHeight / 2, dy: 3 };

    // Ball
    const ball = {
        x: width / 2,
        y: height / 2,
        radius: 8,
        dx: 4,
        dy: 3,
        trail: []
    };

    // Scores
    let leftScore = 0;
    let rightScore = 0;

    // Particles for effects
    const particles = [];

    function createParticles(x, y, color) {
        for (let i = 0; i < 8; i++) {
            particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                life: 1,
                color: color
            });
        }
    }

    function drawDottedLine() {
        ctx.setLineDash([10, 10]);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function drawPaddle(paddle, color) {
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.fillRect(paddle.x, paddle.y, paddleWidth, paddleHeight);
        ctx.shadowBlur = 0;

        // Highlight
        const gradient = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x + paddleWidth, paddle.y);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(paddle.x, paddle.y, paddleWidth / 2, paddleHeight);
    }

    function drawBall() {
        // Trail effect
        ball.trail.push({ x: ball.x, y: ball.y });
        if (ball.trail.length > 10) ball.trail.shift();

        ball.trail.forEach((pos, index) => {
            const alpha = index / ball.trail.length * 0.5;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, ball.radius * (index / ball.trail.length), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
        });

        // Main ball with glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = secondaryColor;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = secondaryColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Highlight
        const gradient = ctx.createRadialGradient(
            ball.x - ball.radius / 3,
            ball.y - ball.radius / 3,
            0,
            ball.x,
            ball.y,
            ball.radius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    function drawScore() {
        ctx.font = 'bold 40px monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.textAlign = 'center';
        ctx.fillText(leftScore, width / 4, 60);
        ctx.fillText(rightScore, (width * 3) / 4, 60);
    }

    function updateParticles() {
        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.02;
            p.vy += 0.2; // Gravity

            if (p.life <= 0) {
                particles.splice(index, 1);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.life})`;
                ctx.fill();
            }
        });
    }

    function updateGame() {
        // Move ball
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Ball collision with top/bottom
        if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= height) {
            ball.dy *= -1;
            createParticles(ball.x, ball.y, '66, 175, 250');
        }

        // Ball collision with paddles
        if (
            ball.x - ball.radius <= leftPaddle.x + paddleWidth &&
            ball.y >= leftPaddle.y &&
            ball.y <= leftPaddle.y + paddleHeight
        ) {
            ball.dx = Math.abs(ball.dx);
            ball.dy += (Math.random() - 0.5) * 2;
            createParticles(ball.x, ball.y, '66, 175, 250');
        }

        if (
            ball.x + ball.radius >= rightPaddle.x &&
            ball.y >= rightPaddle.y &&
            ball.y <= rightPaddle.y + paddleHeight
        ) {
            ball.dx = -Math.abs(ball.dx);
            ball.dy += (Math.random() - 0.5) * 2;
            createParticles(ball.x, ball.y, '255, 107, 107');
        }

        // Ball out of bounds (scoring)
        if (ball.x - ball.radius <= 0) {
            rightScore++;
            resetBall();
        } else if (ball.x + ball.radius >= width) {
            leftScore++;
            resetBall();
        }

        // AI paddle movement
        if (ball.x < width / 2) {
            // Left paddle follows ball
            if (leftPaddle.y + paddleHeight / 2 < ball.y - 10) {
                leftPaddle.y += leftPaddle.dy;
            } else if (leftPaddle.y + paddleHeight / 2 > ball.y + 10) {
                leftPaddle.y -= leftPaddle.dy;
            }
        }

        if (ball.x > width / 2) {
            // Right paddle follows ball
            if (rightPaddle.y + paddleHeight / 2 < ball.y - 10) {
                rightPaddle.y += rightPaddle.dy;
            } else if (rightPaddle.y + paddleHeight / 2 > ball.y + 10) {
                rightPaddle.y -= rightPaddle.dy;
            }
        }

        // Keep paddles in bounds
        leftPaddle.y = Math.max(0, Math.min(height - paddleHeight, leftPaddle.y));
        rightPaddle.y = Math.max(0, Math.min(height - paddleHeight, rightPaddle.y));
    }

    function resetBall() {
        ball.x = width / 2;
        ball.y = height / 2;
        ball.dx = (Math.random() > 0.5 ? 1 : -1) * 4;
        ball.dy = (Math.random() - 0.5) * 6;
        ball.trail = [];
        createParticles(ball.x, ball.y, '78, 205, 196');
    }

    function gameLoop() {
        // Clear canvas with fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, width, height);

        drawDottedLine();
        drawScore();
        drawPaddle(leftPaddle, primaryColor);
        drawPaddle(rightPaddle, accentColor);
        drawBall();
        updateParticles();
        updateGame();

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArcadeGame);
} else {
    initArcadeGame();
}
