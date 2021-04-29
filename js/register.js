function User(fname, lname, email, phone, password, cpassword) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.cpassword = cpassword;

}
var firstName = document.querySelector('#fname');
var lastName = document.querySelector('#lname');
const customerEmail = document.querySelector('#email');
var customerPhone = document.querySelector('#phone');
const customerPassword = document.querySelector('#password');
var customerCpassword = document.querySelector('#cpassword');
var regbtn = document.querySelector('#register');


regbtn.addEventListener('submit', register);

function register(e) {
    var newUser = new User(firstName.value, lastName.value, customerEmail.value, customerPhone.value, customerPassword.value, customerCpassword.value);


    if (firstName.value === '' || lastName.value === '' || customerEmail.value === "" || customerPhone.value === "" || customerPassword.value === "" || customerCpassword.value === "")
        alert('All fields are required')


    localStorage.setItem('user', JSON.stringify(newUser))


    // e.preventDefault();
}