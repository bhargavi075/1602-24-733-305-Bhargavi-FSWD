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

async function startOrder() {

    document.getElementById("output").innerHTML = "";

    await orderPlaced();
    await orderShipped();
    await orderDelivered();
}

/*
Readability:
async/await is easier to read because the asynchronous
operations look like normal sequential code.
.then() uses promise chaining, which can be less readable
when there are many operations.
*/