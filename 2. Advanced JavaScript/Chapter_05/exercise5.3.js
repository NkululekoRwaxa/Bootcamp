// for-loop
myWork = [];

for (let i = 1; i <= 10; i++) {
    object = {
        naam: '',
        status: null
    };
    object.naam = 'Lesson ' + i;
    object.status = (i % 2 === 0) ? true : false;
    myWork.push(object);
}

console.table(myWork);