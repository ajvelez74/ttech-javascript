
//
// Dada la cantidad de productos a comprar, el valor por unidad de dicho
// producto y el monto con el cual paga un cliente, diseñe un algoritmo 
// que permita calcular el cambio que debe entregar.
//
function calcularCambio ( porciones, valorPorcion , dineroPaga  ) {
    // Calcular el costo de los productos comprar
    let costoProductos = valorPorcion * porciones ;
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
