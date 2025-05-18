

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

// question no 1
const add = (a,b) =>{
    return a + b;
}


console.log(add(6,6));


// question no 2 
const square = (square) => {
    return square*square;
}

console.log(square(5));

// question no 3
const greet = (name) =>{
    return `Hello, ${name}`;
}

console.log(greet("dilan"));

// question no 4
const es = ()=>{
    return `I am learning ES6`;
}
console.log(es());



// intermediate 
const numbers = [1,2,3,4]

const arrayOfNumbers = numbers.map((x)=>{
    return x * 2;
})

console.log(arrayOfNumbers);

// im doing this again so that i can remember it cuz .map is new to me 
const num = [2,3,4];
const squareOfNum = num.map((y)=>{
    return y * y;
})

console.log(squareOfNum);


// iseven
const isEven = (n)=>{
    if(n%2==0)
    {
        console.log(`${n} is even`);
    }else{
        console.log("Is odd");
    }
}

console.log(isEven(6))


// filter
const arr = [5,12,8,130,33]

// const filterArr = arr.filter((x) => x > 10);
// we can do this like this too 

const filterArr = arr.filter((x)=>{
    return x>10;
})

console.log(filterArr);

// using filter again so that i can get used to it 
const word = ["Amelia","Kokomi","Amy","Varesa"];

const wordArr = word.filter((x)=>{
    return x.length > 5;
})

console.log(wordArr);

// arrowfunction that return another arrow function to multiply a number 

// const double = (x) =>{ this was donw by me so it's incorrect 
//     const mul = (x)=>{
//         return x * x; 
//     }
// }

// this is correct one
const multiply = (x)=> (y)=> x*y;

const double = multiply(2)
console.log(double(5));
// i don;t understand this so help me when u are checking the code okie 


// next question 
const person = {
    name: "potato",
    greet : ()=>{
       return `Hi,I'm ${this.name}`
    }
};
console.log(person.greet());
// i think this will return the hi, i am potato cuz we call person.greet but but since it doesn't have console.log i believe it willnot shows on console but it will surely return the statement but i see on console and it return undefine  and i try writing return infront of statement it return string but not this.name it;'s empty there


// question not last of  Intermediate  
const personAgain = {
    name: 'Potato',
    greet: function(){
         return `Hi,I'm ${this.name}`
    }
};
console.log(personAgain.greet());
// i don't understand this one too maybe i didn't undersand the question all i undersand was i need to change arrow function to normal one 

// please check everyone of it and tell me where can i improve and u can drop some question too if u think i need to do or if this is enough 



// followup practices 

// write a function getOddNumbers(arr) using .filter();

const arrOfn = [2,3,4,5,6,7,8];

const oddNumber = arrOfn.filter((x)=>{
    return x%2==1;
})

console.log(oddNumber);


// question no 2

const arrOfName = ["potato","amelia","amy","banana"];

const startWithA = arrOfName.filter((a) =>{
    if(a[0]==="a"){
        return a;
    }
    else{
        return "";
    }
})

console.log(startWithA);


// question no 3 rewrite the function

const mult = (a,b)=>{
    return a*b;
}
console.log(mult(9,2));

const isPositive = (n)=>{
    return n>0;
}
console.log(isPositive(4));