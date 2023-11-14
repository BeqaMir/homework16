/*1*/
let number = [5, 10, 15, 20, 25];
console.log(number[0] + number[1] + number[2] + number[3] + number[4]);


/*2*/
let developments = [
    {
        "name": "beqa",
        "age": 26,
        "address": "vaja-pshavela #45"
    },
    {
        "name": "lika",
        "age": 27,
        "address": "vaja-pshavela #46"
    },
    {
        "name": "giorgi",
        "age": 28,
        "address": "vaja-pshavela #47"
    }
];


/*3*/
console.log(`My name is ${developments[0].name}.`);
console.log(`My age is ${developments[0].age}.`);
console.log(`My address is ${developments[0].address}.`);


/*4*/
if(developments[1].age < 19){
    console.log("I am a teenager.");
}
else{
    console.log("I am an adult.");
}


/*5*/
let numb = '';

for (let i = 0; i < 5; i++) {
  numb = numb + i;
}
console.log(numb);


/*6*/
const currentDay = new Date().getDay();

switch (currentDay) {
	case 0:
		console.log("Sunday :)");
		break;
	case 1:
		console.log("Monday :(");
		break;
	case 2:
		console.log("Tuesday :(");
		break;
	case 3:
		console.log("Wednesday :(");
		break;
	case 4:
		console.log("Thursday :(");
		break;
	case 5:
		console.log("Friday :)");
		break;
	case 6:
		console.log("Saturday :)");
		break;
	default:
		console.log("I want to every day to be Saturday");
}
