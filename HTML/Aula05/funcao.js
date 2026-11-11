
//  Declaração de  variaveis
let nome = "Ketelin"
let soma =  "5+5"

//  exibição do valor amarzenado
console.log (nome);
console.log (soma)

//  estrutura de decisão
if(soma >5 ){

    console.log (" A soma é maior que 5 ")
}

else  ( soma < 5)  {
  console.log ( " a soma é menor que 5 ")
}

//   Laço de repetiçao

for ( let i=0; i <0; i++) {
    console.log (" O valor de i é : " + i)
}

// Função se refere a uma logica que é repetida e mais de uma vez dentro  da aplicação. 
function somador (a,b) 
{
    return a+b 
}
//  A função  tambem pode ser invocada dentro de outras funções ou métodos , como no exemplo abaixo, onde invocamos a função somador dentro do console.log

let total = somador (5,5)
console.log (total);

 console.log(somador (15,25) );

