function isValidWalk(walk) {
    if (walk.length > 10) {
        return false;
    }

    let northSouthDir = 0;
    let westEastDir = 0;

    walk.forEach((dir) => {
        if (dir === 'n') {
            northSouthDir = northSouthDir + 1;
        }
        if (dir === 's') {
            northSouthDir = northSouthDir - 1;
        }
        if (dir === 'w') {
            westEastDir = westEastDir + 1;
        }
        if (dir === 'e') {
            westEastDir = westEastDir - 1;
        }
    });

    return northSouthDir === 0 && westEastDir === 0;
}

let res1 = isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); //, 'should return true');
console.log('🚀 ~ res1 ➔', res1);

let res2 = isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']); //, 'should return false');
console.log('🚀 ~ res2 ➔', res2);
let res3 = isValidWalk(['w']); // , 'should return false');
console.log('🚀 ~ res3 ➔', res3);
let res4 = isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); //, 'should return false');
console.log('🚀 ~ res4 ➔', res4);
