function rowSumOddNumbers(n) {
  const arr = [];
  let oddNum = 1;
  for (let index = 0; index < n; index++) {
    arr.push([]);
    console.log(arr);

    while (arr[index].length !== index + 1) {
      oddNum % 2 !== 0 && arr[index].push(oddNum);
      oddNum+=2
    }
  }
  console.log("finalArr=>", arr);
  console.log("finalSum=>", arr[arr.length - 1].reduce((prev, acc)=> prev + acc, 0));
  return arr[arr.length - 1].reduce((prev, acc)=> prev + acc, 0)
}

//rowSumOddNumbers(1) //1);
rowSumOddNumbers(42); //8);
// rowSumOddNumbers(42) //74088);
