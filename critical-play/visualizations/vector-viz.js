// Simplified Vector Visualization - Word association game
function initVectorViz() {
    const canvas = document.getElementById('vectorCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId = null;
    let phase = 0;
    let startTime = Date.now();

    // Word sets with positions - demonstrating cosine similarity in semantic space
    // All vectors radiate from center; angle between vectors shows semantic similarity
    const words = [
        [
            // High cosine similarity (~0.95): very small angles between vectors
            { text: 'teacher', x: 0.5, y: 0.5, size: 18, color: '#42affa' },
            { text: 'classroom', x: 0.82, y: 0.54, size: 14, color: '#4ecdc4' },
            { text: 'student', x: 0.84, y: 0.46, size: 14, color: '#4ecdc4' }
        ],
        [
            // Medium cosine similarity (~0.65): moderate angles between vectors
            { text: 'teacher', x: 0.5, y: 0.5, size: 18, color: '#42affa' },
            { text: 'guide', x: 0.85, y: 0.72, size: 14, color: '#ffeaa7' },
            { text: 'mentor', x: 0.85, y: 0.28, size: 14, color: '#ffeaa7' }
        ],
        [
            // Low cosine similarity (~0.1): near-orthogonal or opposing vectors
            { text: 'teacher', x: 0.5, y: 0.5, size: 18, color: '#42affa' },
            { text: 'turbine', x: 0.54, y: 0.88, size: 14, color: '#ff6b6b' },
            { text: 'kelp', x: 0.12, y: 0.46, size: 14, color: '#ff6b6b' }
        ]
    ];

    const labels = [
        'Normal associations',
        'Constrained prompt',
        'Semantic breakdown'
    ];

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = 300;
    }

    function draw() {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed > 10) {
            phase = (phase + 1) % 3;
            startTime = Date.now();
        }

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw label
        ctx.fillStyle = words[phase][1].color;
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(labels[phase], 20, 30);

        // Draw words
        words[phase].forEach((word, i) => {
            const x = word.x * canvas.width;
            const y = word.y * canvas.height;

            // Draw line from king to other words
            if (i > 0) {
                ctx.strokeStyle = word.color + '40';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(words[phase][0].x * canvas.width, words[phase][0].y * canvas.height);
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.setLineDash([]);
            }

            // Draw word
            ctx.fillStyle = word.color;
            ctx.font = `bold ${word.size}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.fillText(word.text, x, y);
        });

        animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    // Cleanup on navigation
    return () => {
        if (animationId) cancelAnimationFrame(animationId);
    };
}

// Initialize with Reveal.js
if (typeof Reveal !== 'undefined') {
    Reveal.on('slidechanged', event => {
        if (event.currentSlide.querySelector('#vectorCanvas')) {
            initVectorViz();
        }
    });
} else {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVectorViz);
    } else {
        initVectorViz();
    }
}
