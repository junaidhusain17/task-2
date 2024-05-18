var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var contact = document.getElementById("contactno");
var account = document.getElementById("account");
var company = document.getElementById("company");
var enabled = document.getElementById("toggleSwitch");
var country = document.getElementById("inputGroupSelect01");
var subject = document.getElementById("Textarea1");
var checkbox = document.getElementById("gridCheck");
// var R-button = document.getElementById("")

var form = document.getElementById("contactForm");

fname.addEventListener("input", function () {
    validateFirstName();
});
function validateFirstName() {
    if (fname.value === "") {
        document.getElementById("fnameError").innerHTML = "First name is required";
        fname.style.border ="2px solid red";
        return false;
    } else if (!/^[A-Za-z\s]+$/.test(fname.value)) {
        document.getElementById("fnameError").innerHTML = "First name should contain only alphabets";
        fname.style.border ="2px solid red";
        return false;
    } else if (fname.value.length < 3 || fname.value.length > 20) {
        document.getElementById("fnameError").innerHTML = "First name must be at least 3 and at most 20 characters";
        fname.style.border ="2px solid red";
        return false;
    } else {
        document.getElementById("fnameError").innerHTML = "";
        fname.style.border ="";
        return true;
    }
}

lname.addEventListener("input", function () {
    validateLastName();
});

function validateLastName() {
    if (lname.value === "") {
        document.getElementById("lnameError").innerHTML = "Last name is required";
        lname.style.border ="2px solid red";
        return false;
    } else if (!/^[A-Za-z\s]+$/.test(lname.value)) {
        document.getElementById("lnameError").innerHTML = "Last name should contain only alphabets";
        lname.style.border ="2px solid red";
        return false;
    } else if (lname.value.length < 3 || lname.value.length > 20) {
        document.getElementById("lnameError").innerHTML = "Last name must be at least 3 and at most 20 characters";
        lname.style.border ="2px solid red";
        return false;
    } else {
        document.getElementById("lnameError").innerHTML = "";
        lname.style.border ="";
        return true;
    }
}

email.addEventListener("input", function () {
    validateEmail();
});
function validateEmail() {
    if (email.value === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        email.style.border ="2px solid red";
        return false;
    } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email.value)){
        document.getElementById("emailError").innerHTML = "Please enter a valid email";
        email.style.border ="2px solid red";
        return false;
    } else if (email.value.length > 30) {
        document.getElementById("emailError").innerHTML = "Email contain maximum 30 characters";
        email.style.border ="2px solid red";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
        email.style.border ="";
        return true;
    }
}

contact.addEventListener("input", function () {
    validateContact();
});
function validateContact() {
    if (contact.value === "") {
        document.getElementById("contactError").innerHTML = "Contact number is required";
        contact.style.border ="2px solid red";
        return false;
    } 
     else {
        document.getElementById("contactError").innerHTML = "";
        contact.style.border ="";
        return true;
    }
}

account.addEventListener("input", function () {
    validateAccount();
});
function validateAccount(){
    if (account.value === ""){
        document.getElementById("accountError").innerHTML = "Account is required";
        account.style.border ="2px solid red";
        return false;
    } else if (!/^[A-Za-z0-9]+$/.test(account.value)){
        document.getElementById("accountError").innerHTML = "Account should contain alphabets and numbers";
        account.style.border ="2px solid red";
        return false;
    } else if (account.value.length > 25) {
        document.getElementById("accountError").innerHTML = "Account contain maximum 25 characters";
        account.style.border ="2px solid red";
        return false;
    } else {
        document.getElementById("accountError").innerHTML = "";
        account.style.border ="";
        return true;
    }
}

function validateCompany(){
    if (company.value === ""){
        document.getElementById("companyError").innerHTML ="Company is required";
        company.style.border ="2px solid red";
        return false;
    }else if (!/^[A-Za-z0-9\s]+$/.test(account.value)){
        document.getElementById("companyError").innerHTML = "Company feild should contain only letters,numbers and spaces";
        company.style.border ="2px solid red";
        return false;
    } else if (company.value.length > 25) {
        document.getElementById("companyError").innerHTML = "Company contain maximum 25 characters";
        company.style.border ="2px solid red";
        return false;
    } else {
        document.getElementById("companyError").innerHTML = "";
        return true;
    }
}


function validateCheckbox(){
    if (!checkbox.checked){
        document.getElementById("checkError").innerHTML = "You must confirm that you are not a robot";
        checkbox.style.border ="2px solid red";
        return false;
    } else {
        document.getElementById("checkError").innerHTML = "";
        return true;
    }
}
function removeErrorText(errorSpan,field="") {
    document.getElementById(errorSpan).innerHTML = "";
    document.getElementById(field).style.border ="";
  }

  document.getElementById('contactno').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,7})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

  function  resetForm () {
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("fname").style.border="";

    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("lname").style.border="";

    document.getElementById("emailError").innerHTML = "";
    document.getElementById("email").style.border="";

    document.getElementById("contactError").innerHTML = "";
    document.getElementById("contactno").style.border="";

    document.getElementById("accountError").innerHTML = "";
    document.getElementById("account").style.border="";

    document.getElementById("companyError").innerHTML = "";
    document.getElementById("company").style.border="";

    document.getElementById("checkError").innerHTML = "";
    document.getElementById("gridCheck").style.border="";

  }

form.addEventListener('submit', (e) => {
    
    validateFirstName();
    validateLastName();
    validateEmail();
    validateContact();
    validateAccount();
    validateCompany();
    validateCheckbox();
    if (!validateFirstName() || !validateLastName() || !validateEmail() || !validateContact() || !validateAccount() ||
     !validateCompany() ||  !validateCheckbox()) {
        e.preventDefault();
        return true;

    }

 // Get form field values
 const formData = {
    firstName: fname.value,
    lastName: lname.value,
    email: email.value,
    contactNumber: contactno.value,
    account: account.value,
    company: company.value,
    status: enabled.checked ? 'Enabled' : 'Disabled',
    country: country.value,
    subject: subject.value,
    subject: subject.value,

    Check: gridCheck.checked
 };

//  Display data in JSON format
 console.log(JSON.stringify(formData, null, 2));

 form.reset();

 alert('Form submitted successfully');

 e.preventDefault();
});