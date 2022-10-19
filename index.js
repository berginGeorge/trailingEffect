const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let atoms = [];
canvas.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 20; i++) {
       atoms.push(new Atom(e.x, e.y))
    }
})

const animate = () => {
  atoms.forEach((atom, index) => {

    atom.draw();
    atom.updateSpeed();
    atom.updateSize();

    if (atom.radius < 0.3) {
      atoms.splice(index, 1);
    }
  });

  ctx.save();
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  requestAnimationFrame(animate);
};

animate();

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 4 + 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
  }

  updateSpeed() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  updateSize() {
    this.radius -= 0.1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

//comment out below code to skip generating atoms effects on its own

const point  = {
    x: 0,
    y: 0
}
let degrees = 0;
const generateAtoms = () => {
  atoms.push(
    new Atom(canvas.width/2 + (point.x * 200), canvas.height/2 + (point.y * 200))
  );
  point.x = Math.cos(degrees /180 * Math.PI)
  point.y = point.x * point.x
  degrees++

  requestAnimationFrame(generateAtoms);
};

generateAtoms();
