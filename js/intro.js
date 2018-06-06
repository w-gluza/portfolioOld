var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

//Make the canvas occupy the full page
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;

var particles = [];

//Lets create some particles now
var xCount = W / 50;
var yCount = H / 50;
for (var x = 0.3; x < xCount; x++) {
  for (var y = 0.4; y < yCount; y++) {
    particles.push(new particle(x * W / xCount, y * H / yCount));
  }
}

function particle(x, y) {
  this.speed = {
    x: 0,
    y: 0
  };

  this.location = {
    x: x,
    y: y
  };

  this.radius = 0.8 + Math.random() * 1;
}
//version 3
particle.prototype.update = function() {
if(this.location.x<=0){
  this.speed.x*=-1;
}
this.location.x += this.speed.x;

if (this.location.y<=0) {
this.speed.y*=-1;
}
  this.location.y += this.speed.y;

// version 2

//   if (this.location.x<=0) {
//   this.location.x += this.speed.x*=-1;
// } else {
//   this.location.x += this.speed.x;
// }
// if (this.location.y<=0) {
// this.location.y += this.speed.y*=-1;
// } else {
//   this.location.y += this.speed.y;
// }

//version 1
  // this.location.y += this.speed.y;
  // this.location.x += this.speed.x;
}



particle.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.location.x, this.location.y, this.radius, Math.PI * 2, false);
  ctx.fill();
}

particle.prototype.explode = function() {
  this.speed = {
    x: (Math.random() - 0.5) * this.radius,
    y: (Math.random() - 0.5) * this.radius,
  }
}


function draw() {

  var gradient = ctx.createLinearGradient(0, 0, 0, 1100);
  gradient.addColorStop(0, '#020111');
  gradient.addColorStop(1, '#3a3a52');
  // ctx.fillStyle = "blue";
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "white";
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];

    p.update();

    p.draw(ctx);
  }
}

particles.forEach(function(p) {
  var distance = Math.sqrt(Math.pow(p.location.x - W / 2, 2) + Math.pow(p.location.y - H / 2, 2));

  setTimeout(function() {
    p.explode();
  }, distance * 3 + 300 + Math.random() * 100)
});


setInterval(draw, 33);
