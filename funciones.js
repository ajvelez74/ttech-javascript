
//
// Dada la cantidad de productos a comprar, el valor por unidad de dicho
// producto y el monto con el cual paga un cliente, diseñe un algoritmo 
// que permita calcular el cambio que debe entregar.
//
function calcularCambio ( porciones , valorPorcion , dineroPaga  ) {
    if (!(porciones > 0)) {
        throw new Error("La cantidad de porciones debe ser un valor mayor a 0");
    }
    if (!(valorPorcion > 0)) {
        throw new Error("El valor de la porcion debe ser un valor mayor a 0");
    }
    if (!(dineroPaga > 0)) {
        throw new Error("El dinero con que se paga debe ser mayor a 0");
    }

    // Calcular el costo de los productos comprar
    let costoProductos = valorPorcion * porciones ;

    if (costoProductos > dineroPaga) {
        throw new Error("El dinero con que se paga es menor al costo de los productos");
    }

    // Calcular el valor que queda de cambio
    let cambio = dineroPaga - costoProductos ;
    // Devolver el resultado
    return cambio ;
}

//
// Calcular el salario a pagar a un trabajador, teniendo como base la 
// cantidad de horas laboradas a la semana y el valor de la hora. 
// Además, si la cantidad de horas laboradas excede las 40 horas, las 
// horas adicionales se pagarán con un aumento del 25% sobre el valor 
// de la hora normal.
// 
function calcularValorSalario ( horasTrabajadas , valorHora  ) { 

    if (!(horasTrabajadas > 0)) {
        throw new Error("La cantidad de horas trabajadas debe ser mayor a 0");
    }
    if (!(valorHora > 0)) {
        throw new Error("El valor de la hora debe ser mayor a 0");
    }

    let salarioTotal = 0 ;
    
    if (horasTrabajadas <= 40) {
        salarioTotal = horasTrabajadas * valorHora ;
    } else {
        // Calular el valor de las horas normales
        let salarioNoExtra = valorHora * 40 ;
        // Calcular la cantidad de horas extras
        let horasExtras = horasTrabajadas - 40 ;
        // Calcular el valor a pagar por horas extras
        let salarioHoraExtras = horasExtras * (valorHora * 1.25) ;
        // Calcular el salario total
        salarioTotal = salarioNoExtra + salarioHoraExtras ;
    }
    // Devolver el resultado
    return salarioTotal ;
}

//
// Hacer la suma de los primeros n números pares
// (para n > 0)
// 
function sumarParesWhile ( n ) { 
    let contador  = 1 ;
    let resultado = 0 ;
    let valor = 2 ;
    while (contador <= n) {
        resultado = resultado + valor ;
        contador = contador + 1 ;
        valor = valor + 2 ;
    }
    return resultado ;
}

function sumarParesFor ( n ) { 
    //let contador  = 1 ;
    let resultado = 0 ;
    let valor = 2 ;
    //while (contador <= n) {
    for (let contador  = 1  ; contador <= n ; contador ++  ) {
        resultado = resultado + valor ;
        //contador = contador + 1 ;
        valor = valor + 2 ;
    }
    return resultado ;
}

//
// Hacer la suma de todos los elementos de un arreglo
// 
function sumarElementos ( arreglo ) { 
    let suma = 0 ;
    for (let indice = 0 ; indice < arreglo.length ; indice ++ ) {
        suma += arreglo[indice] ; // suma = suma + arreglo[indice] ;
    }
    return suma;
}

function sumarElementosWhile ( arreglo ) { 
    let indice = 0 ;
    let suma = 0 ;
    while ( indice < arreglo.length  ) {
        suma += arreglo[indice] ; // suma = suma + arreglo[indice] ;
        indice ++ ; // indice = indice + 1 ;
    }
    return suma;
}

function calcularPromedio ( arreglo ) { 
    // Calcular la suma de todos los elementos del arreglo
    let suma = sumarElementosWhile(arreglo) ;
    //Calcular el promedio
    let promedio = suma / arreglo.length ;
    return promedio;
}

//
// Ejemplo del uso de lambda functions
// 
function sumarElementos ( arreglo ) { 
    // sumar todos los elementos de un arreglo usando funciones map y reduce
    suma = arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma;
}


// 
// Calcuylar el factorial de un número (n)
// Ejemplo: 5! = 5 * 4 * 3 * 2 * 1 = 1 * 2 * 3 * 4 * 5 = 120
//
function calcularFactorial ( n ) { 
    let resultado = 1 ;
    for (let i = 1 ; i <= n ; i ++ ) {
        resultado = resultado * i ;
    }
    return resultado ;
}

//
// facto(n) = n * facto(n-1)
// facto(0) = 1
// facto(1) = 1
//
function calcularFactorialRecursivo ( n ) { 
    // Condicion de parada
    if (n == 0 || n == 1) {
        return 1 ;
    } else {
        // Llamado recursivo
        return n * calcularFactorialRecursivo(n - 1) ;
    }
}
