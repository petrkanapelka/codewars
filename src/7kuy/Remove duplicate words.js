function removeDuplicateWords(s) {
  return Array.from(new Set(s.split(' '))).join(' ');
}

let s = removeDuplicateWords(
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
);
s