// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// let suaIdade = prompt("Digite sua idade")
// let idadeParente = prompt("Digite a idade de um parente")

// if(suaIdade > idadeParente){
// console.log("sua idade é maior")
// }else if(suaIdade ==idadeParente){
// console.log("sua idade é igual")
// }else{
// console.log("sua idade é menor")
// }

// Qual valor é retornado na seguinte expressão?
let expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log("o resultado é:", expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = "Andre";
let idade = 28;
let possuiDoutorado = false;
let empregoFuturo;
let dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
let brasil = 207;
let china = 1340;

if(brasil > china){
  console.log("Brasil é maior")
}else{
  console.log("A china que é maior")
}



// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
