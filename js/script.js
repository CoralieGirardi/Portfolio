const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const x = canvas.width/2;
    const y = canvas.height-30;
    const dx = 2;
    const dy = -2;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#CD6155";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
    }
    
    setInterval(draw, 10);