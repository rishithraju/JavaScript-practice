class Parent {
  constructor(name, year, village, district, country){
    this.Fullname = name;
    this.Year = year;
    this.Village = village;
    this.District = district;
    this.country = country
  
  }
}

class child extends Parent{
  constructor(name,year,village,district,state,country,address){
    super(name,year,village,district,country)
    this.state = state
    this.address = address
    
  }
}

 let varma = new child("Rishith Varma", 22, "Naidupeta", "Tirupathi", "A.p","India","Btmlayout");
 console.log(varma);
 
 
