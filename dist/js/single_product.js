$(document).ready(function (){

    $.ajax( {
        url: "../Pages/single_product.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $('#instrumento').empty()
            $(xml).find("instrumento").each( function (){
                var nombre = $(this).find('nombre').text()
                var img = $(this).find('imagen').text()
                var info1 = $(this).find('info1').text()
                var info2 = $(this).find('info2').text()
                var info3 = $(this).find('info3').text()
                var info4 = $(this).find('info4').text()
                var info5 = $(this).find('info5').text()
                var info6 = $(this).find('info6').text()
                var info7 = $(this).find('info7').text()
                var info8 = $(this).find('info8').text()
                var desc1 = $(this).find('desc1').text()
                var desc2 = $(this).find('desc2').text()
                var desc3 = $(this).find('desc3').text()
                var desc4 = $(this).find('desc4').text()
                var tabla1= $(this).find('tabla1').text()
                var tabla2 = $(this).find('tabla2').text()
                var tabla3 = $(this).find('tabla3').text()
                var tabla4 = $(this).find('tabla4').text()
                var contenido = '<div class="col-md-3 mb-3 ">' +
                                    '<img alt="" class="img-fluid rounded" src=' + img + '>' +
                                    '</div>' +
                                        '<div class="col-md-6">' +
                                            '<h4>' + nombre + '</h4>' +
                                            '<ul>' +
                                                '<li class="col1">' + info1 + '</li>' +
                                                '<li class="col1">' + info2 + '</li>' +
                                                '<li class="col1">' + info3 + '</li>' +
                                                '<li class="col1">' + info4 + '</li>' +
                                                '<li class="col2">' + info5 + '</li>' +
                                                '<li class="col2">' + info6 + '</li>' +
                                                '<li class="col2">' + info7 + '</li>' +
                                                '<li class="col2">' + info8 + '</li>' +
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
                                                '</div>'
                $('#instrumento').append(contenido);
            });
        }
    });
});