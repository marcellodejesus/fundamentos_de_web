function pedir(event) {
    event.preventDefault();

    const nome = event.currentTarget.closest('.card-burguer').querySelector('.nome-hamburguer').textContent;
    alert(`🍔 Pedido recebido: ${nome}! Em breve entraremos em contato 😋`)
}

document.querySelectorAll('.card-burguer .botao').forEach(botao => {
    botao.addEventListener('click', pedir);
})


const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (e){
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if (nome === '' || mensagem === '') {
        alert('⚠️ Por favor, preencha todos os campos antes de enviar');
    } else {
        alert(`✅ Obrigado pela mensagem, ${nome}! Responderemos em breve.`)
        formulario.reset();
    }

    const idade = 18
})