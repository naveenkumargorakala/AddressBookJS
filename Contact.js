
class Contact {
  firstName;
  lastName;
  address;
  city; 
  state;
  zipcode;
  phoneNumber;
  email;

  constructor(firstName, lastName, address, city, state, zipcode, phoneNumber, email){
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zipcode = zipcode;
      this.phoneNumber = phoneNumber;
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
      return this.zipcode;
   }
   get phone(){
      return this.phoneNumber;
   }
   get email(){
      return this.email;
   }
   
   set firstName(firstName){
      let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(firstNameRegex.test(firstName))
      this.firstName = firstName;
      else
      throw "First Name is Incorrect!!!!!!!!";
      
   }
   set lastName(lastName){
      let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(lastNameRegex.test(lastName))
      this.lastName = lastName;
      else
      throw "Last Name is Incorrect!!!!!!!!";
   }
   set address(address){
      let addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
      if(addressRegex.test(address))
      this.address = address;
      else
      throw "Address is Incorrect!!!!!!!!";
   }
    set city(city){
      let cityRegex = RegExp('^[a-zA-Z]{3,}$');
      if(cityRegex.test(city))
      this.city = city;
      else
      throw "City is Incorrect!!!!!!!!";
   }
   set state(state){
      let stateRegex = RegExp('^[a-zA-Z]{3,}$');
      if(stateRegex.test(state))
      this.state = state;
      else
      throw "State is Incorrect!!!!!!!!";
   }
   set zip(zip){
      let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
      if(zipRegex.test(zip))
      this.zipcode = zipcode;
      else
      throw "Zip Code is Incorrect!!!!!!!!";
   }
   set phone(phone){
      let phoneRegex = RegExp('^[0-9]{2}\\s{1}[0-9]{10}$');
      if(phoneRegex.test(phone))
      this.phoneNumber = phoneNumber;
      else
      throw "Phone is Incorrect!!!!!!!!";
   }
   set email(email){
      let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
      if(emailRegex.test(email))
      this.email = email;
      else
      throw "Email is Incorrect!!!!!!!!";
   }
   toString(){
      return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phone + ", Email : "+ this.email;
  }
}
  let contactList = new Array();


  try {
    contactList.push(new Contact("Naveen", "Kumar", "Bobbili", "Salur", "Andhra", "543005", "758456906", "Naveen@gmail.com" ));
   
  }
  catch(e){
      console.log(e)
  }

  try {
    contactList.push(new Contact("Bhagi", "Raj", "RKpuram", "Palasa", "Andhra", "546006", "89987988143", "Bhagi@raj.com" ));
       
      }
      catch(e){
          console.log(e)
      }


      //printing contacts
      for(let person of contactList){
      console.log(person);
    }


  //find Contact
    function editContact(findName) {
      for(let person of contactList){
        if(findName === person.firstName){
          console.log("Edit Contact");
          console.log("1.firstName \n 2.lastName \n 3.address \n 4.city \n 5.State \n 6.phoneNumber \n 7.email \n 8.exit \n 9.zipcode");
          let choice=1;
          switch(choice){
            case 1:
              person.firstName="Naveeeeeen";
            break;
            case 2:
              person.lastName="Naik";
            break;
            case 3:
              person.address="Narayanapm"
            break;
            case 4:
              person.city="Haripm";
            break;
            case 5:
              person.state="AndhraPradesh";
            break;
            case 6:
              person.phoneNumber=8569856697;
            break;
            case 7:
              person.email="nahvah@gmail.com"
            break;
            case 8:
              console.log("exit");
              break;
            case 9:
              person.zipcode=564564;
            break;
          }
          break;
      
        }
        else
        console.log("No contact Found!!!")

      }
    }

    function deleteContact(findName) {
      for(let person of contactList){
        if(findName === person.firstName){
          contactList.pop(person);
        }
      }
    }



     //find and Edit Contact
    let findName="Naveen";
    editContact(findName);
    
    let deleteName="Bhagi";
    deleteContact(deleteName);


    
      //printing contacts
      for(let person of contactList){
        console.log(person);
      }
  