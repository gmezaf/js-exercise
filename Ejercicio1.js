var respuesta = CantidadMayusculas("Esto es Una Prueba de Letras Mayuculas")
console.log("Tu cadena contiene "+respuesta+" letras mayusculas")

function CantidadMayusculas(cadena)
{
  var i=0;
  var cont=0;
  var character='';
  while (i < cadena.length)
  {
    character = cadena.charAt(i);
    if (isNaN(character) && character === character.toUpperCase()) 
    {
        cont++;
    }
    i++;
  }
  return cont;
}