/* DESCRIPTION:
Create a combinator function named flip that takes a function as an argument and returns that function with it's arguments reversed.

For example:

flip(print)(4,5) // returns "5 -> 4" */

function flip(fn) {
    return function(...args) {
      return fn(...args.reverse());
    }
}