function pigIt(str) {
    return str
        .split(' ')
        .map((sub) => {
            const newSub = sub.slice(1) + sub.charAt(0);
            return newSub.replace(/\w+/gi, newSub + 'ay');
        })
        .join(' ');
}

pigIt('Pig latin is cool'); // 'igPay atinlay siay oolcay'
pigIt('This is my string'); // 'hisTay siay ymay tringsay'
pigIt('Hello world !'); // elloHay orldway !
