
    function login() {

        var mail = document.getElementById("email").value;
        //var password = document.getElementById("passwd").value;

        $.getJSON("http://127.0.0.1:3000/users", function (json) {
            for (var user in json) {
                if (json[user].email === mail) {
                    alert("Usuarios y contraseña correctas");
                } else {
                    alert("Usuario o contraseña incorrecto");
                }
            }
        });

    }

