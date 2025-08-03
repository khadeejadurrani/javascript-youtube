class Product{
    constructor(firstIngrediant,secondIngrediant){
        this.firstIngrediant = firstIngrediant;
        this.secondIngrediant = secondIngrediant;
    }
    product(){
        console.log(`first ingrediant is:${this.firstIngrediant},second is: ${this.secondIngrediant}`);
    }
}
class Cookie extends Product{
    constructor(firstIngrediant,secondIngrediant,price){
        super(firstIngrediant,secondIngrediant);
            this.price=price;
    }
    price1(){
        console.log(`the cookie has ingrediants: ${this.firstIngrediant}+${this.secondIngrediant} and has price ${this.price}`);
    }
    isAffordable(){
        if(this.price>=150){
            console.log(`the cookie is affordable`);
        }else{
            console.log(`cookie is expensive`);
        }
    }
}
const cookie1 = new Cookie("butter","flour",150);
cookie1.price1();
cookie1.isAffordable();