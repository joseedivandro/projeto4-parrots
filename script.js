
// criação primária de variáveis

const lista = document.querySelector('ul')
let primeiraCartaVira;
let segundaCartaVira;


let numero =0;
let primeiraFila = []


while(numero < 4 || numero > 14 || numero %2 !==0){

  numero =prompt("Com quantas cartas quer jogar? digite um número par entre 4 e 14");

}

let contajogadas = 0;

let armazenaPares = [];

const imgVerso=[
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
   
]


let imagensVerso = imgVerso.sort(() => Math.random() - 0.5);
let divide = (numero / 2);

for (contador = 0; contador < divide; contador++) {
    primeiraFila.push(imagensVerso[contador]);
}


let segundaFila = primeiraFila.sort(() => Math.random() - 0.5);


let arrayTotal = primeiraFila.concat(segundaFila);

let arrayParauso = arrayTotal.sort(() => Math.random() - 0.5);
console.log(arrayParauso);





let criaCarta = () => {
    const carta = document.createElement('li')
    const frente = document.createElement('div');
    const verso = document.createElement('div');

    frente.className = 'face front';
    verso.className = 'face back hidden';
    const imagemBack = document.createElement('img');

    const gif = document.createElement('img');

     carta.setAttribute('data-test', 'card');


    imagemBack.setAttribute("src", "./img/back.png");
    imagemBack.setAttribute('data-test', 'face-down-image');

    gif.setAttribute("src", `./img/${arrayParauso[i]
        }`)
    gif.setAttribute('data-test', 'face-up-image');

    lista.appendChild(carta);
    carta.appendChild(frente);
    carta.appendChild(verso);
    frente.appendChild(imagemBack);
    verso.appendChild(gif);
    carta.setAttribute('onclick', 'viraFace(this)'); // GERA O NUMERO PEDIDO COM AS IMAGENS

}
for (i = 0; i < numero; i++) {
    criaCarta();
}




function viraFace(img) {
    if (primeiraCartaVira == undefined) {
        img.classList.add('mostra')
        img.querySelector('.back').classList.remove('hidden');
        primeiraCartaVira = img;
        contajogadas++
        return false;
    } else if (segundaCartaVira == undefined) {
        img.classList.add('mostra')
        img.querySelector('.back').classList.remove('hidden');
        segundaCartaVira = img;
        contajogadas++
    }
    verificaPares()
}


function desvira() {
    setTimeout(() => {
        primeiraCartaVira.classList.remove('mostra');
        primeiraCartaVira.querySelector('.back').classList.add('hidden');
        segundaCartaVira.classList.remove('mostra');
        segundaCartaVira.querySelector('.back').classList.add('hidden');

        primeiraCartaVira = undefined;
        segundaCartaVira = undefined;
    }, 1000);

}

function verificaPares() {
    let pareou = primeiraCartaVira.innerHTML === segundaCartaVira.innerHTML
    console.log(pareou)
    if (pareou == false) {
        desvira()
    } else if (pareou == true) {
        primeiraCartaVira.removeAttribute("onclick");
        segundaCartaVira.removeAttribute("onclick");
        primeiraCartaVira = undefined;
        segundaCartaVira = undefined;
        armazenaPares.push("Par!");
        if (armazenaPares.length == divide) {
            setTimeout(() => {
                alert(` Você ganhou em ${contajogadas} jogadas!`)
            }, 500);
        }
    }
}