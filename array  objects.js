let car = [
  { brand: "suzuki", price: "10k" },
  { brand: "maruthi", price: "20k" },
  { brand: "BMW", price: "50k" },
];

for(i=0;i < car.length; i++){
    if(i <= 2){
        console.log(car[i].brand);
        
    } 
}

//There are two ways to access the object .notation,bracket[] notation.
/*console.log(car2["fuel"]); //bracket notataion
console.log(car2.brand);  */ //.notation

const car2 = {
  brand: "ferrari",
  price: "20K",
  fuel: "78L",
};

console.log(car2.hasOwnProperty("price"));  // hasOwnProperty() - true or false

console.log(Object.values(car2));  //Object.values(car2) - Converts Obj to Arrays

console.log(Object.keys(car2));  //Object.keys(car2) - Converts Obj to Arrays

console.log(Object.entries(car2));  //Object.entries(car2) - Converts to Nested Arrays

const a = {
  brand: "apple",
};
const b = Object.create(a);
console.log(b); //Object.create() - it stores the values in portotype

const m = {
  brand: "massey",
  color: "red",
  price: "90k",
};

const y = Object.assign({}, m); //Object.assign() - it assignes the object elements into the Empty Object
console.log(y); //take the empty object

let samsung = {
  brand: "samsung",
  model: "s24 ultra",
};
Object.freeze(); // Object.freeze() -  it's not allow to modify or add
console.log(samsung);

const trucks = {
  //Object.seal() - it cannot be change , It's seal the object.
  brand: "TATA",
  model: "xyz",
};
Object.seal(trucks);
trucks.color = "pink";
console.log(trucks);
