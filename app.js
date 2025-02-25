document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', (event) => {
        const produto = event.target.getAttribute('data-produto');
        const preco = parseFloat(event.target.getAttribute('data-preco'));
        
        // Adicionar item ao carrinho
        adicionarAoCarrinho(produto, preco);
    });
});

let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    total += preco;

    // Atualiza o carrinho na interface
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const ulCarrinho = document.getElementById('itens-carrinho');
    ulCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        ulCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

// Finalizar compra
document.getElementById('finalizar').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada!!!!!\nTotal: R$ ${total.toFixed(2)}`);
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
});





