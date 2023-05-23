/**
 * when 'submit' button is clicked - pass user input into store() - store user input in local storage
 */
function store()
{
    var brand = document.getElementById("brand").value;
    var price = document.getElementById("price").price;
    var key = document.getElementById("key").value;

    const Car = {
        brand: brand,
        price:price,
        color:"white"
    }
    window.localStorage.setItem(key, JSON.stringify(Car));
    //return false;
}
document.getElementById("form").onsubmit = store;

/**
 * get items from local storage
 */
function getRecords()
{
    console.log("get records");
    var key = document.getElementById("getKey").value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var info = document.createTextNode(records);
    paragraph.appendChild(info);

    document.getElementById("retrieve").appendChild(paragraph);
}
document.getElementById("getButton").onclick = getRecords;

/**
 * removeItem() - devare item from local storage
 */
function removeItem(){
    var key = document.getElementById('removeKey').value;
    localStorage.removeItem(key);
    console.log("remove items");
}
document.getElementById("removeButton").onclick = removeItem;

/**
 * clear() - clear lcal storage
 */
function clearStorage(){
    localStorage.clear();
    console.log("clear records");
}
document.getElementById("clearButton").onclick = clearStorage;
