// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//

/**
 * I: The function has one value as the parameter
 * O: the function returns an input value that is not changed
 * C:N/A
 * E:N/A
 */
_.identity = function (value) {
  //return unchanged
  return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
/**
 * I: function has one parameter called value
 * O: return the type of values as a string
 * C: use typeOf and if statement
 * E:N/A
 *  
 */

_.typeOf = function (value) {

  if(typeof value === 'string'){
    return 'string'
  }
   
  if(typeof value === 'object'){
   if(value === null){
    return 'null'
   }
    
   if(Array.isArray(value)){
      return 'array'
   }
      if (value instanceof Date){
        return 'date'
    }
    return 'object'
}
   if(typeof value === 'undefined'){
    return 'undefined'
  }
  if (typeof value === 'number'){
    return 'number'
  }
  if(typeof value === 'boolean'){
    return 'boolean'
  }
  
  if(typeof value === 'function'){
  

    return 'function'
  }
  return unknown
}
  

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
/**
 * I:function has two parameters array and number
 * O: return first number
 * C:use  if statement, typeOf
 * E:N/A
 */
_.first = function (array, number) {
if(!Array.isArray(array)){
  return [];
}
if(typeof number !== 'number'){
  return array[0]
}
if( number < 0){
  return [];
}
  if(number > array.length){
return array;
  }
return array.slice(0, number);
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
/**
 * I:function has two parameters array and number
 * O: return last number
 * C:use  if statement, typeOf
 * E:
 */
_.last = function (array, number) {
  //If <array> is not an array,
  if (!Array.isArray(array)) {
    //return empty array literal
    return [];
  }
  //If <number> is not given or not a number
  if (typeof number !== 'number') {
    //return just the last element in <array>.
    return array[array.length - 1];
  }
  //if <number> is negative
  if (number < 0) {
    //return empty array literal
    return []
    //if <number> is greater than <array>.length
  } if (number > array.length) {
    return array;
    // return the whol array
  }
  //return the last <number> items of <array>
  //array.slice(-number) returns the last number elements of the array
  return array.slice(-number)
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
/**
 * I: function has parameter of array and value
 * O: return the array's index or -1
 * C: use for loop
 * E: N/A
 */
_.indexOf = function (array, value) {
  if(!Array.isArray(array)){
    return -1
  }
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
    return i
    }

    }
    return -1


}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (array, value) {
  if (value === undefined){
    return false;
  }
return array.includes(value) ? true : false

}

  /** _.each
  * Arguments:
  *   1) A collection
  *   2) A function
  * Objectives:
  *   1) if <collection> is an array, call <function> once for each element
  *      with the arguments:
  *         the element, it's index, <collection>
  *   2) if <collection> is an object, call <function> once for each property
  *      with the arguments:
  *         the property's value, it's key, <collection>
  * Examples:
  *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
  *      -> should log "a" "b" "c" to the console
  */
  _.each = function(collect, func) {
    // collect is an array
      //create for loop to iterate through array
        // call func with collect at each index , indedx, and collect
      
      // if typeof collect is an object and not null
      // create for in loop
        // func collect at each key, key, and collect

      
    
    }
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// function with parameter array
_.unique = function (array){
//initialize 
var newArray = [];
      //create for loop to iterate through array
for(var i = 0; i < array.length; i++){
  //will check for duplicates. It will check the first index of new array and array at the index. -1 checks if array[i] is not already present in newArray.
if (newArray.indexOf(array[i]) === -1){
  //push array at each index into newArray
newArray.push(array[i]);
}
}
//return newArray
return newArray
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation/
*/
// function has two parameters array and func
_.filter = function( array, func){
  // create new array
  var result = [];
  //create for loop to iterate through array at each index
  for(var i = 0; i < array.length; i++){
    // func return true
  if(func(array[i], i, array)){
    // psuh array at each index into new array called result
     result.push(array[i]);
  }
}
//return result
  return result;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
  // create a new array
  var result = [];
  //create for loop to iterate through each index in the array
  for(var i = 0; i < array.length; i++){
    //if func is false
    if(!func(array[i], i, array)){
      //push array at each index into new array called result
      result.push(array[i])
    }
  }
  //return result
  return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// function that have an array and a func
_.partition = function(array, func){
  //create two new arrays named arrt and arrf
  var arrt = [];
  var arrf = [];
  //create for loop to iterate through each index in the array
  for(var i = 0; i < array.length; i++){
    //An array that contains all the values for which <function> returned something truthy
    if(func(array[i], i, array)){
      //push array at each index into new array arrt (for true)
      arrt.push(array[i]);
        //push array at each index into new array arrf (for false)
    }else arrf.push(array[i]);
  }
  //return array arrt and arrf
  return [arrt, arrf]
}




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
/**I: function has parameters collect and func, call function for each element in collection passing the arguments
 * O:return each function call in new array
 * C: use a for loop and if statement
 * E: n/a
 */
_.map = function(collection, func){
  // intialize new array result with empty array literal
  const output = []


   
  // if collect is an array
  if(Array.isArray(collection,func)){
    //create for loop to iterate through collect array
    for(let i = 0; i < collection.length; i++){
       // call function with element,s value, the index, and collect
      // push the element;s value at each index into new array result
      output.push((func(collection[i], i, collection)))
    }
      // if collect is an object
    }else{
      // create for in loop
      for(let key in collection){
        // call the function withhthe value, it's key, <collection>

 // push the element's value at each key in the new array result
  
        output.push((func(collection[key], key, collection)))
      }
    }
    //return output array
   return output
  
}
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
/**I: function has parameters array(of obj) and prop
 * O:return return array containing the value of <property> for every element in <array>
 * C: use _.map
 * E: n/a
 */
//function has parameters array(of obj) and prop
_.pluck = function(array, prop){
// return array, invoke obj
  return _.map(array, function(obj){
    //value of <property> for every element in <array>
return obj[prop];
  });

  
  }




/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
/*I: function has parameters collect and func, call function for each element in collection passing the arguments
 * O:return return true if functions is provided, return false if not provided, if the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
 * C: use a for loop and if else statement
 * E: n/a
 */
//function has two parameters called collection and func
_.every = function(collection , func){
  if(typeof func !== 'function'){  
      // func is a variable that holds a function. function hold one parameter value. callback funtion
    func = function(value) {
      // returns a boolean value truth
      return !!value; 
    }
  }
  // if collection is an array
  if(Array.isArray(collection)){
    //create for loop to iterate through collection array to each index
  for(var i = 0; i < collection.length; i++){
    //If the return value of calling <function> for every element is true, return true, If even one of them returns false, return false
    if(!func(collection[i], i, collection)){
      //return false
    return false
  }
  }
  // else if collection is an object
  } else if(typeof collection === 'object' && collection !== null){
    //create a for in loop
    for(var key in collection){
      //If the return value of calling <function> for every element is true, return true,If even one of them returns false, return false
      if(!func(collection[key], key, collection)){
        //return false
  return false
      }
    }
  
  // all else
  }else{
    //return false
    return false
  }
  //If <function> is not provided, return true if every element is truthy, otherwise return false
  return true
  }


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//function has two parameters called collection and func
_.some = function (collect, func){
  // if function is not given
  if(typeof func !== 'function'){
    //function hold one parameter value. callback funtion
  func = function(value){
 // returns a boolean value false
return !!value
}
}
// if collect is an array
if(Array.isArray(collect)){
  //create for loop
  for(var i = 0; i < collect.length; i++ ){
  //If the return value of calling <function> for every element is true, return true, If even one of them returns false, return false
  if(func(collect[i], i, collect)){
    //return true
    return true
  }
}
  // else if collection is an object
}else if (typeof collect === 'object' && collect === null){
  //create for in loop
for(key in collect){
 //If the return value of calling <function> for every element is true, return true
  if(func(collect[key], key, collect)){
    //return true 
return true
  }
}

}else{
  //return true
  return true
}
// return false
return false
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
  //A variable output will  hold the  result of adding the func function to the elements of the array.
  let output;
  // If seed is undefined
  if(seed === undefined){
    //set output to the first element of the array at array[0]
    output = array[0];
    // creaete for loop to iterate through array
    for(let i = 1; i < array.length; i++){
      //apply the func function using the current value of output and the current element (array[i]) for each element in the array. 
      output = func(output, array[i],i);
    }
  }else{
    //If seed is provided, set output to this seed value.
    output = seed;
    //create for loop to iterate through array
    for(let i = 0; i < array.length; i++){
      //apply the func function using the current value of output and the current element (array[i]).
      output = func(output, array[i], i);
    }
  }
  // return output
  return output
  }

/** _.extend
* Arguments: output = seed;
    for(let i = 0; i < array.length; i++){
      output = func(output, array[i], i);
    }
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// function has two paramaters or more. sources is used to collect all arguments after the first one (the target object) into an array. This allows the function to handle any number of source objects.

_.extend = function(target, ...sources){
  //Object.assign(target, ...sources) copies the properties from each source object to the target object. The properties are copied in the order they are passed, and later sources overwrite properties from earlier sources.
  //Object.assign returns the target object, which has been updated with properties from the source objects.
  return Object.assign(target, ...sources)
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  // here, export any references you need for tests //
  module.exports = _;
}