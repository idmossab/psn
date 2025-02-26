const sameAmount=(str,reg1,reg2)=>{
    let arr1=str.match(new RegExp(reg1 , 'g'))||[];
    let arr2=str.match(new RegExp(reg2 , 'g'))||[];
    //console.log(arr1);
    //console.log(arr2);
    return (arr1.length== arr2.length)?true:false;

}

//console.log(sameAmount("hellohe","h","e1"));