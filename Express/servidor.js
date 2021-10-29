var express = require("express");
var app = express();

app.get("/",inicio);
app.get("/cursos",cursos);

function inicio(peticion, resultado)
{
  resultado.send ("<strong>home</strong><br/>");
}

function cursos(peticion, resultado)
{
  resultado.send ("<strong>cursos</strong><br/>");
}

app.listen(8989);
