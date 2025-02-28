const flat=(arr,nbr=1)=>{
    let res=[];
    if (nbr ==Infinity){
        nbr = arr.length+1
    }
    while(nbr>=1){
        for(let item of arr){
            Array.isArray(item)?res.push(...item):res.push(item);
        }
        arr=res
        res=[]
        nbr--;
    }
    return arr;
}
console.log(flat([1, [2, [3], [4, [5]]]],256));