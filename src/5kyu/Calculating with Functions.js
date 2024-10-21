/* eslint-disable no-unused-vars */
function switchOperation(arg, num) {
    if (arg === undefined) {
        return num;
    }
    switch (arg.type) {
        case 'multiply':
            return num * arg.number;
        case 'divide':
            return Math.ceil(num / arg.number);
        case 'plus':
            return num + arg.number;
        case 'minus':
            return num - arg.number;
        default:
            return num;
    }
}
function zero(arg) {
    return switchOperation(arg, 0);
}
function one(arg) {
    return switchOperation(arg, 1);
}
function two(arg) {
    return switchOperation(arg, 2);
}
function three(arg) {
    return switchOperation(arg, 3);
}
function four(arg) {
    return switchOperation(arg, 4);
}
function five(arg) {
    return switchOperation(arg, 5);
}
function six(arg) {
    return switchOperation(arg, 6);
}
function seven(arg) {
    return switchOperation(arg, 7);
}
function eight(arg) {
    return switchOperation(arg, 8);
}
function nine(arg) {
    return switchOperation(arg, 9);
}

function plus(num) {
    return { type: 'plus', number: num };
}
function minus(num) {
    return { type: 'minus', number: num };
}
function times(num) {
    return { type: 'multiply', number: num };
}
function dividedBy(num) {
    return { type: 'divide', number: num };
}

// const res = seven(times(five())); //, 35, 'seven(times(five ()))');

// const res = four(plus(nine()))  //, 13, 'four (plus(nine ()))');
// const res = eight(minus(three())); //, 5, 'eight(minus(three()))');
const res = six(dividedBy(two()))  //, 3, 'six(dividedBy(two()))');
console.log(res);
