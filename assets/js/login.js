function store(){
    var emailad = document.getElementById("email");
    var pin = document.getElementById("psw");

    if (emailad.value.length == 0) {
        alert('Please fill in your email address')
    }else if(pin.value.length == 0){
        alert('Please fill in password');

    }else{
            localStorage.setItem('email', emailad.value);
            localStorage.setItem('passwad', pin.value);
            alert('Your account has been created');
        }
}