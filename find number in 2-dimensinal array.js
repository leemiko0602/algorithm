function Find(target, array)
{
    for(var i=0;i<array.length;i++){
    var low=0;
    var high=array[i].length-1;
        while(low<=high){
            var mid=(low+high)/2;
           if(target<array[i][mid]){;
                high=mid-1;
            }
          else if(target>array[i][mid]){
                low=mid+1;
            }
            else{
              return true;
            }
        }
    }
    return false;
}
