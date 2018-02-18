// This is the exercise number 14 with case MENGELOMPOKKAN ANGKA in week 3 phase 0
// Name : Muhamad Haddawi Hermawan - Phase 0 - Hacktiv8 - Batch Quantum Fox

function mengelompokkanAngka(arr) {
    // variable declaration
    var newArr = [[],[],[]];
    var i = 0;

    // iteration to get a value from array 'arr' and push it into newArr
    for (i; i<arr.length; i++) {
        var x = arr[i];
        // push array into mutidimensional array 'newArr' in index 2
        // if value is an even number
         if (arr[i]%3 === 0) {
              newArr[2].push(x); }
         // push array into mutidimensional array 'newArr' in index 0
         // if value is equal to the multiplier of 3
         else if (arr[i]%2 === 0) {
              newArr[0].push(x); }
         // push array into mutidimensional array 'newArr' in index 10
         // if value is not equal the requirement of other conditional above
         else {
              newArr[1].push(x); }
    }

  // return result with new array
  return newArr;

}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
