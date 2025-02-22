const split=(str,sp="")=>{
    let arr=[];
    if(sp=="")return arr=[...str];
    res="";
    for(let i=0;i<=str.length;i++){
        if(str[i]==sp||i==str.length){
            arr.push(res);
            res="";
            continue
        }
        res+=str[i];
    }
    return arr;
}
const join=(arr,sp="")=>{
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
        if(i!=arr.length-1){
            str+=sp;
        }
        
    }
return str;
}