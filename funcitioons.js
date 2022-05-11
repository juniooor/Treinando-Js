/*praticando funçoes no javascript*/

/*
        SHIFT + ALT + A = COMENTAR LINHAS
function soma(valorA , valorB) {
    var valorC = valorA + valorB
    return valorC
}


var resultado = soma(5, 4)

console.log(resultado) */

class Matematica {
    soma(a, b){
        return a + b 
    }
    subtrair(a, b){
        return a - b 
    } 
    dividir(a, b){
        return a / b
    }
    multiplicar(a, b){
        return a * b
    }
}


var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(2,6)

console.log(resultado)