function moveZeros(arr) {
    let filterArr = arr.filter((x) => x !== 0);
    filterArr = Array.from({ length: arr.length }, (_, i) =>
        i >= filterArr.length ? 0 : filterArr[i]
    );
    console.log('🚀 ~ moveZeros ~ filterArr ➔', filterArr);
}

//moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); //, [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
