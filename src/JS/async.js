const run = async () => {
    try {
        const yahooData = await fetch('https://yahoo.com/');
        console.log('🚀 ~ run ~ yahooData ➔', yahooData.url);
        return yahooData.url;
    } catch (error) {
        console.log(error);
    }
};

let res = run();
console.log('🚀 ~ res ➔', res);

// res.then((data) => console.log('dsds', data.url));
const foo = function* () {};
foo();
