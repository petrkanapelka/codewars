/*
DESCRIPTION:
In this kata, you must define the Array.reduce method.

I have disabled the pre-existing reduce methods.

Here's how it works:

[1,2,3].reduce( function(sum, next){return sum+next}, 0)
// => 6

['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// => {'a':2, 'b':1}
*/

Array.prototype.reduce = function(process, initialValue) {
    for (let i = 0; i < this.length; i++) {
      if (initialValue === undefined) {
          initialValue = this[i]
      } else {
          initialValue = process (initialValue, this[i]);
      }
    }
    return initialValue;
}