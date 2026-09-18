function orderPlaced() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            document.getElementById("output").innerHTML +=
                "Order Placed<br>";
            resolve();
        }, 1000);
    });
}

function orderShipped() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            document.getElementById("output").innerHTML +=
                "Order Shipped<br>";
            resolve();
        }, 1000);
    });
}

function orderDelivered() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            document.getElementById("output").innerHTML +=
                "Order Delivered";
            resolve();
        }, 1000);
    });
}

function startOrder() {

    document.getElementById("output").innerHTML = "";

    orderPlaced()
        .then(orderShipped)
        .then(orderDelivered);
}