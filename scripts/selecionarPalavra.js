/* old fetch function 

async function validWords(word) {
    return word.length > 10;
}

const url = 'https://raw.githubusercontent.com/fserb/pt-br/master/dicio'
const resp = await fetch(url);
const data = await resp.text();
const palavras = data.split('\n').filter(validWords);
console.log(palavras);

*/

const dicio = 'https://api.dicionario-aberto.net/';

const palavraAleatoria = async () => {

    let palavra = "";

    do { 
        const rword = await fetch(dicio+"random");
        const dados = await rword.text();
        palavra = JSON.parse(dados).word;
    } while (palavra.length < 5 || palavra.length >= 10);
    
    console.log(palavra); //Resposta da forca

    const word = await fetch(dicio+"word/"+palavra);
    const wordData = await word.text();
    const definitions = JSON.parse(wordData)[0].xml;
    const xmlDefinitions = new DOMParser().parseFromString(definitions, "text/xml");
    const descricao = xmlDefinitions.querySelector("def").textContent;

    return [palavra,descricao] ;
}

export default palavraAleatoria;
