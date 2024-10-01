function main(){
   

    putc();
    turnLeft();
  putd();
  turnRight();
  pute();
  pute();
  pute();
  move();
  turnLeft();
  move();
  putBeeper();
     
  }
     
  
  
  function putb(){
     
     putBeeper();
     move();
     move();
     putBeeper();
     move();
     move();
    
  }
  
  function putc(){
     putb();
    turnLeft();
     putb();
   turnLeft();
    putb();
    turnLeft();
    putb();
  
  }
  
  function putd(){
     
     move();
     turnLeft();
     move();
     putBeeper();
  }
  
  function pute(){
     move();
     move();
     putBeeper();
   turnLeft();
  }
  