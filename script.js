document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Capturar os valores do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Simulação de envio de mensagem
    var emailDestinatario = 'ellianee@hotmail.com';
    var statusMessage = document.getElementById('status');

    if (nome && email && mensagem) {
        // Exibir mensagem simulando o envio
        statusMessage.textContent = `Obrigado ${nome}, sua mensagem foi enviada.`;
        statusMessage.style.color = '#5a4033';

        // Resetar o formulário
        document.getElementById('contactForm').reset();
    } else {
        // Caso algum campo esteja vazio
        statusMessage.textContent = 'Por favor, preencha todos os campos.';
        statusMessage.style.color = 'red';
    }
});
