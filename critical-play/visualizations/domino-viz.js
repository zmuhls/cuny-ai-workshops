// Causation Chain Reaction - Ripple cascade effect
function initDominoViz() {
    const canvas = document.getElementById('dominoCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId = null;
    let startTime = Date.now();

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = 300;
    }

    function draw() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const elapsed = (Date.now() - startTime) / 1000;
        const cycleDuration = 6;
        const progress = (elapsed % (cycleDuration + 1)) / cycleDuration;

        const centerY = canvas.height / 2;
        const numNodes = 8;
        const spacing = canvas.width / (numNodes + 1);

        for (let i = 0; i < numNodes; i++) {
            const x = spacing * (i + 1);
            const nodeProgress = Math.max(0, Math.min(1, (progress - i * 0.12) * 3));

            if (nodeProgress > 0) {
                // Expanding ripple
                const maxRadius = 60;
                const rippleRadius = nodeProgress * maxRadius;
                const rippleAlpha = 1 - nodeProgress;

                // Outer ripple
                ctx.strokeStyle = `rgba(66, 175, 250, ${rippleAlpha * 0.6})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(x, centerY, rippleRadius, 0, Math.PI * 2);
                ctx.stroke();

                // Inner ripple
                if (nodeProgress > 0.3) {
                    const innerProgress = (nodeProgress - 0.3) / 0.7;
                    const innerRadius = innerProgress * maxRadius * 0.7;
                    ctx.strokeStyle = `rgba(78, 205, 196, ${(1 - innerProgress) * 0.4})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(x, centerY, innerRadius, 0, Math.PI * 2);
                    ctx.stroke();
                }

                // Center node (activated)
                const nodeSize = 8 + nodeProgress * 4;
                ctx.fillStyle = nodeProgress < 1 ? '#42affa' : '#4ecdc4';
                ctx.beginPath();
                ctx.arc(x, centerY, nodeSize, 0, Math.PI * 2);
                ctx.fill();

                // Connection arrow to next node
                if (i < numNodes - 1 && nodeProgress > 0.5) {
                    const arrowProgress = (nodeProgress - 0.5) * 2;
                    const nextX = spacing * (i + 2);
                    const currentX = x + arrowProgress * (nextX - x);

                    ctx.strokeStyle = `rgba(255, 107, 107, ${arrowProgress * 0.8})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x, centerY);
                    ctx.lineTo(currentX, centerY);
                    ctx.stroke();

                    // Arrow head
                    if (arrowProgress > 0.8) {
                        ctx.fillStyle = '#ff6b6b';
                        ctx.beginPath();
                        ctx.moveTo(currentX, centerY);
                        ctx.lineTo(currentX - 8, centerY - 5);
                        ctx.lineTo(currentX - 8, centerY + 5);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            } else {
                // Inactive node
                ctx.fillStyle = '#333';
                ctx.beginPath();
                ctx.arc(x, centerY, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    return () => {
        if (animationId) cancelAnimationFrame(animationId);
    };
}

// Initialize with Reveal.js
if (typeof Reveal !== 'undefined') {
    Reveal.on('slidechanged', event => {
        if (event.currentSlide.querySelector('#dominoCanvas')) {
            initDominoViz();
        }
    });
} else {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDominoViz);
    } else {
        initDominoViz();
    }
}
