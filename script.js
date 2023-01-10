let perguntarQuantidade ="";


perguntarQuantidade = prompt("Qual a quantidade de cartas que deseja jogar?");

while(perguntarQuantidade %2 !=0){
    alert("Número ímpar inválido para este logo, insira um número par");
perguntarQuantidade = prompt("Qual a quantidade de cartas que deseja jogar?");

}

while(perguntarQuantidade < 4 || perguntarQuantidade > 14){
    alert("Quantidade de cartas inválida, insira um valor entre 4 e 14");
    perguntarQuantidade = prompt("Qual a quantidade de cartas que deseja jogar?");
}