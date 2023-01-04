function insertionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      current = numbers[i];
      let j = i - 1;
      while (j >= 0 && numbers[j] > current) {
        numbers[j + 1] = numbers[j];
        j--;
      }
      numbers[j + 1] = current;
    }
    return numbers;
}
  
let numbers = [5, 1, 7, 3, 8, 9, 2, 4, 6];
let sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


  