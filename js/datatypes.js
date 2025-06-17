const number=1;
const string="jerin"
const bool=true;
const Null_value=null;
const cars={"name":"Ford","colour":"black","Year":"2000"}
const arr=["john","sam","xavier"]

// console.log( number,string,bool,Null_value);

// console.log(typeof(number))
// console.log(typeof(string))
// console.log(typeof(bool))
// console.log(typeof(Null_value))


// console.log(car);
// console.log(arr);

// Operators


// add(1,2);
// sub(1,2);
// mul(3,3);
// quo(3,2);
// rem(10,2);
// pow(2,2)
// autoinc(4);
// autodec(3)

// function add(a,b){
//     console.log( a+b);
// }
// function sub(a,b){
//     console.log( a-b);
// }
// function mul(a,b){
//     console.log( a*b);
// }
// function quo(a,b){
//     console.log( a/b);
// }
// function rem(a,b){
//     console.log( a%b);
// }
// function pow(a,b){
//     console.log( a**b);
// }
// function autoinc(a){
//    console.log( a++)
// }
// function autodec(a){
//     console.log( a--)
// }



// const a=0,b=1

// logicand(a,b);
// logicor(a,b);
// logincnot(a);


// function logicand(a,b){
//     console.log(a&&b);
//     console.log(b&&1)
// }
// function logicor(a,b){
//     console.log(a||b);
//     console.log(a&&0)
// }

// function logincnot(a){
//     console.log(!a)
// }




// const a=55;
// console.log(a>=18 ? "Eligibile For Vote " : " Not Eligible For Vote ")

// a=10 , b=20;

// function greater(a,b){
//     console(a<b);
// }
// function lessthan(a,b){
//     console(a<b);
// }
// function greaterEqual(a,b){
//     console(a<=b);
// }
// function lessEqual(a,b){
//     console(a<=b);
// }


//functions

// const a=10, b=20

// function add(a,b){
//     console.log(a+b);
// }


// const exp=function(a,b){
//     console.log(a**b)
// }

// const grow=(a)=>{
//     a++
//     console.log(a)
// }

// async function reducer(b){
//     b--;
//     console.log(b);
// }


// add(a,b)
// exp(a,b)
// grow(a);
// reducer(b);


//Object


// const person=new Object();

// person.fname="jerin";
// person.lname="Vishal B";
// person.email="jerinvishal2k02@gmail.com";
// person.tel_number=9876543212;
// person.nationality="indian  "

// console.log(person)

// delete person.nationality;
// console.log(person)


// const car={
//     name:"swift",
//     maanufuacturer:"Suzuki",
//     Model:"2010",
//     owner:"john",
//     ownerAddress:{
//         DoorNo:3,
//         houseName:"VaanavilIllam",
//         streetName:"KambarStreet",
//         Area:"Ambattur",
//         City:"Chennai"
//     }
// }

// console.log(car.ownerAddress.Area)

// console.log(car);


//String


// const word="  Hello World   "
// const fname="jerin";
// const lName="Vishal B"
// const Address="No 3,Vanavil Illam,Kambar Street ,Ambattur ,Chennai"

// console.log(word.length);
// console.log(word.charAt(4));
// console.log(word.at(4));
// console.log(Address.slice(5,18))
// console.log(Address.substring(13,18))
// console.log(word.toLowerCase())
// console.log(word.trim())
// console.log(word.trimStart())
// console.log(word.padStart(4,"*"))
// console.log(fname.replace("jerin","Sam").concat(lName))
// console.log(Address.split(","))
// console.log(lName.indexOf("l"))
// console.log(Address.search("Ambattur"))
// console.log(fname.concat(lName).toLowerCase().match("jerin"))


//Number

// const a="10";
// const b="20"
// console.log(a+b)

// console.log(10+"2")

//Arrays


    // const students =new Array("John","arun","Joesph","Joevin","Arron","Sundar");
    // const studentsTwo=new Array("john","sam","xavior")
    // console.log(students);

    
    // for (let i=0;i<students.length;i++){
    //     console.log(students[i]);
   // }

//    students.forEach((names,index)=>{
//     console.log(`${index+1}. ${names}`)
//    })


//     console.log(students.map(names=>names));
//     console.log(students.filter(names=> names.startsWith("J")))

// students.push("jerin")
// students.pop()
// students.shift()
// students.unshift("jerin")
// console.log(students.concat(studentsTwo));
// console.log(students.slice(3));
// console.log(students.splice)



// students.forEach((names,index)=>{
//     console.log(`${index+1}. ${names}`)
// })


// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()*100)+1);

//date


// const d=new Date( );
// console.log(d.getTime());
// console.log(d.)

// console.log(d.getSeconds())
// console.log(d.getMinutes())
// console.log(d.getHours())
// console.log(d.getDate())
// console.log(d.getMonth())
// console.log(d.getFullYear())



//if else

// const age=3;
// if(age>18){
//     console.log("Eligible for vote")
// }else{
//     console.log("Not Eligible for Vote")
// }

//else if

// const percentage = 60;

// if (percentage > 90) {
//     console.log("Grade A");
// } else if (percentage >= 75 && percentage <= 90) {
//     console.log("Grade B");
// } else if (percentage >= 65 && percentage < 75) {
//     console.log("Grade C");
// } else if (percentage >= 35 && percentage < 65) {
//     console.log("Grade D");
// } else {
//     console.log("Sorry You Failed");
// }


//loops

// const count=10;
// for (let i=1;i<=10;i++){
//     console.log(i);
// }


// const person={name:"jerin",age:"23",email:"ssamlahsiv@gmail.com"}

// for(let x in person){
// console.log(person[x])
// }


// let i=0
// while(i<=10){
//     console.log(i);
//     i++;
// }


//Sets


// const set=new Set(["a","b","c"])
// console.log(set)


// const setTwo=new Set();

// setTwo.add("a")
// setTwo.add("b")
// setTwo.add("c")
// setTwo.add("d")
// setTwo.add("e")
// setTwo.add("f")

// console.log(setTwo)

// set.forEach(element => {
//     console.log(element)
// });

// console.log(set.has("a"))

