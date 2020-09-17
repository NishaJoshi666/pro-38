var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bicks, bick1, bick2, bick3, bick4;
var bick1Img,bick2Img,bick3Img,bick4Img;
var groundImg,trackImg;

function preload(){
  bick1Img = loadImage("images/bick1.png");
  bick2Img = loadImage("images/bick1.png");
  bick3Img = loadImage("images/bick1.png");
  bick4Img = loadImage("images/bick1.png"); 

  groundImg = loadImage("images/ground.png");
  trackImg = loadImage("images/track.jpg");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
