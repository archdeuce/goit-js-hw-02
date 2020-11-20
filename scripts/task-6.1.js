function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);

  for (let i = 0; i < array.length; i += 1) {
    numbers[i] = array[i] * 10;
  }

  return numbers;
}
