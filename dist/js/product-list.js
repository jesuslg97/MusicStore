$(document).ready(function () {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('=') + 1);
    var freq = 10000;

    function startAJAXcalls() {
        setTimeout(function () {
                getJSONProductList();
                startAJAXcalls();
            },
            freq
        );
    }
    getJSONProductList();
    startAJAXcalls();
    activateNavbar(id);

    function getJSONProductList() {
        $.ajax({
            url: "http://127.0.0.1:3000/informacion",
            cache: false,
            dataType: 'json',
            data: JSON,
            success: function (json) {
                $('#producto-lista').empty();
                var contenido;
                $.each(json, function (key,instrumento) {
                    contenido = '<div class="col-xl-6 col-md-12">' +
                        '<div class="row">' +
                        '<div class="col-md-4 mb-3 text-center">' +
                        '<img alt="" class="img-fluid rounded" src=' + instrumento.image + '>' +
                        '</div>' +
                        '<div class="col-md-8">' +
                        '<h3>' + instrumento.nombre + '</h3>' +
                        '<ul class="text-left m-1">' +
                        '<li>' + instrumento.informacion + '</li>' +
                        '<span><a href="single-product.html?id=' + instrumento.id + '">Más información</a></span>' +
                        '</ul>' +
                        '</div>' +
                        '<div class="col-md-4 text-center mt-3">' +
                        '<div class="alert alert-dark p-2 my-auto">' +
                        '<h5 class="my-auto">' + instrumento.precio + '</h5>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-8 text-center mt-3">' +
                        '<button onclick="" class="btn btn-dark">Añadir al carrito</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-12 d-xl-none">' +
                        '<hr>' +
                        '</div>';

                    if (instrumento.categoria_id === 1) {

                        if (id === "1") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 2) {
                        if (id === "2") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 3) {
                        if (id === "3") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 4) {
                        if (id === "4") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 5) {
                        if (id === "5") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 6) {
                        if (id === "6") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 7) {
                        if (id === "7") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 8) {
                        if (id === "8") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 9) {
                        if (id === "9") {
                            $('#producto-lista').append(contenido);
                        }
                    } else if (instrumento.categoria_id === 10) {
                        if (id === "10") {
                            $('#producto-lista').append(contenido);
                        }
                    }

                });
            }
        });
    }
});
