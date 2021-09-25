window.onload = function() {
    let amenities = {};
    let test = [];

    $( '.amenities .popover li input').on( 'click', function() {
        if ($(this).is(':checked')) {
            amenities[$(this).parent().attr('data-id')] = $(this).parent().attr('data-name');
        } else {
            delete amenities[$(this).parent().attr('data-id')];
        }

        $('.amenities h4').text("");
        $.each(amenities, function(index, value){
            let last = amenities[Object.keys(amenities)[Object.keys(amenities).length - 1]]
            if (value === last){
                $('.amenities h4').append(value);
            } else {
                $('.amenities h4').append(value + ", ");
            }
        });

    });

    $.ajax({
        url:'http://da20cd38220f.4fd667c2.hbtn-cod.io:5001/api/v1/places_search/',
        type:'POST',
        data:'{}',
        contentType:'application/json',
        success: function(data, textStatus, jqXHR){
            console.log(data);
            /*
                Devuelve un array vacio. No se si sea que mando el empty dictionary mal
                o algun problema con nuestra base de datos.

                intente leer la expiclacion de la api pero no me dio el cerebro para entenderla
            */
        }
    });
};