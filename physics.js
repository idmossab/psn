const acceleration={
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10
  };
const getAcceleration=(obj)=>{
    let a;
  if(obj.f!=null &&obj.m!=null) return a= obj.f/obj.m;
  if(obj.Δv !=null &&obj.Δt!=null)return a=obj.Δv/obj.Δt;
  if(obj.t!=null &&obj.d!=null)return a= (2*obj.d)/(obj.t*obj.t);
  return "impossible"
}
console.log(getAcceleration(acceleration));