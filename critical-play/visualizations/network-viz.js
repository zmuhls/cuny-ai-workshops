// Network Visualization using D3.js
function initNetworkViz() {
    const canvas = document.getElementById('networkCanvas');
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // Color palette
    const colors = ['#42affa', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#74b9ff'];

    // Create nodes
    const numNodes = 30;
    const nodes = [];
    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function drawNetwork() {
        // Clear canvas with trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);

        // Draw connections first (so nodes appear on top)
        ctx.lineWidth = 1.5;
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Draw line if nodes are close enough
                if (distance < 180) {
                    const opacity = Math.max(0, (1 - distance / 180) * 0.5);
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(66, 175, 250, ${opacity})`;
                    ctx.stroke();
                }
            }
        }

        // Update and draw nodes
        nodes.forEach(node => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges with damping
            if (node.x <= node.radius || node.x >= width - node.radius) {
                node.vx *= -1;
                node.x = Math.max(node.radius, Math.min(width - node.radius, node.x));
            }
            if (node.y <= node.radius || node.y >= height - node.radius) {
                node.vy *= -1;
                node.y = Math.max(node.radius, Math.min(height - node.radius, node.y));
            }

            // Draw node with glow effect
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2);
            gradient.addColorStop(0, node.color);
            gradient.addColorStop(1, 'transparent');

            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw solid center
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
        });

        requestAnimationFrame(drawNetwork);
    }

    drawNetwork();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNetworkViz);
} else {
    initNetworkViz();
}
