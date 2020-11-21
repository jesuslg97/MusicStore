$(document).ready(loadJSON());

function loadJSON(path = "/dist/json/instruments.json") {

    $.getJSON(path, function (json) {
        if (json.guitar) {
            json.guitar.slice(0,2).forEach (item => {
                $('#product').append('\
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
                    <li>Cuerpo de madera de tilo</li>\
                    <li>Conmutador de 5 vías</li>\
                    <li>Hardware cromado</li>\
                </ul>\
                <div class="text-left mt-3 enlace">\
                    <a href="/Pages/single-product.html">Más información</a>\
                </div>\
            </div>')
            });
        }
    });
}