function onlyDuplicates(str) {
  let arr = str.split('');
  return arr
    .filter((char) => (arr.indexOf(char) === arr.lastIndexOf(char) ? '' : char))
    .join('');
}

console.log("🚀 ~ onlyDuplicates('abccdefee') ➔", onlyDuplicates('abccdefee'));
// 'cceee', "onlyDuplicates('abccdefee')")

console.log("🚀 ~ onlyDuplicates('hello') ➔", onlyDuplicates('hello'));
// 'll', "onlyDuplicates('hello')")

console.log(
  "🚀 ~ onlyDuplicates('colloquial') ➔",
  onlyDuplicates('colloquial')
);
// 'ollol', "onlyDuplicates('colloquial')" )

console.log(
  "🚀 ~ onlyDuplicates('foundersandcoders') ➔",
  onlyDuplicates('foundersandcoders')
);
// 'ondersndoders', "onlyDuplicates('foundersandcoders')")
