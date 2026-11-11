function imc (peso,altura)
 {
return peso/ (altura * altura)    
}

let peso = 86
let  altura = 1.79
let imc = imc (peso,altura)



if(imc <= 18,4){
    console.log (" Você esta no peso ideal");
}

else if ( imc <= 24.9)
{
    console.log ("  voce esa no peso ideal ")
}

else {
    console.log("  voce esta acima do peso ")
}