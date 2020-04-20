//exo1

/*function absoluteValue(number){

	if (number < 0){
		return -number;
	}
	
	return number;		
	
}*/
function abs(numbers)
{
	
	let array = numbers.map(Math.abs);

	return array;
}
//exo2
function evenOnly(numbers)
{
	let array = numbers.filter (function (number)
	{
		return (number %2==0);
	});
return array;
}
//exo3
function sum(numbers)
{
	let somme = numbers.reduce (function (acc,number)
	{
		return acc+number;
	}, 0);

return somme;
}
//exo4
function flatten(array) {

    return array.reduce(function(flattened, item){

        return flattened.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);


}

//exo5
function removeDuplicates (values)
{
	let array = values.filter (function (number)
	{	
		return (number);
	});
return array;
}





