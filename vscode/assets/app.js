document.addEventListener('DOMContentLoaded', function() {
    const cartaoHtml = document.getElementById('cartao-html');
    if (cartaoHtml) {
        cartaoHtml.addEventListener('click', function() {
            cartaoHtml.classList.toggle('virado');
            clickSound.currentTime = 0;
            clickSound.play();
        });
    }
});

const clickSound = new Audio('assets/sounds/click.mp3');

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
cartao.addEventListener('click', function() {
        cartao.classList.toggle('virado');
        clickSound.currentTime = 0;
    clickSound.play();

});



    

    container.appendChild(cartao);
}