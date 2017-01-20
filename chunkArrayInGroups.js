// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var subArrays = Math.ceil(arr.length / size);
  var newArray = [];
  for (var i = 0; i < subArrays; i++) {
    newArray.push(arr.slice(i * size, i * size + size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
