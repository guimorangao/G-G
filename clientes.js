// clientes.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formregistro');
    const pfCampos = document.getElementById('pf-campo');
    const pjCampos = document.getElementById('pj-campo');
    const personTypeRadios = document.querySelectorAll('input[name="personType"]');
    const clientList = document.getElementById('clients');

    // Mostrar/ocultar campos com base no tipo de pessoa
    personTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'pf') {
                pfCampos.style.display = 'block';
                pjCampos.style.display = 'none';
            } else {
                pfCampos.style.display = 'none';
                pjCampos.style.display = 'block';
            }
        });
    });

    // Adicionar cliente à lista
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Resetar o formulário após adicionar
        form.reset();
        pfCampos.style.display = 'block';
        pjCampos.style.display = 'none';
        personTypeRadios[0].checked = true;
    });

    // Inicialmente exibe campos de Pessoa Física
    pfCampos.style.display = 'block';
    pjCampos.style.display = 'none';
});