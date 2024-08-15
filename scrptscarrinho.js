document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartList = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            const item = cart.find(product => product.name === name);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
            alert(`${name} foi adicionado ao carrinho!`);
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - R$ ${product.price.toFixed(2)} x ${product.quantity}`;
            cartList.appendChild(li);
            total += product.price * product.quantity;
        });

        totalDisplay.textContent = total.toFixed(2);
    }
});
