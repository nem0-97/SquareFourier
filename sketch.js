let ys=[];
let n;
let theta=0;

function setup() {
  createCanvas(innerWidth,innerHeight);
}

function draw() {
  n=document.getElementById('n').value
  background(0);
  translate(width/2,height/2);

  let x=0;
  let y=0;

  for(let i=0;i<n;i++){
    let use=2*i+1;
    let radius=200*4/(use*PI);
    let co=cos(use*theta);
    let si=sin(use*theta);
    //draw circle
    stroke(co*127+128,si*127+128,co*127+128);
    noFill();
    ellipse(x,y,radius*2);
    //draw line from circle center to point
    fill(co*127+128,si*127+128,co*127+128);
    let preX=x;
    let preY=y;
    //travel along points from circle to circle to get final point
    x+=radius*co;
    y+=radius*si;
    line(preX,preY,x,y);
    ellipse(x,y,8);
  }
  ys.unshift(y);
  noFill();
  beginShape();
  for(let i=0;i<ys.length;i++){
    vertex(x+i,ys[i]);
  }
  endShape();
  theta-=.01;
  if(ys.length>3*width/2){//maybe if longer than width+sum of the circle radii( if really care about it always filling whole screen even ass spins)
    ys.pop();
  }
}
