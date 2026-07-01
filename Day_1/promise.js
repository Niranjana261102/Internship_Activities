const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));