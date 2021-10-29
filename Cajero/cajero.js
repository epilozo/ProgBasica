class billete
{
  constructor(v,c)
  {
   this.valor = v;
   this.cantidad = c;
 }
}

var caja = [];
caja.push(new billete(50,3));
caja.push(new billete(20,2));
caja.push(new billete(10,2));

var dinero    = 0;
var entregado = [];
var div       = 0;
var papeles   = 0;


var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);


function entregarDinero()
{
 var d = document.getElementById("dinero");
 dinero = parseInt(d.value);
 for (var i of caja)
  {
   if (dinero > 0)
   {
    div = Math.floor(dinero / i.valor);
    if (div <  i.cantidad)
      {
        papeles = div;
      }
      else
       {
        papeles = i.cantidad;
       }
      entregado.push(new billete(i.valor,papeles));
      dinero -= (i.valor*papeles);
    }
  }

 if (dinero > 0)
  {
    //console.log("soy pobre no tengo platA");
    resultado.innerHTML = "soy pobre no tengo platA";
  }
  else {
       for (var e of entregado)
        {
          if (e.cantidad > 0)
          {
        //  console.log(entregado);
          resultado.innerHTML += e.cantidad + " billetes de " + e.valor + "<br>";
          }
        }
     }
}
