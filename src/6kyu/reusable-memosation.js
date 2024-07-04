/* DESCRIPTION:
Recursive algorithms can sometimes be optimised with memoisation. Often however, the memoisation is tightly coupled with the algorithm, making reuse difficult.

Task
Implement a reusable memoisation function
that, given a function of one argument, returns a memoised function of one argument.

Functions of more than one argument can be memoised by currying the function and memoising it for every argument, one at a time. This has easier reusability than having a different memoisation component for every number of arguments. */
function memo(fn) {
    const cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      } else {
        const result = fn(x);
        cache.set(x, result);
        return result;
      }
    };
}