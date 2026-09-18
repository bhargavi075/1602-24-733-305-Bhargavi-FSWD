let timer;
let running = false;

function red(callback) {

    document.getElementById("light").innerHTML = "RED";

    timer = setTimeout(function() {
        callback();
    }, 2000);
}

function green(callback) {

    document.getElementById("light").innerHTML = "GREEN";

    timer = setTimeout(function() {
        callback();
    }, 2000);
}

function yellow(callback) {

    document.getElementById("light").innerHTML = "YELLOW";

    timer = setTimeout(function() {
        callback();
    }, 1000);
}

function startTraffic() {

    if (running) {
        return;
    }

    running = true;

    document.getElementById("message").innerHTML =
        "Traffic light started";

    red(function() {
        if (running) {
            green(function() {
                if (running) {
                    yellow(function() {
                        if (running) {
                            startTraffic();
                        }
                    });
                }
            });
        }
    });
}

function stopTraffic() {

    running = false;

    clearTimeout(timer);

    document.getElementById("message").innerHTML =
        "Traffic light stopped";
}