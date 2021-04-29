$(document).ready(function() {
    var lgnbtn = document.querySelector('#login');
    lgnbtn.addEventListener('submit', login)

    function login(e) {
        // e.preventDefault()

        const inputtedEmail = document.querySelector('#inputtedEmail')
        const inputtedPassword = document.querySelector('#inputtedPassword')

        var newEmail = inputtedEmail.value;
        var newPass = inputtedPassword.value;
        var retrieved = JSON.parse((localStorage.getItem('user')))

        if (newEmail === "" || newPass === "") {
            alert('Fields cannot be empty')
            return false
        } else if (newEmail != retrieved.index || newPass != retrieved.password) {
            alert('wrong credentials!!!')
            window.open('login.html');
            return false;
        } else {
            // alert("Login successfully");
            window.open('cart.html');
        }
    }
})