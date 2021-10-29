var teclas = {
  UP:   38,
  DOWN: 40,
  RIGHT:39,
  LEFT: 37
};
var p     = document.getElementById('villaplatzi');
var papel = p.getContext("2d");
document.addEventListener("keydown",moverCerdo);
var Maximo= 5;
var a     = aleatorio(1,Maximo);
var x,y   = 150;
var xc,yc ;
var fondo = {
  url    : "tile.png",
  cargaOk: false
};
var vaca = {
  ejex : new Array(),
  ejey : new Array(),
  url  : "vaca.png",
  cargaOk: false
};
var cerdo = {
  url  : "cerdo.png",
  cargaOk: false
};
var pollo = {
  ejex : new Array(),
  ejey : new Array(),
  url  : "pollo.png",
  cargaOk: false
};

fondo.imagen     = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen     = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen     = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen     = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

function cargarFondo()
{
  fondo.cargaOk= true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk= true;
  for (v=0; v < a; v++)
  {
   var x = aleatorio(0,7);
   var y = aleatorio(0,7);
   x     = x * 60;
   y     = y * 60;
   vaca.ejex[v] = x;
   vaca.ejey[v] = y;
  }
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk= true;
  var x = aleatorio(0,7);
  var y = aleatorio(0,7);
  xc    = x * 60;
  yc    = y * 60;

  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk= true;
  for (v=0; v < a; v++)
  {
   var x = aleatorio(0,7);
   var y = aleatorio(0,7);
   x     = x * 60;
   y     = y * 60;
   pollo.ejex[v] = x;
   pollo.ejey[v] = y;
  }
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOk)
   {
      papel.drawImage(fondo.imagen,0,0)
   }
  if (vaca.cargaOk)
   {
    for (v=0; v < a; v++)
      papel.drawImage(vaca.imagen,vaca.ejex[v],vaca.ejey[v]);
   }
 if (cerdo.cargaOk)
   {
      papel.drawImage(cerdo.imagen,xc,yc);
   }
 if (pollo.cargaOk)
  {
    for (v=0; v < a; v++)
      papel.drawImage(pollo.imagen,pollo.ejex[v],pollo.ejey[v]);
  }
}

function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return(resultado);
}

function moverCerdo(evento)
{
  var colorcito  = "blue";
  var movimiento = 30;
  switch (evento.keyCode)
   {
    case teclas.UP:
        yc = yc - movimiento;
        break;
    case teclas.DOWN:
        yc = yc + movimiento;
        break;
    case teclas.LEFT:
        xc = xc - movimiento;
        break;
    case teclas.RIGHT:
        xc = xc + movimiento;
       break;
    default: console.log("otra tecla");
   }
   dibujar();
}
