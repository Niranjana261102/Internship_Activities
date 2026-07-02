function fetchData() {
    return Promise.resolve("Hello World");
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData();