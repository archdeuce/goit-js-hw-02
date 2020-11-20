function findLongestWord(string = "") {
  const strArr = string.split(" ");
  let result = "";

  strArr.forEach((word) => {
    if (word.length > result.length) result = word;
  });

  return result;
}

const str = "The quick brown fox jumped over the lazy dog";
console.log(`First longest word (${str}):`, findLongestWord(str));
