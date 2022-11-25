//1.how to compare two JSON have the same properties without same order
// var obj 1 = {name:"person 1",age:5};
// var obj 2 = {age:5,name:"person 1"};

//solution

var obj1 = {name:"person 1",age:5};
var obj2 = {age:5,name:"person 1"};

console.log(JSON.stringify(obj1)===JSON.stringify(obj2));