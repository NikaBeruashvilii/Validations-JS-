const imageUrl = document.querySelector("#imageUrl");
const surnameInp = document.querySelector("#surname");
const nameInp = document.querySelector("#name");
const phoneNumberInp = document.querySelector("#phoneNumber");
const mailInp = document.querySelector("#mail");
const allContactInp = document.querySelectorAll(".form-control");
const saveContactInfoBtn = document.querySelector("#saveContactInfo");
var contactCollection = [];

class Contact {
    name;
    surname;
    email;
    phoneNumber;
    contactImageUrl;

    constructor(name, surname, mail, phoneNumber, contactImageUrl){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.contactImageUrl = contactImageUrl;
    }
}

function clearInputs() {
    allContactInp.forEach(inpItem => inpItem.value = "");
}

function validateInputs() {
    var inputsAreValid = true;
    allContactInp.forEach(inpItem => {
        if(inpItem.value == undefined || inpItem.value.length == 0) {
            inpItem.classList.add("error-border");
            inputsAreValid = false;
        } else {
            inpItem.classList.remove("error-border");
        }

    })
    return inputsAreValid;
}


saveContactInfoBtn.addEventListener("click", function () {
    if (validateInputs()) {
        var contactItem = new Contact(nameInp.value, surnameInp.value, mailInp.value, phoneNumberInp.value, contactimageUrlInp.value);
        contactCollection.push(contactItem);
        clearInputs();
        viewController.insertContactOnView(contactItem);
    }
});













