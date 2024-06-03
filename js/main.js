// -------- Задание №1 --------
const userNumber = parseInt(prompt('Введите число, которое хотите возвести в степень:', 2));
const userPow = parseInt(prompt('Введите число, которое является степенью для предыдущего:', 3));

function calcPow(number, pow){
    if(pow === 0){
        return 1;
    }
    if(pow === 1){
        return number;
    }
    return number * calcPow(number, pow - 1);
}

document.write(`<p>Число ${userNumber} в степени ${userPow} = ${calcPow(userNumber, userPow)}</p>`);

// -------- Задание №2 --------
const array = [1, 2, 3, 4, 5, 6, 7];
const userItem = +prompt('Введите элемент массива, который хотите удалить([1, 2, 3, 4, 5, 6, 7]):', 5);

function removeElement(arr, item){
    let index = arr.indexOf(item);
    if(index !== -1){
        arr.splice(index, 1);
    }
}

removeElement(array, userItem);
document.write(`<p>Результат после удаления элемента ${userItem}: ${array}</p>`)

// Я бы сделал это так, но по заданиую нужно менять массив, а не возвращать новый
// function removeElement(arr, item){
//     return arr.filter(elem => elem !== item);
// }

// -------- Задание №3 --------
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let key = '';
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

const key = generateKey(16, characters);

document.write(`Ваш ключ из случайных букв и чисел: ${key}`);