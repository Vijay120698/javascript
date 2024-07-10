
// // Creating Objects


let person = {
    firstName: "vijay",
    lastName: "vincent",
    age: 30,
    address: "123, xyz street"
};
 //2. Accessing Object Properties
console.log('firstName is:'+ person.firstName+ 'age:'+ person.age)
console.log(person['address']);



let person1={
    hobby:['play','poems'],
    age:26,
    gender:"male",
    dob(){
        console.log(new Date().getFullYear() - this.age)
    }

}
person1.dob()  // . Calling Object Methods