// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

//The makeCompute function returns an object with the values that correspond to the keys as set in the parameters.

function makeComputer(type, color, weight) {
 return {
 	type: type,
 	color: color,
 	weight: weight
 	};
}
;
var compA = makeComputer("xp", "red", 15);
var compB =  makeComputer("server", "black", 14.5);


// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
	return "The " computer[type] + " computer" + " is " + computer[color] + " and weighs " + computer[weight] ;
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/


//The UppecaseAll uses the map function to convert each array element to uppercase.

function uppercaseAll(arrayOfStrings) {
	return map(arrayOfStrings, (str, i)=>{
		return str.toUpperCase()
	});
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

// The predicate criteria is higher than 500,000,000. This is passed into the filter function
//to only return the elements that fit that criteria.

function highestPopulation(arrayOfObjects) {

	return filter (arrayOfObjects, (elem, key)=>{
		return elem.population > 500000000;
	});	

}

//=============================================================================
/*                              Q4                                           */
//=============================================================================


// The appropriate helper function here is map since we need to carry out a halving function 
// on each of the element of the array.

function halveAll(numbers) {
	return map(numbers, (elem)=>{
		return elem/2;
	});
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

// I used the map function to extract the values according corresponding to each key
// in the object. Please note that I used bracket notation instead of dot notation 
// so that the function does not look of a specific "key" called key but rather iterates 
// over all the keys and extracts the values.

function values(obj) {

	return map (obj, (elem, key)=>{
		return obj[key];
	});

}


