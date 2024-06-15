function findGlasses(arr) {
  return arr.map((el) => el.replace(/-+/g, '-').includes('O-O')).indexOf(true);
}

findGlasses(['O--#--O', 'dustO---Odust', 'more dust']);

// ["phone", "O-O", "coins", "keys"] ➞ 1

// ["OO", "wallet", "O##O", "O----O"] ➞ 3

// ["O--#--O", "dustO---Odust", "more dust"] ➞ 1
