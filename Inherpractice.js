class parent{
    constructor(brand,model,color,year){
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year

    }
}
class child extends parent {
    constructor(brand,model,color,year,price) {
        super(brand,model,color,year)
        this.price = price
    }
}
for(i = 0;i<11;i++){
    const car = new child("maruthi","Vitera Brezza","White",2024,500)
    console.log(car);
    

}