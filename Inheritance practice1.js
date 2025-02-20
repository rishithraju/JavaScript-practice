class parent{
    constructor(model,color,price,){
        this.model = model
        this.color = color
        this.price = price
    }

}

class child extends parent{
    constructor(brand,model,color,price,range){
       super(model,color,price);
     this.range = range
     this.brand = brand
    }
}
const car = new child("Tata","y-varient","Black",100,"85 Kmph")
console.log(car);

