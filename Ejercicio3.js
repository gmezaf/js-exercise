var myArray = [8,7,6,5,4,3,2,1];
console.log(myArray);

sort(myArray);

var done = false;
function sort(array)
{
  while (!done) 
  {
    done = true;
    for (var i = 1; i < array.length; i += 1) 
    {
      if (array[i - 1] > array[i]) 
      {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
        console.log(array);
      }
    }
  }
}