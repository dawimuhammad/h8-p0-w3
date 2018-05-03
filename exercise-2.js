// Exercise 2 from Week 2 Phase 0 - Case Accessing Value in Array

var input = 'Hello World!';

function balikString(word) {
    let output = '';

    for (let i=word.length-1; i>=0; i--) {
        output = output + word[i];
    }
    return output;
}

console.log(balikString(input));
