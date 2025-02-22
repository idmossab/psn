const chunk=(arr,nbr)=>{
    let chnk=[];
    let skip;
    for(let i=0;i<arr.length;i+=nbr){
        skip=i+nbr;
        if(skip>arr.length){
            skip=arr.length;
        }
        chnk.push(arr.slice(i,skip));
    }
    return chnk;
};
console.log(chunk([1,2,3,4],3))