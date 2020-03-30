let mic;
let img;
function preload() {
  img = loadImage('data/coronavirus1.png');
}

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(240,232,208);
  fill(170,88,198);
  textFont('Open Sans');
  textSize(24);
  text('clique para começar a espirrar', width/2, height/4);

  micLevel = mic.getLevel();
  let y = height - micLevel *10* height;
  
  image(img, width/2, y, 100, 100);
  //ellipse(width/2, y, 10, 10);
}
