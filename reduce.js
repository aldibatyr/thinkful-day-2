/* eslint-disable strict */




let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
let array = string.split(' ').reduce((accum, word) => {
 if (word.length === 3) {
   return accum + ' ';
 }
 return accum + word[word.length - 1].toUpperCase();
}, '');

console.log(array);