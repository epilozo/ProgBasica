var boton = document.getElementById('botoncito');
var texto = document.getElementById('texto_lineas');
boton.addEventListener('click',dibujoPorClick);
var d =document.getElementById('dibujito');
var anchocanvas = d.width;
var lienzo = d.getContext("2d");

dibujarLinea(colorlinea,1,1,1,300);
dibujarLinea(colorlinea,1,299,299,299);

dibujarLinea(colorlinea,1,1,300,1);
dibujarLinea(colorlinea,299,1,299,299);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);;
  var espacio = anchocanvas / lineas;
  var l = 0;
  var x ,y ;
  var colorlinea = "#FAA";

  for (l=0;l<lineas;l++)
  {
    y = espacio * l;
    x = espacio * (l + 1);
    dibujarLinea(colorlinea,0,y,x,anchocanvas);
    dibujarLinea(colorlinea,x,0,anchocanvas,y);
  /*  dibujarLinea(colorlinea,x,0,0,300-y);
    dibujarLinea(colorlinea,300,y,300-x,300);*/
    //console.log(l);
   }
}
