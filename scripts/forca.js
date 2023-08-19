function desenhaForca() {
    const canvas = document.querySelector('#boneco');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // set line stroke and line width
    ctx.strokeStyle = 'black';

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(50, 480);
    ctx.lineTo(450, 480);
    ctx.moveTo(150, 480);
    ctx.lineTo(150, 80);
    ctx.lineTo(380, 80);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(350, 80);
    ctx.lineTo(350, 120);
    ctx.lineWidth = 3;
    ctx.stroke();

}

export default desenhaForca;