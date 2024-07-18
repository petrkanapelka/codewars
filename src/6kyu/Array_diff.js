function arrayDiff(a, b) {
    b.forEach((elB) => {
        a = a.filter((elA) => elA !== elB);
    });
    console.log(a);
    return a;
}

arrayDiff([1, 2], [1]); // [2], 'a was [1,2], b was [1]');
arrayDiff([1, 2, 2], [1]); // [2, 2], 'a was [1,2,2], b was [1]');
arrayDiff([1, 2, 2], [2]); // [1], 'a was [1,2,2], b was [2]');
arrayDiff([1, 2, 2], []); // [1, 2, 2], 'a was [1,2,2], b was []');
arrayDiff([], [1, 2]); // [], 'a was [], b was [1,2]');
arrayDiff([1, 2, 3], [1, 2]); // [3], 'a was [1,2,3], b was [1,2]');
