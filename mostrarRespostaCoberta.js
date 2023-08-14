import palavraAleatoria from './selecionarPalavra.js';
import criarBotao from './criarBotao.js';

const inicializarJogo = () => {
    const palavra = palavraAleatoria();
  
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
    container.appendChild(palavraChance);
  
    console.log(palavra);
    criarBotao(palavra);
};

inicializarJogo(); 