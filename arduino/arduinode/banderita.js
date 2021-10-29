var jf = require("johnny-five");
var circuito = new jf.Board();
var bombillito,motorcito,celda;
var turno = 0;

circuito.on("ready", prender);


function prender()
{
  var configuracion = {pin:"A0",freq:50};
  celda. new jf.Sensor(configuracion);

  bombillito = new jf.Led(13);
  bombillito.on();
  motorcito = new jf.Servo(9)
  motorcito.to(90);


  ondear();
}

function ondear()
{
 //console.log("el valor de la celda"+ celda.value);
 var luz = celda.value;
 if (luz > 800)
 {
    if (turno)
    {
      turno = 0;
      motorcito.to(70);
    }
    else {
        turno = 1;
        motorcito.to(90);
    }

 }
 else {
   {
     motorcito.to(30);
   }
 }
 setTimeout(ondear,1000);
}
