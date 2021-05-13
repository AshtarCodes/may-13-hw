// Three questions to practice
/* One:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function multiplyIntArr (arr) {
  return arr.reduce((acc, c) => acc * c, 0)
};

/* Two:
You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].*/

function youngestToOldestAgeDifference (arr) {
  let youngest = Math.min(...arr);
  let oldest = Math.max(...arr);
  let difference = oldest - youngest;
  return [youngest, oldest, difference];
};

/* Three:
Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6*/

function lookMaNoTips (arr) {
  return arr.slice(1,-1).reduce((acc, c) => acc + c, 0);
};

// Five CODEWARS arrays for may 13 homework

//1. P: [correct answers to exam], [student's answers to exam] R: integer of score: +4 correct, -1 wrong, 0 for blank; if <0 return 0. Arrs are not empty, are same length
// E: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// Ps: two for loops comparing with conditionals. 
function checkExam (arr1, arr2) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++){
      if (arr2[i] === ""){
        result += 0;
      } else if (arr1[i] === arr2[i]){
        result += 4;
      } else if (arr1[i] !== arr2[i]){
        result += -1;
      }
    }  
    return (result < 0) ? 0 : result;
};
  
  //solution 2
  function checkExam(array1, array2) {
    // good luck
    let correct = array1
      .filter((el, i, arr1) => el === array2[i])
      .reduce((acc, el) => {
        if (el != undefined){
          acc += 4;
        }
        return acc;
      }, 0);
    let incorrect = array2
      .filter((el, i, arr2) => el !== array1[i])
      .reduce((acc, el) => {
        if (el === "") {
          return acc;
        } else {
          acc += 1
        }
        return acc;
      }, 0);
    
    let answer = correct - incorrect;
    return (answer > 0) ? answer : 0;
  };
  
  // 2. Find the Difference in Age between Oldest and Youngest Family Members
  function differenceInAges(ages){
    let oldest = Math.max(...ages)
    let youngest = Math.min(...ages)
    let difference = oldest - youngest;
    return [youngest, oldest, difference];
  };
  
  // 3. To square(root) or not to square(root)
  // P: integer array. R: square root as an integer or square the number
  // E: [4,3,9,7,2,1] -> [2,9,3,49,4,1] Ps: map and check with Number.isInteger 
  function squareOrSquareRoot(array) {
    let result = array.slice();
    return array.map((el, i) => {
      if (Number.isInteger(Math.sqrt(el))){
        return Math.sqrt(el);
      } else {
        return Math.pow(el, 2);
      }
    });  
  }
  
  // 3. Printing Array elements with Comma delimiters
  /* Input: Array of elements ["h","o","l","a"]
  Output: String with comma delimited elements of the array in th same order.
  "h,o,l,a" */
  function printArray(array){
    return array.join(',');
  };
  
  // 4. Grasshopper - Array Mean
  function findAverage (arr) {
    if (arr.length === 1) return arr[0];
    return arr.reduce((acc, el) => acc + el, 0) / arr.length;
  }
  
  // 5. Add length
  // P: string R: an array of each word with it's length
  // E: addLength('apple ban') => ["apple 5", "ban 3"]
  // Ps: take string and split into words. for each word, add a space and it's length as an integer. return the array of all of these. 
  function addLength (str) {
    let arr = str.split(' ');
    let result = [];
    for (let word of arr){
      word = word + ` ${word.length}`;
      result.push(word)
    };
    return result;
  };
  // solution 2 
  function addLength(str) {
    return str.split(' ').map((word) => word + ` ${word.length}`);  
  };