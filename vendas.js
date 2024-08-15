// Dados de vendas simulados
const salesData = [
    { saleCode: '001', customerName: 'João Silva', itemsSold: 'Produto A, Produto B', totalValue: 'R$ 150,00' },
    { saleCode: '002', customerName: 'Maria Oliveira', itemsSold: 'Produto C', totalValue: 'R$ 80,00' },
    { saleCode: '003', customerName: 'Pedro Santos', itemsSold: 'Produto A, Produto D', totalValue: 'R$ 200,00' }
];

// Função para preencher a tabela com os dados de vendas
function populateTable() {
    const tableBody = document.querySelector('#salesTable tbody');
    tableBody.innerHTML = ''; // Limpa a tabela antes de repopular
    
    salesData.forEach((sale, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sale.saleCode}</td>
            <td>${sale.customerName}</td>
            <td>${sale.itemsSold}</td>
            <td>${sale.totalValue}</td>
            <td><button class="delete" data-index="${index}">Excluir</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para adicionar uma nova venda
function addSale(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    
    const saleCode = document.getElementById('saleCode').value;
    const customerName = document.getElementById('customerName').value;
    const itemsSold = document.getElementById('itemsSold').value;
    const totalValue = document.getElementById('totalValue').value;

    const newSale = {
        saleCode: saleCode,
        customerName: customerName,
        itemsSold: itemsSold,
        totalValue: totalValue
    };

    salesData.push(newSale); // Adiciona a nova venda ao array de vendas
    populateTable(); // Atualiza a tabela com a nova venda

    // Limpa o formulário após adicionar a venda
    document.getElementById('saleForm').reset();
}

// Função para excluir uma venda
function deleteSale(event) {
    if (event.target.classList.contains('delete')) {
        const index = event.target.getAttribute('data-index');
        salesData.splice(index, 1); // Remove a venda do array
        populateTable(); // Atualiza a tabela
    }
}

// Adiciona ouvintes de eventos
document.getElementById('saleForm').addEventListener('submit', addSale);
document.querySelector('#salesTable tbody').addEventListener('click', deleteSale);

// Inicializa a tabela ao carregar a página
document.addEventListener('DOMContentLoaded', populateTable);
