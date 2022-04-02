function adjacentElementsProduct(inputArray) {
  
    var max=0
       for (var i = 0; i < inputArray.length;i++)
       {
           var newArr= inputArray[i]*inputArray[i+1]
           
            if(newArr>max)
            {
                max=newArr;
            }
       
       }
       return max;
}

function alternatingSums(a) {
    var chan=0;
    var le =0;
    for(let i=0; i<a.length; i++)
    {
        if(i%2==0)
        {
           chan=chan+a[i]
        }
        else 
        {
            le=le+a[i]
        }
    }
    console.log(chan);
    console.log(le);
}




