// Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).
var multiFilter = function(...filters) {
    return function(el) {
      return filters.every(filter => filter(el));
    };
};