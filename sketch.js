var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;
var form, player, game;
var brackgroundImg;
var bg1_img, bg2_img;
var slings;
var sling1,sling2,sling3;
var slinga,slingb,slingc;

var sling1_img,sling2_img,sling3_img;
var slinga_img,slingb_img,slingc_img;



function preload() {
bg1_img = loadImage("images/Formbg.png");
bg2_img = loadImage("images/Gamebg.png");
sling1_img = loadImage("images/sling1.png");
sling2_img = loadImage("images/sling2.png");
sling3_img = loadImage("images/sling3.png");
slinga_img = loadImage("images/sling1.png");
slingb_img = loadImage("images/sling2.png");
slingc_img = loadImage("images/sling3.png");
}

function setup(){
  canvas = createCanvas(1536,860);

  database = firebase.database();
  game = new Game();  
  game.getState();
  game.start();
}


function draw(){
background(bg1_img);
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
if(gameState === 2){
  game.end();
}
}
