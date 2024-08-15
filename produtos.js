function addProduct() {
    // Get input values
    const name = document.getElementById('productName').value;
    const code = document.getElementById('productCode').value;
    const cost = parseFloat(document.getElementById('productCost').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);

    // Validate inputs
    if (!name || !code || isNaN(cost) || isNaN(price) || !image || isNaN(quantity)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Calculate total value for this product
    const total = price * quantity;

    // Create a new table row
    const tbody = document.querySelector('#productList tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${name}</td>
        <td>${code}</td>
        <td>R$ ${cost.toFixed(2)}</td>
        <td>R$ ${price.toFixed(2)}</td>
        <td><img src="${image}" alt="Imagem do produto"></td>
        <td>${quantity}</td>
        <td>R$ ${total.toFixed(2)}</td>
        <td><button class="remove" onclick="removeProduct(this)">Remover</button></td>
    `;
    tbody.appendChild(tr);

    // Update summary
    updateSummary();

    // Clear form
    document.getElementById('productForm').reset();
}

function removeProduct(button) {
    // Remove the row containing the button
    const row = button.closest('tr');
    row.remove();

    // Update summary
    updateSummary();
}

function updateSummary() {
    const rows = document.querySelectorAll('#productList tbody tr');
    let totalQuantity = 0;
    let totalValue = 0;

    rows.forEach(row => {
        const quantity = parseInt(row.cells[5].textContent);
        const total = parseFloat(row.cells[6].textContent.replace('R$ ', ''));
        totalQuantity += quantity;
        totalValue += total;
    });

    document.getElementById('totalQuantity').textContent = totalQuantity;
    document.getElementById('totalValue').textContent = totalValue.toFixed(2);
}
