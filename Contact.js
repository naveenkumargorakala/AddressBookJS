class Contact {
  firstName
  lastName
  address
  city
  state
  zip
  phone
  email

  constructor(firstName, lastName, address, city, state, zip, phone, email){
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phone = phone;
      this.email = email;
  }
  get firstName(){
      return this.firstName;
   }
   get lastName(){
      return this.lastName;
   }
   get address(){
      return this.address;
   } get city(){
      return this.city;
   }
   get state(){
      return this.state;
   }
   get zip(){
      return this.zip;
   }
   get phone(){
      return this.phone;
   }
   get email(){
      return this.email;
   }
   
   set firstName(firstName){
      let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(firstNameRegex.test(firstName))
      this.firstName = firstName;
      else
      throw "First Name is Incorrect Format";
      
   }
   set lastName(lastName){
      let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(lastNameRegex.test(lastName))
      this.lastName = lastName;
      else
      throw "Last Name is Incorrect Format";
   }
   set address(address){
      let addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
      if(addressRegex.test(address))
      this.address = address;
      else
      throw "Address is Incorrect Format";
   }
    set city(city){
      let cityRegex = RegExp('^[a-zA-Z]{3,}$');
      if(cityRegex.test(city))
      this.city = city;
      else
      throw "City is Incorrect Format";
   }
   set state(state){
      let stateRegex = RegExp('^[a-zA-Z]{3,}$');
      if(stateRegex.test(state))
      this.state = state;
      else
      throw "State is Incorrect FOrmat";
   }
   set zip(zip){
      let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
      if(zipRegex.test(zip))
      this.zip = zip;
      else
      throw "Zip Code is Incorrect Format";
   }
   set phone(phone){
      let phoneRegex = RegExp('^[0-9]{2}\\s{1}[0-9]{10}$');
      if(phoneRegex.test(phone))
      this.phone = phone;
      else
      throw "Phone is Incorrect Format";
   }
   set email(email){
      let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
      if(emailRegex.test(email))
      this.email = email;
      else
      throw "Email is Incorrect Format";
   }
   toString(){
      return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phone + ", Email : "+ this.email;
  }
}

  try {
  let contact = new Contact("Naveen", "Kumar", "Haripuram", "Mandasa", "Andhra", "413005", "7854589658", "naveen@gmail.com" )
   console.log(contact.toString());
  }
  catch(e){
      console.log(e)
  }