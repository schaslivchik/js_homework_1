// task vars

// 1

// const a = 6;
// const b = 10;
// console.log(a * b);


// 2

// const c = 60;
// const d = 6;
// console.log(c / d);


// 3

// const e = 10;
// const f = 12;
// console.log(e + f);


 // 4

// let num = 5;
// console.log('num += 11 ', num += 11);
// console.log('num -= 11 ', num -= 11);
// console.log('num *= 11 ', num *= 11);
// console.log('num /= 11 ', num /= 11);
// console.log('++num ', ++num);
// console.log('--num ', --num);




//task prompt

// 1

// const squareNumber = Number(prompt('Enter your number '));
// alert('Result square number = ' + squareNumber * squareNumber);


// 2

// const number1 = +prompt('Enter first number ');
// const number2 = +prompt('Enter second number ');
// alert('Result ' + (number1+number2)/2);


//3

// const minutes = +prompt('Enter minutes ');
// alert(minutes * 60 + ' seconds');

//4

// const greeting = 'Hello ';
// const userName = prompt('Enter your name ');
// alert(greeting + userName);



//task if

//1

//  const userNumber = Number(prompt('Enter number ')) === 10 ? 'true' : 'false';
//  console.log(userNumber);

//2

// const test = true;
// (!test) ? console.log('Верно') : console.log('Неверно'); 
// (test) ? console.log('Верно') : console.log('Неверно'); 

//3
const amount = Number (prompt('Введите суму '));
if(amount >= 500 && amount <= 800) {
   alert(amount - (amount * 3 / 100) + ' скидка 3%');
 } else if(amount > 800){
  alert(amount - (amount * 5 / 100) + ' скидка 5%');
 } else { 
     alert('скидки нету');
 }


//loop

//1
// let stepsCount = 25;
// const lastStep = 0;

// while(stepsCount >= lastStep) {
//   console.log(stepsCount);
//   stepsCount--;
// }

// for(let i = stepsCount; i >= 0; --i){
//   console.log(i);
// }



//2
// const maxNumber = 50;
// let count = 10;

// while(count <= maxNumber) {
//   if(count % 5 === 0){
//     console.log(count);
//   }
//   count++;
// }

// for(let i=10; i <= maxNumber; i++){
//   if(i % 5 === 0){
//     console.log(i);
//   }
// }


//3
// const maxValue = 100;
// let count = 1;
// let sum = 0;

// while(count <= maxValue){
//   sum += count;
//   count++;
// }
// console.log(sum);

// for(let i = 0; i <= maxValue; i++){
//   sum += i;
// }
// console.log(sum);



//switch
// const numberDay = +prompt('Введите число от 1 до 7');
// switch(numberDay) {
//   case 1:
//     alert('Понедельник');
//     break;
//   case 2:
//     alert('Вторник');
//     break;
//   case 3:
//     alert('Среда');
//     break;
//   case 4:
//     alert('Четверг');
//     break;
//   case 5:
//     alert('Пятница');
//     break;
//   case 6:
//     alert('Суббота');
//     break;
//   case 7:
//     alert('Воскресенье');
//     break;
//   default: 
//     alert('Неверно введено значение')
// }

// const day = +prompt('Введите число от 1 до 31');
// switch(day){
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     alert('Первая декада');
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:
//     alert('Вторая декада');
//     break;
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:
//   case 31:  
//     alert('Третья декада');
//     break;
//   default:
//     alert('Неверно введено значение');        
// }