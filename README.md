# Array Methods 
## Descriptions, examples, and time complexity

### Arr.map

The map method will loop over each element of the input array and modify the elements according to the callback (predicate?) function passed to it, then return the results in a new array. It does not mutate the original array. It is best to use the map function only when you want to return a new array, without mutating the original.

#### Syntax

arr.map( (element, index, array) => {...}, thisArg)

#### Time complexity

The map method has a minimum time complexity of O(n), or linear time, since it iterates through all array elements. It depends on the callback function passed to it. 

#### Examples

1. Given a list of prices of grocery items, markup all prices up by 5%.
```js
const list = [1.10, 1.00, 5.00];

let markedUpPrices = list.map((price) => Number((price * 1.05).toFixed(2))); // returns [1.15, 1.05, 5.25]
```

### Arr.reduce

The reduce method has an accumulator that collects the results of operations on the values of each element in an array, often reducing the array to a single element or object. It is often used to perform arithmetic on all the values of an array, summing, subtracting, multiplying, or dividing integers. The accumulator begins with an initial value that is provided as the second argument to the function. 

#### Syntax

arr.reduce( (accumulator, currentValue, index, array) => {...}, initialValue)

**It's important to provide an initial value. Otherwise unexpected results may occur.**

#### Time complexity

The minimum time complexity of the reduce method is O(n), or linear time, since it iterates through all array elements once. It can be much slower, depending on the callback function that is passed to it.   

#### Examples
1. Finding the mean of scores on a test
```js
let scores = [65,90,75];
let result = scores.reduce( (acc, el) => acc + el, 0) / scores.length; //returns 76.666
```

### Arr.filter
The filter method takes a callback function that returns a boolean condition and compares each element to this condition, returning all elements that satisfy the condition.

#### Syntax
arr.filter( (item, index, array) => {...}, thisArg)

index, array, and thisArg are optional. 
#### Time Complexity
The filter method has a minimum time complexity of O(n), since it iterates through each element once. 

#### Examples
1. Given a list of prices, find all prices under 10 dollars. 

```js
let prices = [1,5,7,15,25]
let inexpensivePrices = prices.filter( (item) => item < 10); // returns [1,5,7]
```

### Arr.forEach

The forEach method will call a provided callback function on each element in the array. However, it always returns undefined. This method does not mutate arrays itself, however it's callback may. It is best to use a forEach method when you do not intend to return anything.

#### Syntax
arr.forEach( (item, index, array) => {...}, thisArg)

index, array, and thisArg are optional. 

#### Time Complexity
The forEach method has a minimum time complexity of O(n), since it iterates through each element once.

#### Examples
1. Adding an event listener to each element with a given class.
```js
document.querySelectorAll('.btn').forEach( (btn) => btn.addEventListener('click', callback))
```

### Arr.sort
The sort method will compare each element to it's neighbor until sorting in increasing or decreasing order, depending on the callback method used. Sort only requires a callback method to return a positive number, negative number, or zero to perform it's comparisons. 

Sort does mutate arrays.  

#### Syntax
**For numbers**
arr.sort( (num1,num2) => num1 - num2) *Increasing order*
arr.sort( (num1,num2) => num2 - num1) *Decreasing order*
**For Strings**
arr.sort( (a, b) => a < b ? 1 : -1) *Increasing order*
arr.sort( (a, b) => a > b ? 1 : -1) *Decreasing order*
**For case insensitive string comparisons between languages**
arr.sort( (a, b) => a.localeCompare(b) )
arr.sort( (a, b) => b.localeCompare(a) )

#### Time Complexity
It depends on the implementation. Firefox uses the merge sort algorithm, which has a minimum of O(n log(n)). Chrome, as of version 70, uses Timsort which has a minimum of O(n) because it takes advantage of "previous runs of already ordered data." 

#### Examples
1. Sorting an array of ages from youngest to oldest age. 
```js
let ages = [10,35,20,60, 37]
let sortedAges = ages.sort((a,b) => a - b) // returns [10,20,35,37,60]
```

### Arr.slice
The slice method makes a shallow copy of an array, from the provided start index to the end index. For  If an array contains objects, the original objects are still at risk of mutation.

#### Syntax
arr.slice( start, end)

start is the index in which to start, end is the non-inclusive end index (meaning it won't include this end index). A negative index will decrease from the end. if no arguments are passed, slice() will copy the whole array. 
```js
let arr = [1,2,3,4,5]
arr.slice() // [1,2,3,4,5]
arr.slice(1) // [2,3,4,5]
arr.slice(1,3) // [2,3]
arr.slice(-2) // [4,5]
arr.slice(1, -1) // [2,3,4]
```

#### Time Complexity
O(n) - linear time

#### Examples
1. 
```js 
let original = ['OG', 'Array'] 
let sheepleArray = original.slice().push('for real, man') // returns ['OG', 'Array', 'for real, man']
console.log(original) //returns ['OG', 'Array']
```
### Arr.pop

#### Syntax

#### Time Complexity

#### Examples

### Arr.shift

#### Syntax

#### Time Complexity

#### Examples

### Arr.push

#### Syntax

#### Time Complexity

#### Examples

### Arr.unshift

#### Syntax

#### Time Complexity

#### Examples

### Arr.includes

#### Syntax

#### Time Complexity

#### Examples

### Arr.indexOf

#### Syntax

#### Time Complexity

#### Examples

### Arr.every

#### Syntax

#### Time Complexity

#### Examples