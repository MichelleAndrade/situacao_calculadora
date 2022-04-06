let visor = ''
let valor1 = null
let valor2 = null
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''

const reset = function(){
    visor = ''
    valor1 = null
    valor2 = null
    resultado = 0
    operacao = ''
    labelVisor.innerHTML= visor 
}

const clickn7 = function(){
    visor = visor + '7'
    labelVisor.innerHTML= visor 
}
const clickn8 = function(){
    visor = visor + '8'
    labelVisor.innerHTML= visor    
}

const clickn9 = function(){
    visor = visor + '9'
    labelVisor.innerHTML= visor     
}
const clickn6 = function(){
    visor = visor + '6'
    labelVisor.innerHTML= visor     
}
const clickn5 = function(){
    visor = visor + '5'
    labelVisor.innerHTML= visor     
}
const clickn4 = function(){
    visor = visor + '4'
    labelVisor.innerHTML= visor     
}
const clickn3 = function(){
    visor = visor + '3'
    labelVisor.innerHTML= visor     
}
const clickn2 = function(){
    visor = visor + '2'
    labelVisor.innerHTML= visor     
}
const clickn1 = function(){
    visor = visor + '1'
    labelVisor.innerHTML= visor     
}
const clickn0 = function(){
    visor = visor + '0'
    labelVisor.innerHTML= visor     
}


const clickOpDiv = function(){
    operacao = 'divisao'  
    if(valor1=== null ){
        let numero = parseFloat(visor)
        valor1 = numero
        visor= ''

    } 
    
}
const clickOpMult = function(){
    operacao = 'multiplicacao'   
    if(valor1=== null ){
        let numero = parseFloat(visor)
        valor1 = numero
        visor= ''
    }
}
const clickOpSom= function(){
    operacao = 'soma'   
    if(valor1=== null ){
        let numero = parseFloat(visor)
        valor1 = numero
        visor= ''
    }
    
}
const clickOpSub = function(){
    operacao = 'subtracao'   
    if(valor1=== null ){
        let numero = parseFloat(visor)
        valor1 = numero
        
        visor= ''
    }
    
}

const igual = function () {
    if(valor2 === null && visor!==''){
        let numero = parseFloat(visor)
        valor2 = numero
        conta(valor1,valor2)
        labelVisor.innerHTML = resultado
        valor1 = resultado
        visor=''
    }else if (valor2 !== null && visor !==''){
        let numero = parseFloat(visor)
        valor2=numero
        conta(valor1,valor2)
        labelVisor.innerHTML = resultado
        valor1 = resultado
        visor=''
        
    }else{
        conta(valor1, valor2)
        labelVisor.innerHTML = resultado
        valor1 = resultado
    }
    

 }
 const conta = function (num1 , num2)  {
     switch(operacao){
            case 'soma':
                resultado = num1+num2;
                break;
            case 'subtracao':
                resultado = num1-num2;
                break ; 
            case 'multiplicacao':
                resultado = num1*num2;
            break;
            case 'divisao':
                resultado = num1/num2;
            break;   
     }
     
}
    
  
    