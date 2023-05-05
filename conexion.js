document.write("<h1>Colombia</h1>")

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

/*
pincel.fillStyle= "lightgray";
pincel.fillRect(0,0,600,400);
*/

pincel.fillStyle= "#F2CB05"; // propiedad de estilo-amarillo 
pincel.fillRect(0,0,600,150); // funciòn

pincel.fillStyle= "#03258C"; //azul
pincel.fillRect(0,150,600,130);

pincel.fillStyle= "#D9042B"; //rojo
pincel.fillRect(0,280,600,120);


pincel.fillStyle= "#DCE8F2";
pincel.beginPath();
pincel.arc(300,200,100,0,2*3.14);
pincel.moveTo(300,200);
pincel.fill();

pincel.fillStyle= "#0433BF"; //azul2
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(0,0);
pincel.lineTo(0,400);
pincel.fill();

