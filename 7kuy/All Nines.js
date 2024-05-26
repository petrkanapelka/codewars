function allNines(x) {
  if (x % 2n === 0n || x % 5n === 0n || x > 4000n) {
    return -1n;
  }

  let nines = 9n;

  while (nines % x !== 0n) {
    nines = nines * 10n + 9n;
    console.log(nines)
  }
  console.log(nines/x);
  return nines/x;
}

///Высокая сложность
/* function allNines(x) {
  if (x % 2n === 0n || x % 5n === 0n || x > 4000n) {
    return -1n;
  }

  let minNum = 1n;

  while (true && x <= 4000) {
      let arr = (minNum * x).toString().split('');
      if(arr.every((el) => el === '9')) {
        console.log(minNum)
        return minNum;
      }
      minNum++;
  }
  return -1n;
} */

allNines(13n);