class Contact {
    constructor(firstName,lastName,address, city, state, zipcode, phoneNumber, email){
    this.firstName=firstName;
    this.lastName=lastName;
    this.address=address;
    this.city=city;
    this.state=state;
    this.zipcode=zipcode;
    this.phoneNumber=phoneNumber;
    this.email=email;
    }

    
}

const contact=new Contact("Naveen","Kumar","NPM","HPM","AP",522223,7584569857,"naveen@gmail.com");

console.log(contact);