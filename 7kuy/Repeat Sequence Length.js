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

/*
assert.strictEqual(repeatSequenceLen(1), 1, 'repeatSequenceLen(1)')
    assert.strictEqual(repeatSequenceLen(85), 8, 'repeatSequenceLen(85)')
    assert.strictEqual(repeatSequenceLen(810), 8, 'repeatSequenceLen(810)')
    assert.strictEqual(repeatSequenceLen(812), 8, 'repeatSequenceLen(812)')
    assert.strictEqual(repeatSequenceLen(818), 1, 'repeatSequenceLen(818)')
    assert.strictEqual(repeatSequenceLen(833), 1, 'repeatSequenceLen(833)')
*/

repeatSequenceLen(812); // 1
