$(document).ready(loadJSON());

function loadJSON() {

    $.getJSON("../dist/json/instruments.json", function (json) {
        if (json.guitarra) {
            json.guitarra.filter(f => f.new == true).slice(0,2).forEach (item => {
                $('#product').append('\
                <div class="col-sm-10">\
                    <div class="d-flex">\
                        <div class="imagenes">\
                            <picture>\
                            <img src="/MusicStore/' + item.img + '"  alt="imagen-guitarra1" width="250" vspace="10">\
                            </picture>\
                            <div class="align-items-center boton">\
                                <button onclick="">Añadir al carrito</button>\
                            </div>\
                        </div>\
                        <div class="text-center m-3 titulo-producto">\
                            <h4>' + item.name + '</h4>\
                            <div class="precio">\
                                <span class="precio">' + item.price + '</span>\
                        </div>\
                        <ul class="text-left m-1">\
                            <li>' + item.description + '</li>\
                        </ul>\
                        <div class="text-left mt-3 enlace">\
                            <a href="/Pages/single-product.html?id=' + item.id + '">Más información</a>\
                        </div>\
                    </div>\
                </div>\
                ')
            });
        }
    });
}