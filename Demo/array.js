let colours=["red","blue","green"]
colours[3]="black"
console.log(colours)
console.log(colours.length)
console.log(typeof(colours))

let Clrs=['black','red','white']
Clrs.forEach((clr)=>{
    console.log(clr)

})
for(let i in colours)
{
    console.log(i);
    console.log(colours[i]);
}



let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});