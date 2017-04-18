function merge(arr1,arr2){
    var i=j=k=0;
    var res=[];
    while(i<arr1.length||j<arr2.length){
        if(arr1[i]<=arr2[j]){
            res[k]=arr1[i];
            i++;
        }
        else{
            res[k]=arr2[j];
            j++;
        }
        k++;
    }
    if(i<arr1.length){
      while(i<arr1.length){
          res[k]=arr1[i];
          i++;
          k++;
      }
    }
    if(j<arr2.length){
       while(j<arr2.length){
          res[k]=arr1[j];
          j++;
          k++;
      }
    }
}