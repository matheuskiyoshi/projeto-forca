import { rVida, verificarLetra} from "./verificarLetra.js";

const criarBotao = (palavra) => {

    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const botoesAlfabeto = document.getElementById('botoes');

    let palavraChance = '_'.repeat(palavra.length);
  
    const letras = document.createElement('ul');
    letras.id = 'alfabeto';
  
    for (let i = 0; i < alfabeto.length; i++) {
      const letra = alfabeto[i];
  
      const listItem = document.createElement('li');
      listItem.id = 'letra-' + letra;
  
      const button = document.createElement('button');
      button.textContent = letra.toLowerCase();
  
      button.addEventListener('click', () => {
        palavraChance = verificarLetra(letra, button, palavra, palavraChance);
      });
  
      listItem.appendChild(button);
      letras.appendChild(listItem);
    }
  
    botoesAlfabeto.appendChild(letras);
  };

export default criarBotao;
