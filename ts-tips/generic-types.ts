// generic types

function swap<T>(array: T[], index1: number, index2: number): void {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
swap(numbersArray, 0, 4);
console.log("Swapped numbers array:", numbersArray); // Output: [5, 2, 3, 4, 1]

const stringsArray: string[] = ["apple", "banana", "orange"];
swap(stringsArray, 1, 2);
console.log("Swapped strings array:", stringsArray); // Output: ["apple", "orange", "banana"]


function findMax<T extends number | string>(array: T[]): T | null {
  if (array.length === 0) return null;

  let maxElement: T = array[0];
  for (const element of array) {
    if (element > maxElement) {
      maxElement = element;
    }
  }
  return maxElement;
}

const numbers: number[] = [10, 20, 5, 30, 15];
console.log("Max number:", findMax(numbers)); // Output: 30

const words: string[] = ["apple", "banana", "orange", "grape"];
console.log("Max word:", findMax(words)); // Output: "orange"
