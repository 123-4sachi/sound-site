// // console.log(`hello`);
// // console.log(`I like pizza`);

// // window.alert(`this is an alert!`);

// // let msg = 'kitu';

// // function showMessage(from,text) {
// //     form = '*' + from + '*';
// //     alert(from + ':' + text);
// // }

// // let from = msg = 'sachi';

// // showMessage(from, "hello");

// // alert(from);


// function result(test) {
//     if (test  === 99) {
//         return true; 
//     } else {
//       return false; 
//     }
    
// }

// let test = parseInt(prompt('What is 59 + 40 is = ?'));

// if ( result(test)) {
//     alert( 'Shabas beta' );
// } else {
//     alert ("You fucking idiot, get out of here");
    
// }


// function checkRel(number 1, number2){
//     return number1 + number2
// }

// const result = checkRel (3,5)

// console.log("Result: ", result);


// (function(x) {21322
//     delete x;
//     console.log(x);
//   })(5);
  


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }
 
// console.log(checkAge(199));

// const myArr = [0,1,2,3,4,5]

// console.log(myArr.includes(9));

// const friends = [`arjun`,`riya`, "jiya", "chick",];
// friends[2] = 'sunny';
// friends.shift();
// friends.unshift('cookie');

// console.log(friends);



let myCrushes = ['rand', 'tappse', 'kriti', 'ryan', 'henry'];
//now i want to add new crushes too at the end and at the beginning
myCrushes.unshift('jake');
myCrushes.push('drive');
//no. method
myCrushes[6]='samiksha';
//accessing the last one and the first once let's see what changed

// trying splice
myCrushes.splice(1,1);
myCrushes.splice(2,0, 'nigga', 'higa');

//trying slice
console.log(myCrushes.slice(1,5));

console.log(myCrushes.at(-1));
console.log(myCrushes.at(0));

console.log(myCrushes);  //let's see if this way of study gonna work



let styles = ['jazz', 'blue']
//let's push rock n rol
styles.push('rock-n-roll');

//replacing blue with classics
styles[1] = 'classics';

//extravting first element
styles.shift();
styles.unshift('Rap', 'Reggae');

console.log(styles);


const all = myCrushes.concat(styles);
console.log(all);

const allOf = [...myCrushes, ...styles]
console.log(allOf);


const One = [1,2,3,4,5,[2,3,4,5,5,6],34,[34,5,4,65,76,786,8]]
const One1 = One.flat(Infinity);
console.log(One1);







