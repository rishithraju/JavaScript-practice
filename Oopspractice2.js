class parent {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

class child extends parent {
  constructor(brand,color,price, models) {
    super(brand, color);
    this.price = price;
    this.models = models;
  }
}
const car = new child("Toyota", "Black",100,"y");
console.log(car);
