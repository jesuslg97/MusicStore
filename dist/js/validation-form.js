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

/*Función para validar el formulario register.html*/
function validate_register() {

    //Variables
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var country = document.getElementById("country").value;
    var location = document.getElementById("location").value;
    var direction = document.getElementById("direction").value;
    var code = document.getElementById("code").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var flag = true;

    //Validar nombre
    var regex_name = /[A-Za-z]/;
    if(regex_name.test(name) !== true && name.length < 3 || name.length > 10) {
        document.getElementById("ename").innerHTML = "El nombre no debe tener caracteres numéricos " +
            "y tiene que tener entre 3 y 10 caracteres";
        flag = false;
    } else{
        document.getElementById("ename").innerHTML = "";
    }

    //Validar apellido
    var regex_surname = /[A-Za-z]/;
    if(regex_surname.test(surname) !== true && surname.length < 10 || surname.length > 20) {
        document.getElementById("esurname").innerHTML = "Los apellidos no deben tener caracteres numéricos " +
            "y tienen que tener entre 10 y 20 caracteres";
        flag = false;
    }else{
        document.getElementById("esurname").innerHTML = "";
    }

    //Validar country
    if(country.length < 5 || country.length > 15) {
        document.getElementById("ecountry").innerHTML = "El pais tiene que tener entre 5 y 10 caracteres";
        flag = false;
    } else{
        document.getElementById("ecountry").innerHTML = "";
    }

    //Validar location
    if(location.length < 5 || location.length > 15) {
        document.getElementById("elocation").innerHTML = "La localidad tiene que tener entre 5 y 10 caracteres";
        flag = false;
    } else{
        document.getElementById("elocation").innerHTML = "";
    }

    //Validar direction
    if(direction.length < 5 || direction.length > 15) {
        document.getElementById("edirection").innerHTML = "La dirección tiene que tener entre 5 y 10 caracteres";
        flag = false;
    } else{
        document.getElementById("edirection").innerHTML = "";
    }

    //Validar code
    var regex_code = /[0-9]/;
    if(regex_code.test(code) !== true) {
        document.getElementById("ecode").innerHTML = "El código postal debe ser numérico";
        flag = false;
    } else{
        document.getElementById("ecode").innerHTML = "";
    }

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

/*Función para validar el formulario buy.html*/
/*
function validate_buy() {

    //Variables
    var credit = document.getElementById("credit").value;


    //Validar tarjeta crédito
    var regex_credit = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;

}*/