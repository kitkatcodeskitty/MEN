console.log("hello");


// forEach
const shopingList = ["Milk","cow","eggs","Banana"];

shopingList.forEach((product, index)=>{
    console.log(product , index);
})

// Map

const newList = shopingList.map(item=>{
     return item + "new";
});

console.log(newList);

// filter 

const filterlist = shopingList.filter(item => item === "eggs");

console.log(filterlist);