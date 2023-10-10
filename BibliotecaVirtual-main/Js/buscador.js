function buscador () {
  // eliminamos las filas en caso de ya haber usado el buscador
  document.getElementById("registro").innerHTML = '';

  // tomamos lo que ingresa el usuario quitando espacios en blanco al principio y final 
   var palabraUsuario = document.getElementById("buscar").value.trim();
  //  guardamos el tamaño de lo ingresado
   var tampalabraUsuario = palabraUsuario.length;
  //  con el for vamos recorriendo el array de objetos que tomamos de ArrayDeLibros.js
   for(indice in libros){
    //tomamos el nombre del primer libro
    var nombre = libros[indice].nombre;
    //en str guardamos el nombre del libro pero solo tomando desde la primer letra (0) hasta el tamaño del string que ingreso el usuario. EJEMPLO libro JavaScript Inspirate
    //  el usuario ingresa tres letras eso .length da 3. Asique en esa variable str se guarda jav
    var str = nombre.substring(0,tampalabraUsuario);
    // aca comparamos que lo ingresado por el usuario no sea mas largo que el titulo del libro ni que no haya letras tanto en lo ingresado por el usuario como en el .nombre del objeto
    if(tampalabraUsuario <= nombre.length && tampalabraUsuario != 0 && nombre.length != 0){
      // igualamos ambos a minuscula para compararlas y asi ir creando los elementos html y dando valor a lo que corresponde (los td)
      if(palabraUsuario.toLowerCase() == str.toLowerCase()){
        var fila = document.createElement("tr");
        var columna1Fila = document.createElement("td");
        var columna2Fila = document.createElement("td");
        var columna3Fila = document.createElement("td");
        var columna4Fila = document.createElement("td");
        var nombrefila = document.createTextNode(libros[indice].nombre);
        columna1Fila.appendChild(nombrefila);
        var generofila = document.createTextNode(libros[indice].genero);
        columna2Fila.appendChild(generofila);
        var escritorfila = document.createTextNode(libros[indice].escritor);
        columna3Fila.appendChild(escritorfila);
        var editorialfila = document.createTextNode(libros[indice].editorial);
        columna4Fila.appendChild(editorialfila);
        // agrego a la fila las columnas
        fila.appendChild(columna1Fila);
        fila.appendChild(columna2Fila);
        fila.appendChild(columna3Fila);
        fila.appendChild(columna4Fila);
        // agregamos al tbody la fila con sus columnas con los datos que corresponden
        document.getElementById("registro").appendChild(fila);
       }
    }
  }
  
}


