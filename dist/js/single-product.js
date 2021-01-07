$(document).ready(function () {

    var url = window.location.href
    var id = url.substring(url.lastIndexOf('=') + 1)
    //var freq = 10000;

    /*function startAJAXcalls() {
        setTimeout(function () {
                getXMLSingle();
                startAJAXcalls();
            },
            freq
        );
    }
    getXMLSingle();
    startAJAXcalls();*/

    //function getXMLSingle() {
        $.ajax({
            url: "http://127.0.0.1:3000/productos",
            cache: false,
            dataType: 'json',
            data: JSON,
            success: function (json) {
                $('#single-product').empty()
                var contenido;
                $.each(json, function (key,instrumento) {
                    contenido = '<div class="col-md-3 mb-3 text-center">' +
                        '<img alt="" class="img-fluid rounded" src=' + instrumento.image + '>' +
                        '</div>' +
                        '<div class="col-md-5">' +
                        '<h4>' + instrumento.nombre + '</h4>' +
                        '<ul>' +
                        '<li class="col1">' + instrumento.detalles + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '<div class="col-md-4 mt-5">' +
                        '<table class="table">' +
                        '<tbody>' +
                        '<tr>' +
                        '<th>Color</th>' +
                        '<td>' + instrumento.color + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<th>Material</th>' +
                        '<td>' + instrumento.material + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '<div class="col-md-4 text-center mt-3">' +
                        '<div class="alert alert-dark p-2 my-auto">' +
                        '<h5 class="my-auto">' + instrumento.precio + '</h5>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-8 text-center mt-3">' +
                        '<button onclick="" class="btn btn-dark">Añadir al carrito</button>' +
                        '<button onclick="" class="btn btn-dark">' + instrumento.id + '</button>' +
                        '<button onclick="" class="btn btn-dark">' + instrumento.idCategoria + '</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="col-md-12 d-xl-none">' +
                        '<hr>' +
                        '</div>';

                    if (instrumento.id !== id){
                        $("#single-product").append(contenido);
                        //activateNavbar(idCategoria);
                    }

                });
            }
        });
    //}
});