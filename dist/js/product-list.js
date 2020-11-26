$(document).ready(function (){

    $.ajax( {
        url: "../Pages/xml/instrumentos-list.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $('#guitarras').empty()
            $('#bajos').empty()
            $('#percusion').empty()
            $('#orquesta').empty()
            $('#teclado').empty()
            $('#piano').empty()
            $('#iluminacion').empty()
            $('#proyector').empty()
            $('#controlador').empty()
            $('#mezclador').empty()
            $(xml).find("producto").each( function (){
                var name = $(this).find('nombre').text()
                var img = $(this).find('imagen').text()
                var des1 = $(this).find('descripcion1').text()
                var des2 = $(this).find('descripcion2').text()
                var des3 = $(this).find('descripcion3').text()
                var link = $(this).find('enlace').text()
                var price = $(this).find('precio').text()
                var carrito = $(this).find('boton').text()
                var contenido = '<div class="col-xl-6 col-md-12">' +
                                    '<div class="row">' +
                                        '<div class="col-md-4 mb-3 text-center">' +
                                            '<img alt="" class="img-fluid rounded" src=' + img + '>' +
                                        '</div>' +
                                        '<div class="col-md-8">' +
                                            '<h3>' + name + '</h3>' +
                                            '<ul class="text-left m-1">' +
                                                '<li>' + des1 + '</li>' +
                                                '<li>' + des2 + '</li>' +
                                                '<li>' + des3 + '</li>' +
                                                '<span><a href="single-product.html">' + link + '</a></span>' +
                                            '</ul>' +
                                        '</div>' +
                                        '<div class="col-md-4 text-center mt-3">' +
                                            '<div class="alert alert-dark p-2 my-auto">' +
                                                '<h5 class="my-auto">' + price + '</h5>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="col-md-8 text-center mt-3">' +
                                            '<button onclick="" class="btn btn-dark">' + carrito + '</button>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-md-12 d-xl-none">' +
                                    '<hr>' +
                                '</div>'

                if($(this).find('tipo').text() === "guitarra") {
                    $('#guitarras').append(contenido);
                } else if($(this).find('tipo').text() === "bajo") {
                    $('#bajos').append(contenido);
                } else if($(this).find('tipo').text() === "percusion") {
                    $('#percusion').append(contenido);
                } else if($(this).find('tipo').text() === "orquesta") {
                    $('#orquesta').append(contenido);
                } else if($(this).find('tipo').text() === "teclado") {
                    $('#teclado').append(contenido);
                } else if($(this).find('tipo').text() === "piano") {
                    $('#piano').append(contenido);
                } else if($(this).find('tipo').text() === "iluminacion") {
                    $('#iluminacion').append(contenido);
                } else if($(this).find('tipo').text() === "proyector") {
                    $('#proyector').append(contenido);
                } else if($(this).find('tipo').text() === "controlador") {
                    $('#controlador').append(contenido);
                } else if($(this).find('tipo').text() === "mezclador") {
                    $('#mezclador').append(contenido);
                }

            });
        }
    });
});