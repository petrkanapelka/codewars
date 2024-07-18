function getMiddle(s) {
    return s.length % 2
        ? s.substring(s.length / 2, s.length / 2 + 1)
        : s.substring(s.length / 2 - 1, s.length / 2 + 1);
}

getMiddle('test'); //"es");
console.log(getMiddle('A'));

// getMiddle('testing'); //"t");
// getMiddle('middle'); //"dd");
// getMiddle('A'); //"A");
