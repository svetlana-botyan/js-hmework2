 //task 1
const array = [6, 10, 15, 51, 55, 44, 4474];

for (let item of array){
    console.log(item);
}

for (let i = 0; i<array.length; i++){
    console.log(array[i])
}

//1.2
console.log(array[0] + array[1]+ array[2] + array[3] + array[4]+ array[5] + array[6]);
//1.3
console.log(array[0] + array[1]+ array[5] + array[6]);


//task2
const array2 = [5, 4, 3, -3, -10, -1, 8, -20, 0];
const newArray2 = [];
for (let item2 of array2){
        if (item2 >= 0) {
            newArray2.push(item2);
        }
    }


//task3
const array3 = [5, 4, 3, 8, 0];
let limit = 5;
const newArray3 = [];
for (let item3 of array3){
    if (item3 >= limit) {
        newArray3.push(item3);
    }
}

//task 4
const array4 = [
    { first: 2 },
    { second: 352 },
    { third: 4 },
    { fourth: 251 },
    { '5': 1251 }];

for (let item4 of array4) {
    for (let key in item4) {
        if (item4[key] > 10) {
            console.log(item4[key]);
        }
    }
}

//task5
const array5 = ['Понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',]

let newArr5 = [];

for (let item5 of array5) {
    newArr5.push({ [item5]: item5.length });
}

for (let itemNew5 of newArr5) {
    for (let key5 in itemNew5) {
        console.log(key5 +'-' + itemNew5[key5]);
    }
}

