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
            $(xml).find("producto").each( function () {
                var name = $(this).find('nombre').text()
                var img = $(this).find('imagen').text()
                var des = $(this).find('descripcion').text()
                var link = $(this).find('enlace').text()
                var id = $(this).find('id').text()
                var contenido = '<div class="row">' +
                                    '<div class="col-md-4 col-xl-3 mb-3 text-center">' +
                                        '<img alt="imagen" class="img-fluid rounded" src=' + img + '>' +
                                    '</div>' +
                                    '<div class="col-md-8 col-xl-9">' +
                                        '<h4>' + name +'</h4>' +
                                        '<p>' + des + '</p>' +
                                        '<a href="product-list.html?id=' + id + '">' + link + '</a>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-md-12">' +
                                    '<hr>' +
                                '</div>'

                if($(this).find('tipo').text() === "guitarra-bajo") {
                    $('#guitarras-bajos').append(contenido);
                } else if($(this).find('tipo').text() === "percusion-orquesta") {
                    $('#percusion-orquesta').append(contenido);
                } else if($(this).find('tipo').text() === "teclado-piano") {
                    $('#teclado-piano').append(contenido);
                } else if($(this).find('tipo').text() === "iluminacion-proyector") {
                    $('#iluminacion-proyector').append(contenido);
                } else if($(this).find('tipo').text() === "controlador-mezclador") {
                    $('#controlador-mezclador').append(contenido);
                }
            });
        }
    });
});