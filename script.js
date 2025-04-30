const form = document.getElementById('form');
const lista = document.getElementById('lista');
const limparBtn = document.getElementById('limpar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const produto = document.getElementById('produto').value.trim();
    const quantidade = document.getElementById('quantidade').value.trim();

    if (produto === '' || quantidade === '' || isNaN(quantidade) || quantidade <= 0) {
        alert('Preencha corretamente os campos!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${produto} - Quantidade: ${quantidade}`;
    li.addEventListener('click', function() {
        li.classList.toggle('comprado');
    });

    lista.appendChild(li);

    form.reset();
});

limparBtn.addEventListener('click', function() {
    lista.innerHTML = '';
});