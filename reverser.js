const reverse=(arg)=>{
let res="";
for(let i=arg.length-1;i>=0;i--){
    res+=arg[i];
}
return typeof arg=='string'?res:res.split('');
};
//console.log(reverse([1,5,3]));
//console.log(reverse("hello word"));