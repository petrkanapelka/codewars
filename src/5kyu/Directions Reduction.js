function dirReduc(arr) {
    arr.forEach((el, i) => {
        if (el === 'NORTH' && arr[i + 1] === 'SOUTH') {
            arr.splice(i, 2);
            dirReduc(arr);
        }
        if (el === 'SOUTH' && arr[i + 1] === 'NORTH') {
            arr.splice(i, 2);
            dirReduc(arr);
        }
        if (el === 'EAST' && arr[i + 1] === 'WEST') {
            arr.splice(i, 2);
            dirReduc(arr);
        }
        if (el === 'WEST' && arr[i + 1] === 'EAST') {
            arr.splice(i, 2);
            dirReduc(arr);
        }
    });

    return arr;
}

const res = dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']);
console.log('🚀 ~ res ➔', res);
// describe("Tests", () => {
// 	it("test", () => {
// 		doTest(
// 			["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
// 			["WEST"]
// 		);
// 		doTest(
// 			["NORTH", "WEST", "SOUTH", "EAST"],
// 			["NORTH", "WEST", "SOUTH", "EAST"]
// 		);
// 		doTest(
// 			["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
// 			[]
// 		);
// 	});
// });
