var myArray = [1,2,3,4,5,7];
var myArrayCopy = [];
var i=0;

while (i < myArray.length)
{
    myArrayCopy.push(myArray[i]+1);
    i++;
}

console.log(myArray);
console.log(myArrayCopy);