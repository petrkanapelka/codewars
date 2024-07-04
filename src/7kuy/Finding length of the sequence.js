const lengthOfSequence = (arr, n) => {
  return arr.filter((el) => el === n).length !== 2
    ? 0
    : arr.lastIndexOf(n) - arr.indexOf(n) + 1;
};

lengthOfSequence([1, 1], 1); //, 2, 'Retu
console.log('🚀 ~ lengthOfSequence([1, 1], 1) ➔', lengthOfSequence([1, 1], 1));
lengthOfSequence([1, 2, 3, 1], 1); ///, 4,
console.log(
  '🚀 ~ lengthOfSequence([1, 2, 3, 1], 1) ➔',
  lengthOfSequence([1, 2, 3, 1], 1)
);
lengthOfSequence([-7, 5, 0, 2, 9, 5], 5); //
console.log(
  '🚀 ~ lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)  ➔',
  lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)
);
lengthOfSequence([-7, 6, 2, -7, 4], -7); //, 4,
console.log(
  '🚀 ~ lengthOfSequence([-7, 6, 2, -7, 4], -7)  ➔',
  lengthOfSequence([-7, 6, 2, -7, 4], -7)
);
