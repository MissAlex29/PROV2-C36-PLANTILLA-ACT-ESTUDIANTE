//Clase o molde para el formulario de registro 
class Form {
  constructor() {
    //Mostrara un cuadro vacio con el texto ingresa tu nombre
    //.input recopila la entrada del usuario
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    //Crea un botón con el texto "Jugar"
    this.playButton = createButton("Jugar");
    //Coloca una imagen de encabezado con título del juego
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    //Tamaño del encabezado, puede ser h1,h2,h3
    this.greeting = createElement("h2");
  }
  
  //Función para asignar posiciones a los elementos
  setElementsPosition() {
    //Posición del título
    this.titleImg.position(120,50);
    //Posición del cuadro para entrada del usuario 
    this.input.position(width / 2 - 110, height / 2 - 80);
    //Posición del botón play 
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    //Posición de encabezado
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
  
  //Función para asignar estilos de visualización a los elementos
  setElementsStyle() {
    //Estos estilos vienen de style.css - mostrar rápido
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }
  //se utiliza con cada elemento para ocultar/eliminar el elemento del canvas
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //Función para detectar cuando el mouse da click
  

  //Mostrar
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    
  }

  
}
