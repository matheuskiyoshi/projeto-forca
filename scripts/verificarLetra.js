import initConfetti from "./confetti.js";

let vidas = 6;

export const rVida = () => {
    vidas = 6;
}

export const verificarLetra = (letra, button, palavra, palavraChance) => {

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
            palavra[i].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === letra
        ) {
            tentativaDeResposta += palavra[i];
            letraNaPalavra = true;
        } else {
            tentativaDeResposta += palavraChance[i];
        }
    }

    // Atualiza a interface
    const palavraChanceTentativa = document.querySelector('#container span');
    palavraChanceTentativa.textContent = tentativaDeResposta;

    // Adiciona a letra errada, se necessário
    const vidasSpan = document.getElementById('vidas');
    
    if (tentativaDeResposta === palavra){
        vidasSpan.textContent = `Parabéns! Você adivinhou a palavra "${palavra}"!`;
        const buttons = document.querySelectorAll('#alfabeto button');
        buttons.forEach(button => {
            button.disabled = true;
        });
        const confetti = document.querySelector('#canvas');
        confetti.style.zIndex = 10; 
        initConfetti();
        
    } else if (!letraNaPalavra) {

        vidas--;

        const canvas = document.querySelector('#boneco');
        if (!canvas.getContext) { return; }
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = 'black';

        switch (vidas) {
            case 5:
                ctx.arc(350, 170, 50, 1.5 * Math.PI, 4 * Math.PI);
                break;
            case 4:
                ctx.moveTo(350, 220);
                ctx.lineTo(350, 350);
                break;
            case 3:
                ctx.moveTo(350, 240);
                ctx.lineTo(380, 330);
                break;
            case 2:
                ctx.moveTo(350, 240);
                ctx.lineTo(320, 330);
                break;
            case 1:
                ctx.moveTo(350, 350);
                ctx.lineTo(330, 440);
                break;
            case 0:
                ctx.moveTo(350, 350);
                ctx.lineTo(370, 440);
                break;
        }

        ctx.stroke();

        // set line stroke and line width
        ctx.strokeStyle = 'black';
        if(vidas === 0){
            vidasSpan.textContent = `Você perdeu. A palavra era "${palavra}". Tente novamente!`;
            const buttons = document.querySelectorAll('#alfabeto button');
            buttons.forEach(button => {
                button.disabled = true;
            });
        } else {
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

export default { rVida, verificarLetra };
