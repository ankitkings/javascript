const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Anjit"
tinderUser.address =  "Indore"

// console.log(tinderUser);

const regularUser = {
    email: "amli@gal.com",
    full_name: {
        user_fullname:{
            firstName: "ankit",
            lastName: "parmar"
        }
    }
}

// console.log(regularUser);

// console.log(regularUser.full_name);
// console.log(regularUser.full_name.user_fullname);
// console.log(regularUser.full_name.user_fullname.firstName);
// console.log(regularUser.full_name.user_fullname.lastName);


obj1 = {1:"a", 2: "b"}
obj2 = {3:"a", 4: "b"}
obj3 = {5:"a", 6: "b"}


// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2,obj3)
// const obj4 = {...obj3, ...obj1, ...obj2}
// console.log(obj4);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));