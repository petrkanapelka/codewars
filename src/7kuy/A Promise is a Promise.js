function promiseHelloWorld() {
    return new Promise((res) => {
        res('Hello World!');
    });
}

promiseHelloWorld().then((response) => console.log(response));
