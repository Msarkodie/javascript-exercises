const reverseString = function(word) {
let rword="";
for(let i=word.length-1;i>=0;i--)
{
rword+=word[i];
}
return rword;
};

// Do not edit below this line
module.exports = reverseString;
