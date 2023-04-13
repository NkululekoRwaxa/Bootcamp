// for in loop
object = {
    Name: 'Nkulu',
    Age: 19,
    Gender: 'Male'
};
array = [];

for (let prop in object) {
    console.log('Property name: ', prop, ', value: ', object[prop]);
    array.push(object[prop]);
}

console.log(array);