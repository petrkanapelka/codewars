function digitalRoot(n) {
  n = n.toString().split('').reduce((prev, acc)=> +prev + +acc,0)
  if(n.toString().length === 1) {
      console.log('result=>', n)
    return n
  }
  return digitalRoot(n)
}

//digitalRoot(16); // 7
digitalRoot(456); // 6
