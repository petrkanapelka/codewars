function isPangram(string) {
  return new Set (string.match(/[A-Z]/gi).map(c=>c.toLowerCase())).size === 26
}
//   console.log('🚀 ~ isPangram ~ regexp.test(string) ➔', new Set (string.match(regexp).map(c=>c.toLowerCase())));
/* .size === 27 */
isPangram('The quick brown fox jumps over the lazy dog.');
console.log("🚀 ~ isPangram('The quick brown fox jumps over the lazy dog.'); ➔", isPangram('The quick brown fox jumps over the lazy dog.'));
isPangram('This is not a pangram');
// describe('Tests', () => {
//   it('test1', () => {
//     var string = 'The quick brown fox jumps over the lazy dog.';
//     assert.strictEqual(isPangram(string), true);
//   });
//   it('test2', () => {
//     var string = 'This is not a pangram.';
//     assert.strictEqual(isPangram(string), false);
//   });
// });
