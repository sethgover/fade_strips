let c1,c2,splits,dim,curr_y,opp,off,qH;

function setup() {
  createCanvas(400,400);
  //noLoop();
  noStroke();
  
  c1 = color(127, 37, 49);//217, 103, 135);
  //c1 = color(0, 100, 169);
  c2 = color(176, 203, 212);//0, 171, 201);
  
  c1 = color(199, 50, 31);
  c2 = color(201, 211, 212);
  
  c1 = color(0, 130, 150);
  c2 = color(239, 207, 122);
  qH = 70;
  //splits = 6;
  //off=100;
}


function draw() {
  splits = round(map(mouseY,0,height,0,20));
  off = round(map(mouseX,0,width,0,100));
  dim = 0;
  for(let x = splits+1; x>=1; x--){
    dim += x; 
  }
  dim = dim*2;
  dim = (height-(off*2))/dim;
  curr_y = 0;
  opp = 1;
  
  fill(c1);
  rect(0,0,width,off);
  push();
  translate(width,height);
  rotate(PI);
  fill(c2);
  rect(0,0,width,off);
  pop();
  
  for(let x = splits+1; x>=1; x--){
    fill(c1);
    rect(0,curr_y*dim+off,width,x*dim);
    
    push();
    translate(width,height);
    rotate(PI);
    fill(c2);
    rect(0,curr_y*dim+off,width,x*dim);
    pop();
    
    fill(0);
    
    if(x == splits+1){
      text(round(map(x*dim+off,0,height,0,qH)*100)/100,10,curr_y*dim+off+15);
    }
    else{
      text(round(map(x*dim,0,height,0,qH)*100)/100,10,curr_y*dim+off+15);
    }
    curr_y = curr_y + x + opp;
    opp++;
  }
  fill(0);
  //text(round(map(off,0,height,0,qH)*100)/100,width-30,15);
}
