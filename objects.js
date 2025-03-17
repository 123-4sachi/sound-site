//  const JsUser = {
//     friend: "nigga",
//     age:18,
//     location: "gurgaon",
//     handle: "stayz",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Tuesday"]
//  }

//  console.log(JsUser);
//  console.log();
 
// //trying object.assign
// const obj = {1:2, 2:4}
// const obj2 = {a:2, b:4}
// const obj3 = Object.assign({}, obj,obj2)
// console.log(obj3);




// function isFilled(obj) {
//       obj = {}
//       for(let key in obj) {
//          if (obj.hasOwnProperty(key)){
//          return false;
//       }
//    }
//       return true;
// }

// console.log(isFilled({}));
// console.log(isFilled);


/// sum exercise with loop function

// const Salaries = {
//    meter: 500,
//    petrol: 500,
//    chutiyap: 500,

// };

// let total = 0;

// for (let value in Salaries) {
//    total += Salaries[value];
// }

// // const sum = sumValues(Salaries);

// console.log(total);



// //multiply ex

// menu = {
//    myAge: 10,
//    height: 3,
//    title: "My physical characters"
// };

// function multiplyThings(upd) {
//    for (let key in upd) 
//       return upd[key] *=2; {
//       if (typeof upd[key] == 'number'){
//          upd[key] *=2;
//       }
//    }
// }

// // Call the function correctly

// multiplyThings(menu);
// // Check the modified object
// console.log(menu);


// student = {
//    name: "Alex",
//    age:"twenty",
//    marks: [80,90,78,92]
// }

// student.marks.push(83);
// let total = 0;
// let avg = 0;

// for (let value in student.marks) {
//    if (typeof student.marks[value] == 'number'){
//    total += student.marks[value];
//    }
//    const Newavg = avg = total / 4;
// }

// console.log(total);

// console.log(avg);

// /// 3rd exercise

// team = {
//    name: "Alice", score: 10,
//    name: "Bob", score: 15 ,
//    name: "Charlie", score: 12 
// };


// let totalScore = 0;

// for (let value in team.score) {
//    if (typeof team.score[value] == 'number'){
//       totalScore += team.score[value];
//    }
// };


// console.log(totalScore);



let roboDog1 = { sound: "woof", speak() { console.log(this.sound); } };

team = {
   Aname: "Alice", score: 10,
   name: "Bob", score: 15 ,
   name: "Charlie", score: 12 
};

console.log(team.hasOwnProperty('name'));

const {Aname: nm} = team
console.log(nm);

