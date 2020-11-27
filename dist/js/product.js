$(document).ready(function (){

    $.ajax( {
        url: "../Pages/instrumento.xml" ,
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $('#informacion').empty()
            $(xml).find("instrumento").each( function (){

            });
        }
    });
});