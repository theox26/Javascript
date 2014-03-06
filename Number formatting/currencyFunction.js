function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

//for currency w/o $
function currencyFormat(n) {
    var parts=n.toString().split(".");
    return '$' + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ".00");
}

//for PCA's ($6,000.00) version
function currencyFormatParen(n) {
    var parts=n.toString().split(".");
    return "($" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] + ")" : ".00)");
}