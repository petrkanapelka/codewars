function generateHashtag (str) {
    let resultHashtag = str
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

    if(resultHashtag.length >= 140) return false
    if(resultHashtag.length === 0) return false
    return '#' + resultHashtag;
}

const res = generateHashtag("a".repeat(140))
console.log("🚀 ~ res ➔", res);


/*
(generateHashtag(""), false, "Expected an empty string to return false")
(generateHashtag(" ".repeat(200)), false, "Still an empty string")
(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
(generateHashtag("a".repeat(140)), false, "Too long")
*/