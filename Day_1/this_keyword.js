const person = {
    name: "Niranjana",
    greet: function () {
        console.log("Hello, My name is " + this.name);
    }
};

person.greet();