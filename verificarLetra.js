let vidas = 7;
function verificarLetra(letra, button, palavra, palavraChance) {
    // Processamento da letra na palavra
    let letraNaPalavra = false;
    let tentativaDeResposta = '';

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra || palavra[i] === '-') {
            tentativaDeResposta += palavraChance[i] === letra ? letra : palavra[i];
            if (palavra[i] === letra) {
                letraNaPalavra = true;
            }
        } else if (
            palavra[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '') === letra ||
            palavra[i].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === letra
        ) {
            tentativaDeResposta += palavraChance[i] === letra ? letra : palavra[i];
            if (palavra[i] === letra) {
                letraNaPalavra = true;
            }
        } else {
            tentativaDeResposta += palavraChance[i];
        }
    }

    // Atualiza a interface
    const palavraChanceTentativa = document.querySelector('#container span');
    palavraChanceTentativa.textContent = tentativaDeResposta;

    // Adiciona a letra errada, se necessário
    const vidasSpan = document.getElementById('vidas');
    if(tentativaDeResposta === palavra){
        vidasSpan.textContent = `Parabéns! Você adivinhou a palavra "${palavra}"!`;
        const buttons = document.querySelectorAll('#alfabeto button');
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else if (!letraNaPalavra) {
        vidas--;

        if(vidas === 0){
            vidasSpan.textContent = `Você perdeu. A palavra era "${palavra}". Tente novamente!`;
            const buttons = document.querySelectorAll('#alfabeto button');
            buttons.forEach(button => {
                button.disabled = true;
            });
        } else{
            vidasSpan.textContent = `Você tem ${vidas} ${vidas === 1 ? 'tentativa' : 'tentativas'}.`;  
        }

        const letraErrada = document.createElement('span');
        letraErrada.textContent = letra;
        letraErrada.style.textDecoration = 'line-through';
        letraErrada.style.textDecorationColor = 'red';
        letraErrada.style.textDecorationThickness = '1px';
        letraErrada.style.textDecorationStyle = 'dashed';

        const containerErrada = document.getElementById('container-errada');
        containerErrada.appendChild(letraErrada);
    }
    button.disabled = true;
    return tentativaDeResposta;
}

export default verificarLetra;