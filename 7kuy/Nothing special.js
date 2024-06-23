function nothingSpecial(str) {
  return typeof str === 'string'
    ? str.replace(/[^a-zA-Z0-9 \t]/g, '')
    : 'Not a string!';
}

nothingSpecial('Hello World!'); //,'Hello World',
console.log(
  "🚀 ~ nothingSpecial('Hello World!') ➔",
  nothingSpecial('Hello World!')
);
nothingSpecial('%^Take le$ft ##quad%r&a&nt'); //,'Take left quadrant',
console.log(
  "🚀 ~ nothingSpecial('%^Take le$ft ##quad%r&a&nt') ➔",
  nothingSpecial('%^Take le$ft ##quad%r&a&nt')
);
nothingSpecial('M$$$$$$$y ally!!!!!'); //,'My ally',
console.log(
  "🚀 ~ nothingSpecial('M$$$$$$$y ally!!!!!') ➔",
  nothingSpecial('M$$$$$$$y ally!!!!!')
);
nothingSpecial(25);
console.log('🚀 ~ nothingSpecial(25) ➔', nothingSpecial(25));
