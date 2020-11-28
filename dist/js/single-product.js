$(document).ready(function () {

    var url = window.location.href
    var id = url.substring(url.lastIndexOf('=') + 1)
    var freq = 10000;

    function startAJAXcalls() {
        setTimeout(function () {
                getXMLSingle();
                startAJAXcalls();
            },
            freq
        );
    }
    getXMLSingle();
    startAJAXcalls();

    function getXMLSingle() {
        $.ajax({
            url: "../Pages/xml/instrumentos-list.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {
                $('#guitarra').empty()
                $(xml).find("producto").each(function () {
                    var nombre = $(this).find('nombre').text()
                    var img = $(this).find('imagen').text()
                    var des1 = $(this).find('descripcion1').text()
                    var des2 = $(this).find('descripcion2').text()
                    var des3 = $(this).find('descripcion3').text()
                    var des4 = $(this).find('descripcion4').text()
                    var des5 = $(this).find('descripcion5').text()
                    var des6 = $(this).find('descripcion6').text()
                    var des7 = $(this).find('descripcion7').text()
                    var des8 = $(this).find('descripcion8').text()
                    var price = $(this).find('precio').text()
                    var desc1 = $(this).find('desc1').text()
                    var desc2 = $(this).find('desc2').text()
                    var desc3 = $(this).find('desc3').text()
                    var desc4 = $(this).find('desc4').text()
                    var tabla1 = $(this).find('tabla1').text()
                    var tabla2 = $(this).find('tabla2').text()
                    var tabla3 = $(this).find('tabla3').text()
                    var tabla4 = $(this).find('tabla4').text()
                    //var idproducto = $(this).find('id').text()
                    var tipo = $(this).find('tipo2').text()
                    var contenido = '<div class="col-md-3 mb-3 ">' +
                        '<img alt="" class="img-fluid rounded" src=' + img + '>' +
                        '</div>' +
                        '<div class="col-md-6">' +
                        '<h4>' + nombre + '</h4>' +
                        '<ul>' +
                        '<li class="col1">' + des1 + '</li>' +
                        '<li class="col1">' + des2 + '</li>' +
                        '<li class="col1">' + des3 + '</li>' +
                        '<li class="col1">' + des4 + '</li>' +
                        '<li class="col2">' + des5 + '</li>' +
                        '<li class="col2">' + des6 + '</li>' +
                        '<li class="col2">' + des7 + '</li>' +
                        '<li class="col2">' + des8 + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '<div class="col-md-3 mt-5">' +
                        '<table class="table">' +
                        '<tbody>' +
                        '<tr>' +
                        '<th>' + desc1 + '</th>' +
                        '<td>' + tabla1 + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<th>' + desc2 + '</th>' +
                        '<td>' + tabla2 + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<th>' + desc3 + '</th>' +
                        '<td>' + tabla3 + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<th>' + desc4 + '</th>' +
                        '<td>' + tabla4 + '</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '<div class="col-md-4 text-center mt-3">' +
                        '<div class="alert alert-dark p-2 my-auto">' +
                        '<h5 class="my-auto">' + price + '</h5>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-8 text-center mt-3">' +
                        '<button onclick="" class="btn btn-dark">' + "Añadir al carrito" + '</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-12 d-xl-none">' +
                        '<hr>' +
                        '</div>'

                    if (id === "1") {
                        if (tipo === "g1") {
                            $('#guitarra').append(contenido);
                        }
                    }

                });
            }
        });
    }
});