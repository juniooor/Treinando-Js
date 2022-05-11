/* var nome = 'willams'

switch(nome) {
    case 'JR':
        console.log('Nome correto seja Bem-vindo')
        break
    case 'junior':
        console.log('Tambem é seu nome, Seja Bem-vindo')
        break
    default:
        console.log('Nome invalido')
        break
} 

var numero = 10;

for(var i=0; i < 100; i++) {
    console.log('valor ' + i )
}

var tabuada = 6;
for(var i=0; i<=10; i++) {
    console.log('tabuada de ' + tabuada + 'x' + i + '=' + (tabuada*i))
}*/

var numeroSorteado = 9;
var valor = 0;
var achou = false

while(!achou) {
    valor += 1;
    if (numeroSorteado === valor){
        console.log('valor sorteado é ' + valor)
        achou = true;
    } else{
        console.log('O Valor não corresponde ao numero sorteado ' + valor)
    }
}
