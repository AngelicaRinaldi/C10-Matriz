// Cria matriz com notas 
var notas = [90,85,75,78,80];

function score_average() {
  // Soma todas as notas
  var soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
  // Calcula a média
  var media = soma/notas.length;            // matriz.length = quantidade de elementos (notas) 
}

function setup() {
  createCanvas(400,400);
  score_average();
}

function draw() {
  background(51);
}


// 
var pesos = [35,38,40,45];
function setup() {
  createCanvas(400,400);
  //
  var sum = pesos[0] + pesos[1] + pesos[2] + pesos[3];
  //
  var avg = sum/pesos.length;
}
function draw()  {
    background(51);
}