function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function displayMessage() {
    console.log("Button Clicked");
}

const debounceFunction = debounce(displayMessage, 1000);

// Simulating multiple calls
debounceFunction();
debounceFunction();
debounceFunction();