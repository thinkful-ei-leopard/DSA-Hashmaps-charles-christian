const HashMap = require ('./hashmaps');

//1
function main(){
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set('Hobbit','Bilbo');
    // lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    // lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Awren');
    lotr.set('Ent', 'Treebeard');

   console.log(lotr);
   console.log(lotr.get('Maiar'));
    return lotr;
}

main();

//2
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo();

//4
// function removeDuplicates(str) {
//     let remove = new HashMap();
//     let nonDuplicate = '';
//     for(let i=0; i<str.length; i++){
//         remove.set(`letter${[i]}`,str[i]);
//         // nonDuplicate+=str[i];
//     }
//     let filter = remove._hashTable
//     console.log(filter[2].value)
//     for ( let x = 1; x < filter.length; x++){
//         for (let y = 1; y < filter.length; y++){
//             console.log(filter[x])
//             if( filter[x].value === filter[y].value){
//                 remove.delete(filter[y].key);
//             }
//         }
//     }

//     console.log(filter);
//     // return nonDuplicate;
// }

// removeDuplicates('google')

function RemoveDuplicates(str){
    let map = new Map();
    let nonDupe = '';
    for(let i=0; i<str.length; i++){
        if(!map.has(str[i].toLowerCase())){
            map.set(str[i])
            nonDupe+=str[i];
        }
    }
    return nonDupe;
}
console.log(RemoveDuplicates('google all that you think can think of'))
