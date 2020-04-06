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

//5 
function checkPalindrome(str) {
    let map = new Map(); 
    let unmatched = false;
    for (let i=0; i<str.length; i++) {
        let char = str[i];
        if (map.has(char)) {
            let value = map.get(char);
            map.set(char, value + 1);
        } 
        else {
            map.set(char, 1);
        }
    }
    for (let value of map.values()) {
        if (value % 2 === 1) {
            if (unmatched) {
                return false;
            }
            else {
                unmatched = true;
            }
        }
    }
    return true;
}

console.log(checkPalindrome('dad'));

//6
//  function anagram(words){
//     let anagrams = new HashMap(), ret = [];
//     for (let word of words) {
//         let key = test(word); //east 
//         if (anagrams.has(key)){
//             anagrams.get(key).push(word);
//         } 
//         else {
//           ret.push(anagrams.set(key, [word]));
//         }
//     }
//     return ret;
//  }
// let arr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'] 

// function test(sort){
//  return sort
//     .split('')
//     .sort()
//     .join('')
// }

// console.log(test(arr));
//anagram();
function _sortword(word) {
	//Helper function: sort a word into some form of canonical order.
	//The exact order is insignificant and need not be lexicographical,
	//as long as it is utterly consistent: any two anagrams of the same
	//letter sequence must return the same string.
	return word.split('').sort().join('')
}
function group_into_anagrams(words) {
    let anagrams = new Map(), ret = [];
    for (let word of words) {
        let key = _sortword(word); //east 
        if (anagrams.has(key)){
            anagrams.get(key).push(word);
        } 
        else {
          ret.push(anagrams.set(key, [word]));
        }
    }
    return ret;
}
console.log(group_into_anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

//7
class Node {
    constructor(data) {
        this.data = data
        this.ext = null
    }
}

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
}

get(key) {
    let hash = this._hashString(key)
    if(!this._hashTable[hash])
    let (chain.hasOwnProperty(key)) {
        return chain[key]
    }
    return null
}

static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
        //Bitwise left shift with 5 0s - this would be similar to
        //hash*31, 31 being the decent prime number
        //but bit shifting is a faster way to do this
        //tradeoff is understandability
        hash = (hash << 5) + hash + string.charCodeAt(i);
        //converting hash to a 32 bit integer
        hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negtive number. 
    return hash >>> 0;
}
}