window.onload = function() {
    let amenities = {}; //dictionary
    

    

    $( '.popper li input').on( 'click', function() {
        if ($('input[type=checkbox]').prop(':checked')) {
              alert($('.popper li').attr('data-name') + ' was checked');
        } else {
              alert($('.popper li').attr('data-name') + ' was unchecked');
        }
      });
};