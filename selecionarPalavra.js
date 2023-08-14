const palavraAleatoria = () => {

    const palavras = ["evérton", "líverpool", "swansea", "chélsea", "hull", "manchester-city", "newcastle-united","álien", "dirty-harry", "gladiator", 
    "finding-nemo", "jaws","manchester", "mílan", "madrid", "amsterdãm", "prague"];
    
    const indiceResposta = Math.floor(Math.random() * palavras.length);
    const resposta = palavras[indiceResposta];

    return resposta;
}

export default palavraAleatoria;