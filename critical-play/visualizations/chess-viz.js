// Chess Cheating Visualization
// Based on: Chess.com blogger "Nightly-Knight" vs ChatGPT
// Documented: ChatGPT attempting to move pawn horizontally to capture (illegal)
function initChessViz() {
    const canvas = document.getElementById('chessCanvas');
    if (!canvas) return;

    const width = canvas.offsetWidth;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // Board setup
    const boardSize = 8;
    const squareSize = Math.min(height / boardSize, (width * 0.4) / boardSize);
    const boardWidth = squareSize * boardSize;
    const boardX = 50;
    const boardY = (height - boardWidth) / 2;

    // Colors
    const lightSquare = '#f0d9b5';
    const darkSquare = '#b58863';
    const highlightColor = 'rgba(255, 107, 107, 0.6)';
    const legalColor = 'rgba(66, 175, 250, 0.4)';
    const illegalColor = 'rgba(255, 0, 0, 0.7)';

    // Animation state - 10 seconds per phase
    let animationPhase = 0;
    let animationProgress = 0;
    let phaseStartTime = Date.now();

    // Mid-game position where ChatGPT tries illegal pawn move
    const pieces = {
        // White pieces (ChatGPT playing)
        'd4': { type: 'pawn', color: 'white', symbol: '♙' },
        'e1': { type: 'king', color: 'white', symbol: '♔' },
        'a1': { type: 'rook', color: 'white', symbol: '♖' },

        // Black pieces (opponent)
        'e4': { type: 'knight', color: 'black', symbol: '♞' },
        'e8': { type: 'king', color: 'black', symbol: '♚' },
        'h8': { type: 'rook', color: 'black', symbol: '♜' }
    };

    // Documented illegal move: Pawn moving horizontally to capture
    const illegalMove = {
        from: 'd4',
        to: 'e4',
        illegalPath: []
    };

    function posToCoords(pos) {
        const file = pos.charCodeAt(0) - 'a'.charCodeAt(0);
        const rank = 8 - parseInt(pos[1]);
        return {
            x: boardX + file * squareSize + squareSize / 2,
            y: boardY + rank * squareSize + squareSize / 2
        };
    }

    function drawBoard() {
        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                const x = boardX + col * squareSize;
                const y = boardY + row * squareSize;
                const isLight = (row + col) % 2 === 0;

                ctx.fillStyle = isLight ? lightSquare : darkSquare;
                ctx.fillRect(x, y, squareSize, squareSize);

                // Highlight involved squares in phase 0
                if (animationPhase === 0) {
                    if ((row === 4 && col === 3) || // d4 - pawn
                        (row === 4 && col === 4)) {  // e4 - target knight
                        ctx.fillStyle = highlightColor;
                        ctx.fillRect(x, y, squareSize, squareSize);
                    }
                }
            }
        }

        // Draw coordinates
        ctx.fillStyle = '#888';
        ctx.font = `${squareSize * 0.3}px sans-serif`;
        ctx.textAlign = 'center';
        for (let i = 0; i < 8; i++) {
            ctx.fillText(
                String.fromCharCode(97 + i),
                boardX + i * squareSize + squareSize / 2,
                boardY + boardSize * squareSize + 20
            );
            ctx.fillText(
                String(8 - i),
                boardX - 15,
                boardY + i * squareSize + squareSize / 2 + 5
            );
        }
    }

    function drawPiece(pos, piece, alpha = 1) {
        const coords = posToCoords(pos);
        ctx.font = `${squareSize * 0.7}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.fillStyle = piece.color === 'white' ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
        ctx.fillText(piece.symbol, coords.x, coords.y);
        ctx.shadowBlur = 0;
    }

    function drawIllegalMove() {
        const from = posToCoords(illegalMove.from);
        const to = posToCoords(illegalMove.to);

        // Draw illegal horizontal path
        ctx.setLineDash([10, 10]);
        ctx.strokeStyle = illegalColor;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);

        const currentX = from.x + (to.x - from.x) * animationProgress;
        const currentY = from.y + (to.y - from.y) * animationProgress;
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw warning symbols
        if (animationProgress > 0.3) {
            ctx.font = `${squareSize * 0.5}px sans-serif`;
            ctx.fillStyle = illegalColor;
            ctx.textAlign = 'center';
            ctx.fillText('⚠', from.x + (to.x - from.x) * 0.5, from.y - 20);
        }

        // Show "X" through the move
        if (animationProgress > 0.6) {
            ctx.strokeStyle = illegalColor;
            ctx.lineWidth = 3;
            ctx.beginPath();
            const midX = from.x + (to.x - from.x) * 0.5;
            const midY = from.y + (to.y - from.y) * 0.5;
            const size = 15;
            ctx.moveTo(midX - size, midY - size);
            ctx.lineTo(midX + size, midY + size);
            ctx.moveTo(midX + size, midY - size);
            ctx.lineTo(midX - size, midY + size);
            ctx.stroke();
        }
    }

    function drawText() {
        const textX = boardX + boardWidth + 40;
        const textY = boardY + 20;

        ctx.fillStyle = '#d0d0d0';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'left';

        if (animationPhase === 0) {
            ctx.fillText('Normal game position', textX, textY);
            ctx.font = '14px sans-serif';
            ctx.fillText('• White pawn on d4', textX, textY + 30);
            ctx.fillText('• Black knight on e4', textX, textY + 50);
            ctx.fillText('• Pawn can only capture', textX, textY + 70);
            ctx.fillText('  diagonally forward', textX, textY + 88);

            ctx.fillStyle = '#888';
            ctx.font = 'italic 12px sans-serif';
            ctx.fillText('(Legal: d4xe5 if piece there)', textX, textY + 115);
        } else {
            ctx.fillStyle = '#ff6b6b';
            ctx.fillText('ChatGPT attempts:', textX, textY);
            ctx.font = '14px sans-serif';
            ctx.fillStyle = '#d0d0d0';
            ctx.fillText('Pawn d4 → e4', textX, textY + 30);

            ctx.fillStyle = '#ff6b6b';
            ctx.fillText('Illegal because:', textX, textY + 60);
            ctx.fillStyle = '#d0d0d0';
            ctx.font = '13px sans-serif';
            ctx.fillText('• Pawns cannot move', textX, textY + 82);
            ctx.fillText('  horizontally', textX, textY + 98);
            ctx.fillText('• Must capture diagonally', textX, textY + 114);
            ctx.fillText('• Forgets basic rules', textX, textY + 130);
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, width, height);

        drawBoard();

        // Draw all pieces
        Object.entries(pieces).forEach(([pos, piece]) => {
            if (animationPhase === 0 || pos !== illegalMove.from) {
                drawPiece(pos, piece);
            } else {
                const alpha = 1 - animationProgress * 0.3;
                drawPiece(pos, piece, alpha);
            }
        });

        // Show illegal move in phase 1
        if (animationPhase === 1) {
            drawIllegalMove();

            if (animationProgress > 0.5) {
                const ghostAlpha = (animationProgress - 0.5) * 1.2;
                drawPiece(illegalMove.to, pieces[illegalMove.from], ghostAlpha * 0.6);
            }
        }

        drawText();

        // Update animation - 10 seconds per phase
        const now = Date.now();
        const elapsed = now - phaseStartTime;
        animationProgress = Math.min(elapsed / 10000, 1);

        if (animationProgress >= 1) {
            animationProgress = 0;
            animationPhase = (animationPhase + 1) % 2;
            phaseStartTime = Date.now();
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChessViz);
} else {
    initChessViz();
}
