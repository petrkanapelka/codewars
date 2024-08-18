function getState(promise) {
    const statusPromise = promise
        .then(() => {
            return 'fulfilled';
        })
        .catch(() => {
            return 'rejected';
        });

    return Promise.race([
        statusPromise,
        new Promise((resolve) => {
            setTimeout(() => {
                    resolve('pending');
            }, 0);
        }),
    ]);
}

// const p = Promise.resolve();
// const p = Promise.reject();
const p = new Promise(() => {});

const state = async () => {
    let result = await getState(p);
    console.log('🚀 ~ state ~ result ➔', result);
};
state();
