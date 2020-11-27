$(document).ready(function () {
    var url = window.location.href
    var id = url.substring(url.lastIndexOf('=') + 1)
    var freq = 10000;

    function startAJAXcalls() {
        setTimeout(function () {
            getXMLProductList();
            startAJAXcalls();
            },
            freq
        );
    }
    getXMLProductList();
    startAJAXcalls();

    function getXMLProductList() {

        $.ajax({
            url: "../Pages/xml/instrumentos-list.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {
                $('#producto-lista').empty()
                $(xml).find("producto").each(function () {
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


                    if ($(this).find('tipo').text() === "guitarra") {
                        if (id === "1") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "bajo") {
                        if (id === "2") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "percusion") {
                        if (id === "3") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "orquesta") {
                        if (id === "4") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "teclado") {
                        if (id === "5") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "piano") {
                        if (id === "6") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "iluminacion") {
                        if (id === "7") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "proyector") {
                        if (id === "8") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "controlador") {
                        if (id === "9") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if ($(this).find('tipo').text() === "mezclador") {
                        if (id === "10") {
                            $('#producto-lista').append(contenido);
                        }
                    }

                });
            }
        });
    }
});