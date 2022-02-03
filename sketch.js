//Variables globales 
var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

//Función para precargar recursos multimedia 
function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

//configuración principal 
function setup() {
  //Lienzo - espacio de trabajo
  canvas = createCanvas(windowWidth, windowHeight);
  //lamacenamos la base de datos en una variable 
  database = firebase.database();

  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

//Ajusta altura y ancho de la ventana automáticamente 
function windowResized() {
  //Crea un nuevo canvas con los ajustes 
  resizeCanvas(windowWidth, windowHeight);
}
