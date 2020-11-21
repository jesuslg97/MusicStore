function validate_user() {
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var flag = true;

    if(email.length < 2 || email.length > 20) {
        document.getElementById("eemail").innerHTML ="Error, el email tiene que tener minimo 2 y maximo 20 letras";
        flag = false;
    } else {
        document.getElementById("eemail").innerHTML ="";

    }

    if(passwd.length < 1 || passwd.length > 30) {
        document.getElementById("epasswd").innerHTML ="Error, la contraseña tiene que tener minimo 1 y maximo 30 letras";
        flag = false;
    } else {
        document.getElementById("epasswd").innerHTML ="";

    }
    return flag;
}

