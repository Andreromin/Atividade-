//criar variáveis
var tSapo;
var tSapoImg;



//função que carrega imagens
function preload()
{
    //carregar imagens
tSapoImg = loadAnimation("img/sapo.png");

}


//função que inicializa o arquivo
function setup(){
    //cria tamanho do fundo da tela
    createCanvas(400,400);
    //criar sprites

    tSapo = createSprite(100,500,20,20);

    tSapo.addAnimation("tSapo",tSapoImg);

    tSapo.x = 700;
    
    //colocar tamanho
   tSapo.scale = 0.4; 
}


//função que executa o programa até que seja parado
function draw(){
    //colocar cor de fundo

    //condição para pular
    if (keyDown("space"))
    {
        tSapo.velocityY = -0.2;
    } 

    //exibir texto de instrução
    drawSprites();

    //comando que desenha sprites
}