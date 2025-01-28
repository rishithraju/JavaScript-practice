class Person {
  constructor(name, year, village, district, country) {
    this.Fullname = name;
    this.Year = year;
    this.Village = village;
    this.District = district;
    this.Country = country;
  }
}

class child extends Person{
  constructor(name,year,village,district,state,country){
    super(name,year,village,district,country)
    this.state = state

  }
}

let varma = new child("chanikya", 22, "Naidupeta", "Tirupathi", "A.p","India");
Object.entries(varma).forEach(([key,value])=>{
    console.log(`${key}: ${value}`);
})
