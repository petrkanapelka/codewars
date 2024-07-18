function accum(s) {
    return s
        .toLowerCase()
        .split('')
        .map((char, i) => {
            const newChar = new Array(i + 1).fill(char).join('');
            return newChar.charAt(0).toUpperCase() + newChar.slice(1);
        })
        .join('-');
}

accum('ZpglnRxqenU'); //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum('ZpglnRxqenU'));
// accum('NyffsGeyylB'); //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// accum('MjtkuBovqrU'); //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrraccum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// accum('HbideVbxncC'); //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
