function criaCartao(conteudo, pergunta, resposta) {
    
    
    
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    
    cartao.innerHTML = `
        <div class="conteudo">
            <h3>${conteudo}</h3>
        </div>
        <div class="pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="resposta">
            <p>${resposta}</p>
        </div>
`;
    container.appendChild(cartao);
}