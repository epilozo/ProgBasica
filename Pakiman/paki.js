var imagenes = [];
imagenes["Cauchin"]="vaca.png";
imagenes["Pokacho"]="pollo.png";
imagenes["Tocinauro"]="cerdo.png";

var colleccion = [];
colleccion.push(new Pakiman("Cauchin",100,30));
colleccion.push(new Pakiman("Pokacho",80,50));
colleccion.push(new Pakiman("Tocinauro",120,40));

for (var p of colleccion)
{
  p.mostrar();
}
