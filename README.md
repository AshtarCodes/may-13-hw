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
2. Mapping an array of numbers to an array of square roots
```js
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```
3. Reformatting objects in an array
```js
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
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
2. Sum of values in an object array
```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum) // logs 6
```
3. Flatten an array of arrays 
```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
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
2. Searching in an array
```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
```
3. Filtering invalid entries from JSON
```js
let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5
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
2. Copying elements from one array to another. 
```js
const items = ['item1', 'item2', 'item3']
const copyItems = []
// after
items.forEach(function(item){
  copyItems.push(item)
})
```
3. Appending a list of child elements to a parent element
```js
const ul = document.querySelector('ul')
let li-1 = document.createElement('li')
let li-2 = document.createElement('li')
let li-3 = document.createElement('li')
let list = [li-1,li-2,li-3]
list.forEach(li => ul.appendChild(li))
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
2. Sorting items from high to low price
```js
let items = [ {name: 'cheese-its', price: 2.50}, {name: 'pretzels', price: 1.25}, {name: 'Chobani Yogurt', price: 1.50} ]

let mostToLeastExpensive = items.sort( (a,b) => a.price < b.price ? 1 : -1)
console.log(mostToLeastExpensive) // returns [ {name: 'cheese-its', price: 2.50}, {name: 'Chobani Yogurt', price: 1.50}, {name: 'pretzels', price: 1.25} ]
```
3. Sorting non-ASCII characters
```js
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
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
The pop method removes an item from the end of an array. 
#### Syntax
arr.pop()
#### Time Complexity
O(1) - constant time since the end of the array is easy to remove and add items from. No indeces need to be updated. 
#### Examples
1. 
```js
let arr = [1,2,3,4]
console.log(arr.pop()) // returns [1,2,3]
```
2. Using apply() or call() on array-like objects
```js
var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'
```
### Arr.shift
It removes an item from the beginning of an array. All other indeces are updated to reflect the removed element. 
#### Syntax
arr.shift()
#### Time Complexity
O(n) - linear time, since the indeces of all other elements need to be updated
#### Examples
```js
let arr = [1,2,3,4]
console.log(arr.shift()) // returns [2,3,4]
```
### Arr.push
This method adds an element to the end of an array. 
#### Syntax
arr.push(el)
#### Time Complexity
O(1) - constant time, since it will always be one operation no matter the size of the array.
#### Examples
```js
let arr = [1,2,3,4]
console.log(arr.push(5)) // returns [1,2,3,4,5]
```
### Arr.unshift
This method adds one element to the beginning of an array. 
#### Syntax
arr.unshift(el)
#### Time Complexity
O(n) - linear time, since the indeces of each element needs to be updated. 
#### Examples
```js
let arr = [1,2,3,4]
console.log(arr.unshift(0)) // returns [0,1,2,3,4]
```
### Arr.includes
This method checks if the array contains at least one of the element you pass it. It returns a boolean, true or false. Notably, this method correctly identifies NaN.  
#### Syntax
arr.includes(el, fromIndex)

el is the element or value to search for.
fromIndex is optional - it specifies which index to begin searching from.

#### Time Complexity
O(n), since it performs a linear search. 
#### Examples
```js
let arr = [1,2,3,4]
console.log(arr.includes(3)) // returns true
```
```js
[1, 2, 3].includes(2)      // true
[1, 2, 3].includes(4)      // false
[1, 2, 3].includes(3, 3)   // false
[1, 2, 3].includes(3, -1)  // true
[1, 2, NaN].includes(NaN)  // true
```
### Arr.indexOf
This method looks up the index of an element in the array. If the element is not found, it returns -1.  
#### Syntax
arr.indexOf(searchElement, fromIndex)

fromIndex is optional. and refers to  
#### Time Complexity
O(n) - linear time, since the array elements must be walked through in order.  
#### Examples
```js
let arr = [1,2,3,4]
console.log(arr.indexOf(3)) // returns 2
```
```js
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```
### Arr.every
This method checks if  that every element in an array satisfies a given condition. It returns true or false. 
#### Syntax
arr.every(callbackFn, thisArg)

function callbackFn (element, index, array) {...}

index, array, and thisArg are optional. 

#### Time Complexity
O(n) at minimum, since it traverses the entire array.
#### Examples
1.
```js
let arr = [1,2,3,4]
console.log(arr.every((num) => num < 5)) // returns true
console.log(arr.every((num) => num < 3)) // returns false
```
2.
```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```
3. Check if each object has a certain property
```js
function hasItsDay (dog) {
    return (dog.day)
}
const dogs = [ {name: 'spot', day: true}, {name: 'spike', day: true}, {name:'Johnson', day: true} ]

dogs.every(hasItsDay) // returns true
```

##### That concludes this quick primer on Array Methods. Hope you enjoyed it!