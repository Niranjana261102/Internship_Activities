function outer() {
    let message = "Hello World";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();
result();