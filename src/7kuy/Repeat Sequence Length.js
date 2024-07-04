function repeatSequenceLen(a) {
  function sumOfSquares(num) {
    return String(num)
      .split("")
      .map((el) => +el)
      .reduce((prev, acc) => prev + acc * acc, 0);
  }

  let nextA = sumOfSquares(a);
  const arr = [];
  while (!arr.includes(nextA)){
    arr.push(nextA);
    nextA = sumOfSquares(nextA)
  }
  const firstIndex = arr.findIndex((el) => el === nextA);
  const lastIndex = arr.length;

  return lastIndex - firstIndex;
}


repeatSequenceLen(812);
