function getInputId(productInput, isIncreasing, price) {
    const getInput = document.getElementById(productInput + '-input');
    const inputValue = getInput.value;
    if (isIncreasing) {
        const productNumber = parseInt(inputValue) + 1;
        getInput.value = productNumber;
    }
    else if (isIncreasing == false && getInput.value > 0) {
        const productNumber = parseInt(inputValue) - 1;
        getInput.value = productNumber;
    }
    const productTotal = document.getElementById(productInput + '-price');
    productTotal.innerText = getInput.value * price;
    getTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function getTotal() {
    const phoneTotal = getInputValue('phone') * 1300;
    const caseTotal = getInputValue('case') * 84;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const total = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;
}

document.getElementById('button-plus').addEventListener('click', function () {
    getInputId('case', true, 84);
})
document.getElementById('button-minus').addEventListener('click', function () {
    getInputId('case', false, 84);
})
document.getElementById('phone-plus').addEventListener('click', function () {
    getInputId('phone', true, 1300);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getInputId('phone', false, 1300);
})
