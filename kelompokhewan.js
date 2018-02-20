// Exercise Week 3 - 15 Case 'Mengelompokkan Hewan'
// By Muhamad Haddawi Hermawan Hacktiv8 Student Phase 0

function groupAnimals(animals) {
    // init variable array hasil
    var newAnimals=[];

    // iteration to get array element from 'animals'
    for (var i=0; i<animals.length; i++){
        // init variable array for the result of animals with same first character
        var res=[];
        var charHewan= animals[i][0];
        var hewan=animals[i];

        // iteration to merge animals with the same first character
        for(var j=animals.length-1; j>i; j--){
          if(charHewan===animals[j][0]){
            hewan=hewan+', '+animals[j]
            animals.splice(j,1);
          }
        }

        // array push the result into an array
        res.push(hewan)
        // array push all the result into an array multidimension
        newAnimals.push(res)
    }

    //  return newAnimals as the function result
    return newAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
