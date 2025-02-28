const sumAll = function(start,end) {
let sum = 0;
if(Number.isInteger(start) && Number.isInteger(end) && start>0 && end>0)
{ 
if(start>end)
 {
  let mid=start;
  start=end;
  end=mid;
  }
for(let i=start;i<=end;i++)
{
  sum+=i;
}

return sum;
}


else 
return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
