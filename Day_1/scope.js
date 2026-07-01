let name = "Niranjana"; // Global scope

function showName() {
    let message = "Hello Welcome"; // Function scope
    console.log(name);
    console.log(message);
}

showName();

if (true) {
    let age = 23; // Block scope
    console.log(age);
}
