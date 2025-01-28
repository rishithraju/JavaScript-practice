class parent {
  constructor(name, state, pincode, region) {
    this.name = name;
    this.state = state;
    this.pincode = pincode;
    this.region = region;
  }
}

class child extends parent {
  constructor(name,state,pincode,region,district, country) {
    super(name,state,pincode, region);
    this.district = district;
    this.country = country;
  }
}
for(i = 0; i<11; i++){
    let info = new child("Varma","A.P",524126,"South","Tirupathi","India")
    console.log(info);
    
}
 