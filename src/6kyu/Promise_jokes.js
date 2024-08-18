/* eslint-disable no-unused-vars */
const apiData = {
    jokes: [
        {
            id: 101,
            setup: "Who is Santa's favorite singer?",
            punchLine: 'Elf-is Presley!',
        },
    ],
};

async function sayJoke(apiUrl, jokeId) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.jokes || !Array.isArray(data.jokes)) {
            throw new Error(`No jokes at url: ${apiUrl}`);
        }

        const joke = data.jokes.find((joke) => joke.id === jokeId);

        if (!joke) {
            throw new Error(`No jokes found id: ${jokeId}`);
        }

        return {
            saySetup() {
                return joke.setup;
            },
            sayPunchLine() {
                return joke.punchLine;
            },
        };
    } catch (error) {
        return Promise.reject(error);
    }
}

sayJoke('https://www.google.by/', 101);
