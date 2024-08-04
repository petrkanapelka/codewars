String.prototype.toJadenCase = function () {
    //...
    let res = this.split(' ')
    .map((word) =>
        word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    )
    .join(' ')
    console.log(res);
    return res;
};

var str = "How can mirrors be real if our eyes aren't real";

str.toJadenCase(); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
