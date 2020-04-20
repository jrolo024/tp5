function Testabs(){
	let numbers = [-42, 3, 0, -1, 100];
	let absNumbers = abs(numbers);
	console.log(absNumbers); // => [42, 3, 0, 1, 100]
	console.log(numbers);    // => [-42, 3, 0, -1, 100]

}
function Testfiltre(){
	console.log( evenOnly([0,1,2,3,4]) );  // => [0, 2, 4]
}
function Testsum(){
	console.log( sum([]) );             // => 0
	console.log( sum([42,404,1337]) );  // => 1783

}
function Testflat(){
	console.log( flatten2D([[1,2], [3,4], [5,6]]));   // [1, 2, 3, 4, 5, 6]
	console.log( flatten2D([[1,2], [3,4,5], [6]]));   // [1, 2, 3, 4, 5, 6]
}
function Testduplicate(){
	console.log( removeDuplicates([]) );                  // => []
	console.log( removeDuplicates([1,2,3,4]) );           // => [1,2,3,4]
	console.log( removeDuplicates([1,2,3,2,4,3,1,1]) );   // => [1,2,3,4]
}