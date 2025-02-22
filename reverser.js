const reverse=(arg)=>{
let res=[];
for(let i=arg.length-1;i>=0;i--){
    res.push(arg[i]);
}
return Array.isArray(arg)?res:res.join('');
};
console.log(reverse([1,5,3]));
console.log(reverse("hello word"));