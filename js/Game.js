class Game {
  constructor() {}
  
  //Creamos objetos 
  start() {
    //Objeto para el formulario de registro
    form = new Form();
    form.display();

    //Objeto para el jugador 
    player = new Player();
  }
}
