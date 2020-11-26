$(document).ready(function (){

    $.ajax({
        url: "../Pages/xml/instrumentos.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $('#guitarras-bajos').empty()
            $('#percusion-orquesta').empty()
            $('#teclado-piano').empty()
            $('#iluminacion-proyector').empty()
            $('#controlador-mezclador').empty()

        }
    });
});