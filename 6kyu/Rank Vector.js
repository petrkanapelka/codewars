function ranks(arr) {
  const obj = [...arr]
    .sort((a, b) => b - a)
    .map((el, indx) => {
      return { [el]: indx + 1 };
    })
    .reverse()
    .reduce((acc, curr) => {
      return Object.assign(acc, curr);
    }, {});

  return arr.map((el) => (obj.hasOwnProperty(el) ? obj[el] : el));
}

arr1 = [9, 3, 6, 10];
console.log('🚀 ~ ranks ~ ranks1 ➔', ranks(arr1)); //!--> ranks = [2,4,3,1]

arr2 = [3, 3, 3, 3, 3, 5, 1];
console.log('🚀 ~ ranks ~ ranks2 ➔', ranks(arr2)); //!--> ranks = [2,2,2,2,2,1,7]
