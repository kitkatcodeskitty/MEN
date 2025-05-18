class ShoppingList {
    constructor(items,num){
        this.items = items,
        this.num = items
    }
    saylist(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(["Milk,choco,redbull"],3);

class Product extends ShoppingList {
    constructor(items,num, amount,cost){
        super(items,num);
        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(['Redbull, Chocolate, candy'],3, 55,123);




console.log(product);