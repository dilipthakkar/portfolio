export const mouseAnimation = () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var lines = [];
  var gravity = 0.02;
  var _x = window.innerWidth / 2,
    _y = window.innerWidth / 2;

  resize();

  for (var i = 0; i < 800; i++) {
    addLine(i * 5);
  }

  function addLine(delay) {
    setTimeout(function () {
      var line = {
        x: _x,
        y: _y,
        width: Math.random() * 20,
        vx: -0.5 + Math.random() * 1,
        vy: -1 + -Math.random() * 1,
        rotation: Math.random() * 2,
        vr: Math.random() * 0.2,
        opacity: 1,
      };
      lines.push(line);
    }, delay);
  }

  function loop() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0, l = lines.length; i < l; i++) {
      var line = lines[i];
      ctx.globalAlpha = line.opacity;
      ctx.beginPath();
      ctx.strokeStyle = "rgb(8, 253, 216)";
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(
        line.x + line.width * Math.cos(line.rotation),
        line.y + line.width * Math.sin(line.rotation)
      );
      ctx.closePath();
      ctx.stroke();
      line.x += line.vx;
      line.y += line.vy;
      line.vy += gravity;
      line.rotation += line.vr;
      line.opacity -= 0.005;

      if (line.opacity < 0) {
        line.opacity = 1;
        line.x = _x;
        line.y = _y;
        line.vy = -1 + -Math.random() * 1;
      }
    }
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function mousemove(e) {
    _x = e.pageX;
    _y = e.pageY;
  }

  window.addEventListener("mousemove", mousemove);
  window.addEventListener("resize", resize);
};
