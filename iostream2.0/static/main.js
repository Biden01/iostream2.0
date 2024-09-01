let btnmonth = document.getElementById("BtnMonth");
let btnyears = document.getElementById("BtnYears");
let price_label_text = document.querySelectorAll(".price-label")
let price_text = document.querySelectorAll(".price")

console.log(price_label_text)

btnmonth.onclick = function() {
    // price_text.forEach(function(text) {
    //     text.textContent = "25,000тг"
    // });
    price_label_text.forEach(function(text) {
        text.textContent = "/1 ай"
        btnmonth.className = "navigation-pill active"
        btnyears.className = "navigation-pill"
    });
}

btnyears.onclick = function() {
    price_label_text.forEach(function(text) {
        text.textContent = "/1 жыл"
        btnyears.className = "navigation-pill active"
        btnmonth.className = "navigation-pill"
    });
}
