const basePrice = 15;

document.getElementById("output").innerHTML = basePrice.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
document.getElementById("discount-code").value = "";

var calculatePrice = document.getElementById('calc-price');

calculatePrice.addEventListener("click", function() {
    var fakeCoupons = ["xananx12", "perfavore", "voglio_sconto", "z"];
    var finalPrice = basePrice;
    var ingredients = document.getElementsByClassName("ingredient-check");

    for (ingredient of ingredients) {
        if (ingredient.checked) {
            finalPrice += parseInt(ingredient.value);
        }
    }
    var discountCode = document.getElementById('discount-code').value;
    if (fakeCoupons.includes(discountCode)) {
        finalPrice *= 0.9; //facciamo uno sconto del 10% per tutti i codici, per ora
    }
    document.getElementById('logging-wrapper').classList.remove('nada');
    document.getElementById('burger-wrapper').classList.add('opaq');
    setTimeout(function() {
        document.getElementById('logging-wrapper').classList.add('nada');
        document.getElementById('burger-wrapper').classList.remove('opaq');
        document.getElementById("output").innerHTML = finalPrice.toLocaleString("it-IT", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }, 3000);

})