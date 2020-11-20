let input;
let total = 0;

while (true) {
  let userInput = prompt("Введите число");
  let number = Number(userInput);

  if (!userInput) {
    break;
  }

  if (Number.isInteger(number)) {
    total += number;
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
}

alert("Общая сумма чисел равна " + total);
