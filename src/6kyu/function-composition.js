/* Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12 */
function compose(...fns) {
    return function (x) {
      return fns.reduceRight(function (v, f) {
        return f(v);
      }, x);
    };
}