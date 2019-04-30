/* eslint-disable indent */
/* eslint-disable strict */


// function repeat(fn, n) {
//     for (let i = 0; i < fn.length; i++){
//         n(fn[i], i);
//     }

function repeat(fn, n) {
    for (let i = 0; i <= n; i++) {
        fn();
    }
}



function hello(){ 
    console.log('Hello world'); 
    }
 
function goodgye(){
     console.log('Goodbye world'); 
    }

console.log(repeat(hello, 5));