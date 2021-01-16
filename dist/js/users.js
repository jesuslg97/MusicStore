function login() {

    var mail = document.getElementById("email").value;
    var password = document.getElementById("passwd").value;
    var flag = false;

    $.getJSON("http://127.0.0.1:3000/users", function (json) {
        console.log("Lee el json");
        for (var user in json) {
            if (json.hasOwnProperty(user)) {
                if (json[user].email === mail && json[user].contraseña === password) {
                    console.log("Encuentra el usuario");
                    flag = true;
                    break
                }
            }
        }

        if (flag) {
            alert("Credenciales correctas");
            window.location.href = "../index.html";
        } else {
            alert("Usuario o contraseña incorrecto");
        }
    });

}

