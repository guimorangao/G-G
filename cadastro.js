document.addEventListener('DOMContentLoaded', () => {
    const personTypeInputs = document.querySelectorAll('input[name="personType"]');
    const pfFields = document.getElementById('pf-campo');
    const pjFields = document.getElementById('pj-campo');
    const confirmPasswordInput = document.getElementById('confirme-senha'); // corrigido para o ID correto
    const submitButton = document.getElementById('submitBtn');
    const form = document.getElementById('formregistro');

    personTypeInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.value === 'pf') {
                pfFields.style.display = 'block';
                pjFields.style.display = 'none';
            } else if (input.value === 'pj') {
                pfFields.style.display = 'none';
                pjFields.style.display = 'block';
            }
        });
    });

    confirmPasswordInput.addEventListener('input', () => {
        const confirmPassword = confirmPasswordInput.value;
        // Lógica de validação de senha ou outra manipulação aqui, se necessário
    });

    form.addEventListener('submit', (event) => {
        // Lógica de validação adicional ou preventDefault conforme necessário
    });
});