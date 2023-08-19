import palavraAleatoria from './selecionarPalavra.js';
import criarBotao from './criarBotao.js';
import desenhaForca from './forca.js';

const resetButton = document.querySelector('#reset');

const inicializarJogo = async () => {

    desenhaForca();

    const entrada = await palavraAleatoria();
    const palavra = entrada[0];
    const descricao = entrada[1];
  
    let palavraSecreta = '';
  
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === '-') {
        palavraSecreta += palavra[i];
      } else {
        palavraSecreta += '_';
      }
    }
  
    const palavraChance = document.createElement('span');
    palavraChance.textContent = palavraSecreta;
    palavraChance.style.color = 'red';
  
    const container = document.getElementById('container');
    container.innerHTML = "";
    container.appendChild(palavraChance);
  
    const containerERR = document.querySelector('#container-errada');
    containerERR.innerHTML = "";
    
    console.log(palavra);
    const botoes = document.querySelector('#botoes');
    botoes.innerHTML = "";
    criarBotao(palavra);

    const message = document.querySelector('#vidas');
    message.innerHTML = "Você tem 6 tentativas"

    const desc = document.querySelector('#descricao');
    desc.innerHTML = descricao;

    resetButton.style.display = "none";
};

resetButton.addEventListener("click", inicializarJogo);
inicializarJogo(); 
