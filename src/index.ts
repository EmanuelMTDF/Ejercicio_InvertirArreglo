// EJERCICIO "INVERTIR ARREGLO"

/*
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

let dimensionArreglo: number = Number(
  prompt("Por favor, ingrese el tamaño de su arreglo:")
);
let arregloIngresado: number[] = new Array(dimensionArreglo);

function crearArreglo(dimensionN: number) {
  let listaN: number[] = new Array(dimensionN);
  let indice: number = 0;
  for (indice; indice < listaN.length; indice++) {
    listaN[indice] = Number(
      prompt(`"Por favor, ingrese el número en la posición ${indice}:`)
    );
  }
  return listaN;
}

function invertirArreglo(listaN: number[]) {
  let indice2: number = listaN.length;
  let arregloInvertido: number[] = new Array(indice2);
  for (let i = 0; i < listaN.length; i++) {
    arregloInvertido[i] = listaN[indice2 - 1];
    indice2 = indice2 - 1;
  }
  return arregloInvertido;
}

arregloIngresado = crearArreglo(dimensionArreglo);
arregloIngresado = invertirArreglo(arregloIngresado);

console.log(
  "El arreglo ingresado por el usuario mostrado a la inversa es:",
  arregloIngresado
);
