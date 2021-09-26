window.onload = function() {
    let amenities = {};
    let test = [];

    $( '.amenities .popover li input').on( 'click', function() {
        if ($(this).is(':checked')) {
            amenities[$(this).parent().attr('data-id')] = $(this).parent().attr('data-name');
        } else {
            delete amenities[$(this).parent().attr('data-id')];
        }

        $('.amenities h4').text('');
        $.each(amenities, function(index, value){
            let last = amenities[Object.keys(amenities)[Object.keys(amenities).length - 1]]
            if (value === last){
                $('.amenities h4').append(value);
            } else {
                $('.amenities h4').append(value + ', ');
            }
        });

    });

    $.getJSON('http://da20cd38220f.4fd667c2.hbtn-cod.io:5001/api/v1/status/', function (data, textStatus, jqXHR) {

        if (data.status === 'OK') {
            $('DIV#api_status').addClass('available');
        } else {
            $('DIV#api_status').removeClass('available');
        }

    });

    setPlaces(); //this should work
};

async function setPlaces () {
    console.log('Hola');
    const url = 'http://da20cd38220f.4fd667c2.hbtn-cod.io:5001/api/v1/';
    const places = await getFromApi(url + 'places_search/', 'POST', '{}');
    places.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    console.log(places);
    $.each(places, async function(index, value){
        const user_data = await getFromApi(url + 'users/'+ value.user_id, 'GET');
        const first_name = user_data.first_name;
        const last_name = user_data.last_name;
        const html = `<article>
                      <div class='title_box'>
                        <h2>${value.name}</h2>
                        <div class='price_by_night'>\$${value.price_by_night}</div>
                      </div>
                      <div class='information'>
                        <div class='max_guest'>${value.max_guest} ${ value.max_guest >1 ? 'Guests' : 'Guest' }</div>
                            <div class='number_rooms'>${value.number_rooms} ${ value.number_rooms >1 ? 'Bedrooms' : 'Bedroom' }</div>
                            <div class='number_bathrooms'>${value.number_bathrooms} ${ value.number_bathrooms >1 ? 'Bathrooms' : 'Bathroom' }</div>
                      </div>
                      <div class='user'>
                        <b>Owner:</b> ${first_name} ${last_name}
                      </div>
                      <div class='description'>
                        ${value.description}
                      </div>
                      </article>`;
        $('section.places').append(html);
      });
}

function getFromApi (url, type, data = '') {

    return ($.ajax({
        url:url,
        type:type,
        data:data,
        contentType:'application/json',
    }));
};

