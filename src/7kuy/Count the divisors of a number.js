function getDivisorsCnt(n) {
  let res = 0;
  let i = 1;
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      res += i === n / i ? 1 : 2;
    }
    i++;
  }
  console.log('🚀 ~ getDivisorsCnt ~ res ➔', res);
}

getDivisorsCnt(1); ///, 1);
getDivisorsCnt(10); ///, 4);
getDivisorsCnt(11); ///, 2);
getDivisorsCnt(54); //, 8);
