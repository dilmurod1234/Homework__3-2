
var a = Math.random() * 15
a = parseInt(a);
var b = Math.random() * 15
b = parseInt(b);

var count__a = a - 5
count__a = Math.abs(count__a);
var count__b = b - 5
count__b = Math.abs(count__b);

console.log(a , b);

if(count__a < count__b){
    console.log(a + " => 5 ga yaqin son");
} 
else if(count__a > count__b){
    console.log(b + " => 5 ga yaqin son");
}
else if(count__a === 5){
    console.log(a + " => 5 soniga teng")
}
else if(count__b === 5){
    console.log(b + " => 5 soniga teng");
}
else if(count__a === count__b){
    console.log("5 soniga bir xil yaqinlikda");  
}
else{
    console.log(a,b);
}