$(document).ready(function () {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('=') + 1);
    var freq = 10000;
    function startAJAXcalls() {
        setTimeout(function () {
                getXMLProduct();
                startAJAXcalls();
            },
            freq
        );
    }

    getXMLProduct();
    startAJAXcalls();
    activateNavbar(id);

    function getXMLProduct() {

        $.ajax({
            url: "http://127.0.0.1:3000/categorias_api/index",
            success: function (categorias) {
                $('#categoria').empty()

                categorias.forEach(function (categoria){
                    var name =  categoria.nombre;
                    var img = categoria.img;
                    var des = categoria.descripcion;
                    var idCategoria = categoria.id;
                    var contenido = '<div class="row">' +
                        '<div class="col-md-4 col-xl-3 mb-3 text-center">' +
                        '<img alt="imagen" class="img-fluid rounded" src=' + img + '>' +
                        '</div>' +
                        '<div class="col-md-8 col-xl-9">' +
                        '<h4>' + name + '</h4>' +
                        '<p>' + des + '</p>' +
                        '<a href="product-list.html?id=' + idCategoria + '"> Ver' + name + '</a>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-12">' +
                        '<hr>' +
                        '</div>'

                    if (idCategoria === 1 || idCategoria === 2) {
                        if (id === "1" || id === "2"){
                            $('#categoria').append(contenido);
                        }
                    } else if (idCategoria === 3 || idCategoria === 4) {
                        if (id === "3" || id === "4"){
                            $('#categoria').append(contenido);
                        }
                    } else if (idCategoria === 5 || idCategoria === 6) {
                        if (id === "5" || id === "6"){
                            $('#categoria').append(contenido);
                        }
                    } else if (idCategoria === 7 || idCategoria === 8) {
                        if (id === "7" || id === "8"){
                            $('#categoria').append(contenido);
                        }
                    } else if (idCategoria === 9 || idCategoria === 10) {
                        if (id === "9" || id === "10"){
                            $('#categoria').append(contenido);
                        }
                    }
                });
            }
        });
    }
});