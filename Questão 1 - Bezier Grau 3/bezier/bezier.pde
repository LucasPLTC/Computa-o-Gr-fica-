 //<>//
float p2x,p2y,p1x,p1y;

void mouseClicked(){
      if (mouseButton == LEFT) {
      p2x = mouseX;
      p2y = mouseY;
  } if (mouseButton == RIGHT) {
      p1x = mouseX;
      p1y = mouseY;
  }
  
}
  

void setup()
{
  size(800,600);
}


void draw()
{
  background(128);
  float p0x = 100;
  float p0y = 300;
  
  //float p1x = 227;
  //float p1y = 254;
  
  //float p1x = mouseX;
  //float p1y = mouseY;
  
  float p3x = 700;
  float p3y = 300;
  
  //float p2x = 539; 
  //float p2y = 222;
  

  //if(mousePressed && (mouseButton == 37)){
  //    p1x = mouseX;
  //    p1y = mouseY;

  //} else if(mousePressed && (mouseButton == 39)){
  //    p2x = mouseX;
  //    p2y = mouseY;

  //}
  if(p1x != 0 && p1y != 0 && p2x != 0 && p2y != 0 ){
  beginShape();
  vertex(p0x, p0y);
  for(float t = 0; t <= 1; t += 0.001)
  {
    float ax = p0x + t*(p1x-p0x);
    float bx = p1x + t*(p2x-p1x);
    float dx = p2x + t*(p3x-p2x);
    
    float reta1x = ax + t*(bx-ax);
    float reta2x = bx + t*(dx-bx);
    
    float bezierx = reta1x + t*(reta2x-reta1x);
    
    //float ex = bx  + t*(dx-bx);
    float cx = ax  + t*(bx-ax);

    
    float ay = p0y + t*(p1y-p0y);
    float by = p1y + t*(p2y-p1y);
    float dy = p2y + t*(p3y-p2y);
    
    float reta1y = ay + t*(by-ay);
    float reta2y = by + t*(dy-by);
    
    float beziery = reta1y + t*(reta2y-reta1y);
    
    //float ey = by  + t*(dy-by);
    float cy = ay  + t*(by-ay);
    
    //float c3x = (1-t) * cx + t* ex;
    //float c3y = (1-t) * cy + t* ey;


    vertex(bezierx,beziery);
    

  }
  vertex(p3x, p3y);
  endShape(CLOSE);
  }
}
