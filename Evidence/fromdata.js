class formData{
    constructor(Name,Address,Phone){
        this.name = Name;
        this.address = Address;
        this.phone = Phone;

    }
   dataDisplay(){
    let output = "<h1>Student Information</h1>";
    output += "Name:" + this.name +"<br>";
    output += "Address:" + this.address + "<br>";
    output += "Phone:"  + this.phone +"<br>";
    return output;
   }
}