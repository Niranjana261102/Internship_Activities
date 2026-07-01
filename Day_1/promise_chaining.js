new Promise((resolve) => {
    resolve(5);
})
.then((value) => {
    console.log(value);
    return value * 2;
})
.then((value) => {
    console.log(value);
    return value + 10;
})
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
});