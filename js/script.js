const basePrice = 50;

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
    document.getElementById("output").innerHTML = finalPrice.toLocaleString("it-IT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
})