class parent {
    constructor(brand,price){
         this.brand = brand
         this.price = price
   
    }
}

class child extends parent {
    constructor(brand,price,model,color){
        super(brand,price)
        this.model = model
        this.color = color
    }
}
const parents = new child("tata" ,100,"u","black");
console.log(parents);
