// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var longestWord = str.split(" ").reduce(function(longest, currentWord) {
    return longest.length > currentWord.length ? longest : currentWord;
  });
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
