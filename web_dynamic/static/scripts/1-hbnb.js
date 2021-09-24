window.onload = function() {
    let amenities = {}; //dictionary
    

    

    $( '.popover li input').on( 'click', function() {
        if ($('input[type=checkbox]').prop(':checked')) {
              alert($('.popover li').attr('data-name') + ' was checked');
        } else {
              alert($('.popover li').attr('data-name') + ' was unchecked');
        }
      });
};