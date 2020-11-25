$(document).ready(function (){

    $.ajax( {
        url: "../Pages/xml/prueba.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $(xml).find("guitarra").each( function (){
               var img = '<img src='+$(this).find('name').text()+'>'
                $('#product').append(img);
            });
        }
    });
});