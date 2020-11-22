/*Función para validar el formulario login.html*/
function validate_login() {

    //Variables
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var flag = true;

    //Validar email
    var regex_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regex_email.test(email) !== true) {
        document.getElementById("eemail").innerHTML ="El email no coincide con los estándares sobre la " +
            "estructura de un email, por favor inténtelo de nuevo.";
        flag = false;
    } else {
        document.getElementById("eemail").innerHTML ="";
    }

    //Validar password
    var regex_passwd = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if(regex_passwd.test(passwd) !== true) {
        document.getElementById("epasswd").innerHTML ="La contraseña debe tener al entre 8 y 16 caracteres, " +
            "al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.";
        flag = false;
    } else {
        document.getElementById("epasswd").innerHTML ="";
    }
    return flag;
}

/*Función para validar el formulario password.html*/
function validate_password() {

    //Variables
    var email = document.getElementById("email").value;
    var passwd1 = document.getElementById("passwd1").value;
    var passwd2 = document.getElementById("passwd2").value;
    var flag = true;

    //Validar email
    var regex_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regex_email.test(email) !== true) {
        document.getElementById("eemail").innerHTML ="El email no coincide con los estándares sobre la " +
            "estructura de un email, por favor inténtelo de nuevo.";
        flag = false;
    } else {
        document.getElementById("eemail").innerHTML ="";
    }

    //Validar password
    var regex_passwd = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if(regex_passwd.test(passwd1) !== true) {
        if(regex_passwd.test(passwd2) !== true) {
            document.getElementById("epasswd1").innerHTML ="La contraseña debe tener al entre 8 y 16 caracteres, " +
                "al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.";
            flag = false;
        } else {
            document.getElementById("epasswd1").innerHTML ="";
        }
    }


    //Validar password
    if (passwd1 !== passwd2) {
        document.getElementById("epasswd2").innerHTML ="Las contraseñas no coinciden, por favor inténtelo de nuevo.";
        flag = false;
    } else {
        document.getElementById("epasswd2").innerHTML ="";
    }

    return flag;
}