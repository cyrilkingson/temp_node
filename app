// const person = {
//     name : "wsq",
//     age : 52,
//     greet(name){
//         console.log("hello!, " + this.name);
//     }
// }
// console.log(person);

// person.greet();



// for(const hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby=>"hobby: "+hobby));



// const person = {name:"wsq"}
// // person.name = "dxs";

// console.log(person);



// hobbies.push("movies");

// for(hobby of hobbies){
//     console.log(hobby);
// }
// const hobbies = ["sports", "cooking", "reading"];
// const hobbies2 = [...hobbies]

// hobbies2.push("prog");
// console.log(hobbies);
// console.log(hobbies2);

// const person = {name: "wsa",age:35};

// const person2 = {...person,age:52};

// console.log(person);
// console.log(person2);

// const toArrays = (...args) => {
//     return args;
// }

// console.log(toArrays(5,6,5,8,7));




// const person =  {name: 'log', age:56};
// const {name,age} = person;
// console.log(name);
// console.log(age);


// const hobbies = ['sports', "cooking"];
// const [h1,h2] =hobbies;
// console.log(h1,h2);


// setTimeout(() => {
//     fetchData(() => { 
//         console.log("hlo");
// })
// },2000);

// const fetchData = (callback) =>{
//     callback();
// }

// console.log("hola");



// let myPro = new Promise((myResolve, myReject)=>{
//     setTimeout(()=>{
//         myResolve("cyril");
//     },2000)
// })
// myPro.then((name)=>{
//     return `hi da ${name}`;
// }).then((name)=>{
//     console.log(name);
// }).catch(()=>{
//     console.log("failed");
// })
