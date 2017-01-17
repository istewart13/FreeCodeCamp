// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of"

function titleCase(str) {
  var stringArray = str.split(" ").map(function(item) {
    return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
  });
  return stringArray.join(" ");
}

titleCase("I ShOULd Be tItlE caSeD");
