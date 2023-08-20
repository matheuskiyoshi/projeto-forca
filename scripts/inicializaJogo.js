import palavraAleatoria from './selecionarPalavra.js';
import criarBotao from './criarBotao.js';
import desenhaForca from './forca.js';
import { rVida } from './verificarLetra.js';

const resetButton = document.querySelector('#reset');

const inicializarJogo = async () => {

    const confetti = document.querySelector('#canvas');
    confetti.style.zIndex = -1; 

    resetButton.style.display = "none";

    rVida(6);

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
    
    const botoes = document.querySelector('#botoes');
    botoes.innerHTML = "";
    criarBotao(palavra);

    const message = document.querySelector('#vidas');
    message.innerHTML = "Você tem 6 tentativas"

    const desc = document.querySelector('#descricao');
    desc.innerHTML = descricao;

    resetButton.style.display = "block";
};

resetButton.addEventListener("click", inicializarJogo);
inicializarJogo(); 
