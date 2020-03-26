let mic;
let img;
function preload() {
  img = loadImage('data/coronavirus1.png');
}

function setup(){
  let cnv = createCanvas(800, 600);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(125);
  fill(255);
  text('clique para começar a espirrar', width/2, 20);

  micLevel = mic.getLevel();
  let y = height - micLevel *5* height;
  
  image(img, width/2, y, 100, 100);
  //ellipse(width/2, y, 10, 10);
}
