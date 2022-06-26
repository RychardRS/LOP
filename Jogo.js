var posX, posY, contagem=0, cont=0, fase=1, posX2, posY2, vidas=3, contDist=0, cor=0, cor2=50, cor3=175, cor4=100, tela=1, maiorPontuação=-1;
var disparo=false , posX3, posY3;

function setup() {
	
  createCanvas(640, 480);
	 posX = 30;
   posY = 454;
   posX2=280;
   posY2=450;
   posX3=posX2;
   posY3=posY2;
}

function draw() {
  //tela inicial do jogo
  if(tela==1){
  background(cor); 
  text("JOGO DO BLOCO", 257, 200); 
  text("Aperte ENTER para iniciar o jogo", 220, 250);
  fill(0, 0, 255);
  if(keyIsDown(13)){
    tela=2;
  }
  }
  //agora se iniciará a parte "jogável"
  if(tela==2){
  background(cor2);
  text("Pontuação: "+contagem, 520, 30);
  text("Fase: "+fase, 520, 60);
  text("Vidas:"+vidas, 520, 90);
  rect(posX,posY, 60, 60);
  fill(0,0,255);
  ellipse(posX2, posY2, 50, 50);
  fill(0,255,0);

  //a movimentação do bloco ao longo do eixo Y
  for(i=0;i<5;i++){

  }
  if(posY < 480 && posX<640){  
  posY = posY + 3;
  }else{
    posX=random(0, 620);
    posY=0;
  }
  //movimentação do jogador 
  if (keyIsDown(65)){
    posX2=posX2-8
    if(fase==3){
      posX2=posX2-3;
    }
  }

  if (keyIsDown(68)){
    posX2=posX2+8
    if(fase==3){
      posX2=posX2+3;
    }
  }
  //criando a colisão para o jogador
    if(dist(posX+30, posY+30, posX2, posY2)<=27+25 && contDist==0){
    if(fase==1 || fase==2 || fase==3){
    alert("Você colidiu");
    vidas--;
    contDist++;
    if(posX2+70>620){
      posX2=posX-90;
    }else{
      posX2=posX+90;
    }
    posY2=450;
  }
  }
  if(dist(posX+30, posY+30, posX2, posY2)<=27+25 && contDist==1){
    if(fase==1 || fase==2 || fase==3){
    alert("Você colidiu");
    vidas--;
    contDist++;
    if(posX2+70>620){
      posX2=posX-90;
    }else{
      posX2=posX+90;
    }
    posY2=450;
    }
  }

   if(dist(posX+30, posY+30, posX2, posY2)<=27+25 && contDist==2){
    if(fase==1 || fase==2 || fase==3){
    alert("Você colidiu");
    vidas--;
    contDist++;
    if(posX2+70>620){
      posX2=posX-90;
    }else{
      posX2=posX+90;
    }    posY2=450;
    }
  }  
  //jogador perdeu todas as vidas
    if(vidas==0){
      tela=3;
      if(fase==1 || fase==2 || fase==3){
      contagem=0;
      fase=1;
      posX2=300;
      posY2=450;
      vidas=3;
      }
    }          
  //guardando maior pontuação para apresentar ao usuário
  if(maiorPontuação<=contagem){
    maiorPontuação=contagem;
  }
  //criando o disparo
  if (mouseIsPressed && (! disparo) ){ 
    disparo = true; 
    posX3 = posX2;
    posY3 = posY2;     
  }
  if (disparo) {
    posY3 = posY3-15;
    if (posY3 < 0) {
      disparo = false; 
    }
  } 
  if (disparo) { 
    fill(0, 0, 255);
    ellipse(posX3,posY3,10,10);

    
  }
  //criando a colisão para o disparo
  if(dist(posX+30, posY+30, posX3, posY3)<=30+5){
    if(fase==1 || fase==2 || fase==3){
    contagem++;
    posX=random(0, 640);
    posY=500;
    posX2=posX2;
    posY2=posY2;
    posX3=posX2;
    posY3=posY2;  
  }
  }
    
	//bloqueando que o jogador saia do limite do canvas
  if(posX2>630){
    posX2=630;
  }
  if(posX2<10){
    posX2=10;
  }
  //fazendo a contagem da pontuação e das fases, assim como as alterações de velocidade do inimigo
    if(contagem>=20 && cont==0){
      alert("Você passou de fase, parabéns!!");
      cont++;
      fase++;
    }
    if(contagem>=30 && cont==1){
      alert("Você passou de fase, parabéns!!");
      cont++;
      fase++;
    }
    if(fase==2){
      if(posY < 480){
        posY = posY + 2;
        }else{
        posX=random(0, 620);  
        posY=0;
  }
    }
    if(fase==3){
      if(posY<480){
        posY=posY+3;
      }else{
        posX=random(0, 620);
        posY=0;
      }
    }
}
//termino da tela 2
//término do jogo, o jogador perdeu
if(tela==3){
  background(cor3);
  text("GAME OVER", 257, 250);
  text("Aperte W para saber sua pontuação", 195, 270)
  fill(255, 0, 0);
  if(keyIsDown(87)){
    tela=4;
  }
}
//tela de conclusão do jogo e apresentação da pontuação do jogador
if(tela==4){
        background(cor4);
        text("Sua pontuação foi: "+maiorPontuação, 250, 250);
        text("Aperte F5 para recomeçar o jogo", 215, 270);
        fill(0, 0, 255);

        if(keyIsDown(116)){
          tela=1;
     }   
     }

}

  
