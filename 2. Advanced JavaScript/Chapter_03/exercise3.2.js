// 1 . Create empty array for shopping list
list = [];

// 2. Add Milk, Bread, and Apples to list
list.push("Milk");
list.push("Bread");
list.push("Apples");
console.log(list);
console.log(" ");

// 3. Update Bread with Bananas and Eggs
list.splice(list.indexOf("Bread"), 1, "Bananas", "Eggs");
console.log(list);
console.log(" ");

// 4. Remove the last item from the array and output it into the console.
let last = list.pop();
console.log("last item removed: ", last);
console.log(" ");

// 5. Sort the list alphabetically
list.sort();

// 6. Find and output index of 'Milk'
let milkIndex = list.indexOf("Milk");
console.log("index of 'Milk': ", milkIndex);
console.log(" ");

// 7. After Bananas, add Carrots and Lettuce
console.log(list);
list.splice(list.indexOf("Bananas") + 1, 0, "Carrots", "Lettuce");
console.log(list);
console.log(" ");

// 8. Create new list containing Juice and Pop
list1 = ["Juice", "Pop"];

// 9. Combine both lists, adding the new list twice to the end of the first list
final = list.concat(list1).concat(list1);
//console.log(final);

// 10. Get the last index value of Pop and output it to the console
let lastIndexPop = final.lastIndexOf("Pop");
console.log("last index of 'Pop': ", lastIndexPop);
console.log(" ");

// final array
console.log(final);