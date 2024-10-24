/**
 * @param {string} a
 * @param {string} b
 */
function isAnagram(a, b) {
    let check = null;
    for (const char of a.toLowerCase()) {
        if (b.toLowerCase().includes(char)) {
            check = true;
        } else {
            return false;
        }
    }
    return check;
}

function isAnagram2(a, b) {
    const normalize = (str) => str.toLowerCase().split('').sort().join('');
    return normalize(a) === normalize(b);
}

const res = isAnagram('Гора', 'РоГа'); // true
console.log('🚀 ~ res ➔', res);
isAnagram2('Клоун', 'кулон'); // true
// isAnagram('Восемь', 'Семя'); // false
// isAnagram('дерево', 'самолет'); // false
