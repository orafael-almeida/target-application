async function createFibo(numberToCheck) {
  let fibonacciSequence = [0, 1];
  let nextNumber = 1;

  for (let i = 2; nextNumber <= numberToCheck; i++) {
    nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }
  console.log(fibonacciSequence);
  return fibonacciSequence;
}

async function binarySearch(array, target) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    if (array[middlePointer] === target) {
      return console.log(
        `O número ${target} foi encontrado na posição ${middlePointer}. Portando, o número ${target} pertence à sequência de Fibonacci conhecida como Proporção Áurea.`
      );
    } else if (array[middlePointer] < target) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }
}

const targetNumber = 2504730781961;
const fibonacciArray = await createFibo(targetNumber);

await binarySearch(fibonacciArray, targetNumber);
