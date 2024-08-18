// const run = async () => {
//     try {
//         const yahooData = await fetch('https://yahoo.com/');
//         console.log('🚀 ~ run ~ yahooData ➔', yahooData.url);
//         return yahooData.url;
//     } catch (error) {
//         console.log(error);
//     }
// };

// let res = run();
// console.log('🚀 ~ res ➔', res);

// res.then((data) => console.log('dsds', data.url));
const foo = function* () {};
foo();
const prom = new Promise((res,rej) => {
    setTimeout(() => {
        res('resolved');
    }, 2000);
    setTimeout(() => {
        rej({message: 'error rejected'});
    }, 1000);
});

prom.then((data) => {
    console.log(data);
})
.catch((err)=>{
    console.error(err.message)
})

const prom2 = fetch('https://www.google.com/');
prom2
    .then((data) => {
        console.log(data.status);
    })
    .catch((err) => {
        console.error(err);
    });
