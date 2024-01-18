/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(...args) {
  let max = args[0];

  for (let i = 0; i < args.length; i += 1) {
    if (args[i] > max) {
      max = args[i];
    }
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;

  for (let i = 1; i < 8; i += 1) {
    if (queen.x + i === king.x && queen.y + i === king.y) return true;
    if (queen.x - i === king.x && queen.y - i === king.y) return true;
    if (queen.x - i === king.x && queen.y + i === king.y) return true;
    if (queen.x + i === king.x && queen.y - i === king.y) return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (a === b && a * 2 >= c) return true;
  if (a === c && a * 2 >= b) return true;
  if (b === c && b * 2 >= a) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';

  if (num >= 10) {
    const tens = Math.trunc(num / 10);

    for (let i = 0; i < tens; i += 1) {
      result += 'X';
    }
  }

  const units = num % 10;

  switch (units) {
    case 1:
      result += 'I';
      break;
    case 2:
      result += 'II';
      break;
    case 3:
      result += 'III';
      break;
    case 4:
      result += 'IV';
      break;
    case 5:
      result += 'V';
      break;
    case 6:
      result += 'VI';
      break;
    case 7:
      result += 'VII';
      break;
    case 8:
      result += 'VIII';
      break;
    case 9:
      result += 'IX';
      break;

    default:
      break;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const data = {
    '-': 'minus',
    point: 'point',
    coma: 'point',
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  let result = '';

  if (numberStr.length === 1) return data[numberStr];

  for (let i = 0; i < numberStr.length; i += 1) {
    const symb = numberStr[i];
    switch (symb) {
      case '-':
        result += data[symb];
        break;
      case '.':
        result += data.point;
        break;
      case ',':
        result += data.point;
        break;
      case '0':
        result += data[symb];
        break;
      case '1':
        result += data[symb];
        break;
      case '2':
        result += data[symb];
        break;
      case '3':
        result += data[symb];
        break;
      case '4':
        result += data[symb];
        break;
      case '5':
        result += data[symb];
        break;
      case '6':
        result += data[symb];
        break;
      case '7':
        result += data[symb];
        break;
      case '8':
        result += data[symb];
        break;
      case '9':
        result += data[symb];
        break;

      default:
        break;
    }

    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let invertStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    invertStr += str[i];
  }

  return invertStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  const digitStr = String(digit);

  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === digitStr) return true;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let left = 0;
    let right = 0;

    for (let j = i + 1; j < arr.length; j += 1) {
      right += arr[j];
    }
    for (let j = i - 1; j >= 0; j -= 1) {
      left += arr[j];
    }

    if (left === right) return i;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  let counter = 1;
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;

  for (let i = 0; i < size; i += 1) {
    result[i] = [];
    for (let j = 0; j < size; j += 1) {
      result[i][j] = 0;
    }
  }

  while (startRow <= endRow && startCol <= endCol) {
    let i = startCol;
    let j = startRow;
    let k = endCol;
    let l = endRow;

    while (i < endCol) {
      result[startRow][i] = counter;
      counter += 1;
      i += 1;
    }
    startRow += 1;
    while (j < endRow) {
      result[j][endCol] = counter;
      counter += 1;
      j += 1;
    }
    endCol -= 1;
    while (k >= startCol) {
      result[endRow][k] = counter;
      if (k !== startCol) {
        counter += 1;
      }
      k -= 1;
    }
    endRow -= 1;

    while (l >= startRow) {
      result[l][startCol] = counter;
      counter += 1;
      l -= 1;
    }

    startCol += 1;
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function swap(currArr, i, j) {
    const array = currArr;
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i += 1;
      }
      while (array[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        swap(array, i, j);
        i += 1;
        j -= 1;
      }
    }
    return i;
  }

  function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quickSort(array, left, index - 1);
      }
      if (index < right) {
        quickSort(array, index, right);
      }
    }
  }

  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let currIterations = iterations;

  while (currIterations) {
    let left = '';
    let right = '';

    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        left += result[i];
      } else {
        right += result[i];
      }
    }
    result = left + right;
    currIterations -= 1;

    if (result === str) {
      currIterations = iterations % (iterations - currIterations);
    }
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let arr = [...String(number)];
  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const mySlice = (array, index, start = null) => {
    const result = [];

    if (start !== null) {
      for (let i = start; i < index; i += 1) {
        result.push(array[i]);
      }
    } else {
      for (let i = index; i < array.length; i += 1) {
        result.push(array[i]);
      }
    }

    return result;
  };

  const myLastIndexOf = (array, target) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      if (array[i] === target) return i;
    }

    return -1;
  };

  const myConcat = (array1, array2) => [...array1, ...array2];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      const rest = mySlice(arr, i);
      rest.sort((a, b) => b - a);

      const target = arr[i - 1];
      let secondTarget = 0;

      let j = rest.length;

      while (j >= 0) {
        if (rest[j] > target) {
          secondTarget = rest[j];
          j = -1;
        }
        j -= 1;
      }

      const secondTargetIndex = myLastIndexOf(arr, String(secondTarget));
      swap(i - 1, secondTargetIndex);

      const firstPart = mySlice(arr, i, 0);
      const secondPart = mySlice(arr, i).sort((a, b) => a - b);
      const currArr = myConcat(firstPart, secondPart);
      const currentResult = +currArr.join('');

      arr = currArr;

      if (currentResult > number) return currentResult;
    }
  }

  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
