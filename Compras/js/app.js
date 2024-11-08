// Variable global para almacenar el producto seleccionado
let selectedProductName = "";

// Función para añadir el producto y cantidad al carrito
function addToCart(productName) {
    const quantityField = document.getElementById("product-quantity");
    const quantity = quantityField.value;

    if (quantity && quantity > 0) {
        const cart = document.getElementById("cart");
        const cartItem = document.createElement("li");

        cartItem.textContent = `${productName} - Cantidad: ${quantity} - Precio: ` + calculaPrecio();
        cart.appendChild(cartItem);
    } else {
        alert("Por favor, ingresa una cantidad válida.");
    }
}

function calculaPrecio(){
    const quantityField = document.getElementById("product-quantity");
    const precioField = document.getElementById("precio").innerText;
    const num = parseInt(precioField);
    const quantity = quantityField.value;

    if (quantity && quantity > 0) {
        const val= num * quantity;
        return val;
    }
}

function limpiar() {
    const cart = document.getElementById("cart");
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
}

function limpiarLastItem() {
    const cart = document.getElementById("cart");
    if (cart.lastChild) {
        cart.removeChild(cart.lastChild);
    } else {
        alert("El carrito está vacío.");
    }
}

function calculateTotal() {
    const cartItems = document.querySelectorAll("#cart li");
    let total = 0;

    cartItems.forEach(item => {
        // Extraer el precio del texto de cada elemento del carrito
        const text = item.textContent;
        const priceMatch = text.match(/Precio:\s*(\d+)/);

        if (priceMatch && priceMatch[1]) {
            total += parseInt(priceMatch[1], 10);
        }
    });


    const userConfirmed = confirm(`El total de su compra es ${total} dólares. ¿Desea realizar la compra?`);
    if (userConfirmed) {
        alert("Compra realizada con éxito.");

        const cart = document.getElementById("cart");
        while (cart.firstChild) {
            cart.removeChild(cart.firstChild);
        }
    } else {
        alert("Compra cancelada.");
    }

    return total;
}