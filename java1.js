//muda o comportamento do formulario e e transicao de href de admin e de cliente (acessos diferentes)
//forca o tipo ser selecionado
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    console.log('Formulário enviado'); // Verifique se esta mensagem aparece no console

    const userType = document.getElementById('userType').value;
    let href = '';

    if (userType === 'client') {
        href = 'file:///C:/Users/Windows/Downloads/projeto%20final/cliente/index.html'; // URL para cliente
    } else if (userType === 'admin') {
        href = 'file:///C:/Users/Windows/Downloads/projeto%20final/admin/produtos.html'; // URL para administrador
    }

    if (href) {
        window.location.href = href;
    } else {
        alert('Por favor, selecione um tipo de usuário.');
    }
});
