function store(){
    var inputUserName = document.getElementById("email");
    var inputPassword = document.getElementById("psw");

    if (inputUserName.value.length == 0) {
        alert('Please fill in your email address')
    }else if(inputPassword.value.length == 0){
        alert('Please fill in password');

    }else{
            localStorage.setItem('email', inputUserName.value);
            localStorage.setItem('psw', inputPassword.value);
            alert('Your account has been created');
        }
}