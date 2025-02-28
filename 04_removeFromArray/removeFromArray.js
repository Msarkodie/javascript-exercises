const removeFromArray = function(array,...args) {
let newArray=[];
/*let newArray=array;
for(const arg of args)
{
  for(let i=0;i<array.length;i++)
{
    if(array[i]==arg) 
{    
    while(newArray.includes(arg))
{
     newArray.splice(newArray.indexOf(arg),1);
}

}
}
}*/


  array.forEach((item) => {
   if (!args.includes(item))
   {
    newArray.push(item);
   };
 });
return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
