console.log('Я учу Js')



let colorEye = 'blue';
let user;
let userName = 'Вася';
user = userName;
console.log(user)

let willYouMerryMe = true;
if (willYouMerryMe) {
    console.log(':)')
} else {console.log(';(')};


// Циклы

let num = 0;
while (num < 5) {
    console.log(num);
    num++;
} 

let num2 = 0;
do {
    console.log(num2);
    num2++;
} while (num2 < 0);


for (let num3 = 0; num3 < 5; num3++)
{
console.log(num3);
}

/*let mum4 = 0;
for (; num4 < 5; num4++) {
   if (num4 ==2) continue;
    console.groupCollapsed(num4);
}*/


let num5 = 0;
for (; num5 < 5; num5++) {
    console.log(num5);
    if (num5 == 2) break;
}
console.log(`Работа окончена, num5 = ${num5}`);


//Функции

/*showMessage();
 function showMessage() {
     console.log("Сообщение");
 }*/

 let message; // объявили переменную

 function showMessage(){
     // используется внешняя переменная
     message = "Сообщение";
      }
      showMessage();
      console.log(message);


     // Глобальные переменные удобны для данных, общих для всей программы

      let globalVar = "Я глобальная переменнная";
      function getSum() {
          let numOne, numTwo;

      function getNumOne() {
          numOne = 1;
          console.log(globalVar);

      }   
      function  getNumTwo() {
      numTwo = 2;
      }
getNumOne();
getNumTwo();

let numSum = numOne + numTwo;
console.log(globalVar);
    }
    console.log(globalVar);
    getSum();


    // Параметры (аргументы) функций

    function calcSum(numOne, numTwo){
        console.log('Переменная numOne:${numOne}');
        console.log("Переменная numTwo:${numTwo}");
        let numSum = numOne + numTwo;

        console.log('Сумма:${numSum}');
    }
    calcSum(1, 2);


    // setTimeout/ setInterval

    function showNumber(num) {
        console.log(num);
        if (num < 5) {
            setTimeout(showNumber, 1000, ++num);
        }
    }
    setTimeout(showNumber, 1000, 1);


    // отмена действия

    function showNumber(num) {
        console.log(num);
        let timeId = setTimeout(showNumber, 1000, ++num)
        if (num === 6) {
            clearTimeout(timeId);
        }
    }
    setTimeout(showNumber, 1000, 1);

    
    function showMessage(){
        let message = "Всем привет! я учу JS";
        
        alert(message);
    }
    
    

    /*function showMessage() {
        let message = "Привет! Я JavaScript!";
        alert(message);
    }*/

    function checkAge(age) {
        if (age > 18) {
            return true;

        } else {
            return confirm("Вы хотите продолжить?");
        }
    }

    let age = prompt('Сколько Вам лет?', 21);
    if (checkAge(age)) {
        alert("Доступ получен");

    } else {
        alert ("Доступ закрыт")
    }