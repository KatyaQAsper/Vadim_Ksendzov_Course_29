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
    (num4 ==2) continue;
    console.groupCollapsed(num4);
}*/


let num5 = 0;
for (; num5 < 5; num5++) {
    console.log(num5);
    if (num5 == 2) break;
}
console.log(`Работа окончена, num5 = ${num5}`);

