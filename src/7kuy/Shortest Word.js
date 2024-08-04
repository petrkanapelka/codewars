function findShort(s) {
    let res = s.split(' ').sort((a, b) => a.length - b.length);
    return res[0].length;
}

findShort('bitcoin take over the world maybe who knows perhaps'); // 3);
findShort('turns out random test cases are easier than writing out basic ones'); // 3);
findShort("Let's travel abroad shall we"); // 2);
