const lista = document.querySelector('ul')


let pergunta = prompt("Com quantas cartas quer jogar?");
let numero = Number(pergunta);
while(numero < 4 || numero > 14 || numero %2===1){
    alert("Você digitou um número inválido, digite um número válido")
  numero =prompt("Com quantas cartas quer jogar?");

}