// Crie uma função para verificar se um valor é Truthy
// function isTruthy(dado){
//     return !!dado
// }
// console.log(isTruthy("bola"))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// const calculoPerimetro = (lados)=>{
//     return lados*lados
// }

// console.log(calculoPerimetro(4))

//ou
// const calculoPerimetro = (lados)=>{
//     return lados*4
// }

// console.log(calculoPerimetro(3))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// const nomeCompleto = (nome, sobrenome)=>{
//     return nome + sobrenome
// }

// console.log(nomeCompleto("Maria ","Souza"))

//ou

// const nomeCompleto = (nome, sobrenome)=>{
//     return `${nome} ${sobrenome}`
// }

// console.log(nomeCompleto("Maria","Souza"))


// Crie uma função que verifica se um número é par
// const verificadorNumeroPar = (numero)=>{
//     if(numero%2 === 0){
//         console.log("numero par")
//     }else{
//         console.log("numero impar")
//     }
// }

//  console.log(verificadorNumeroPar(0))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// const tipoDeDados = (dado)=>{
//     return typeof dado
// }



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
    // addEventListener('scroll', function(){
    //     console.log("maria souza")
    // });

    

// Corrija o erro abaixo
let totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }

  function jaVisitei(paisesVisitados) {

    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  