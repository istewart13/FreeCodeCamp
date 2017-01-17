// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var strArray = str.split(" ");
  str.sort(function(a, b) {
    return b.length - a.length;
  });
  return str[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
