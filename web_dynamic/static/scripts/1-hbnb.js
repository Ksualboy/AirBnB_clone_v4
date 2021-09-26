window.onload = function () {
  const amenities = {};
  const test = [];

  $('.amenities .popover li input').on('click', function () {
    if ($(this).is(':checked')) {
      amenities[$(this).parent().attr('data-id')] = $(this).parent().attr('data-name');
    } else {
      delete amenities[$(this).parent().attr('data-id')];
    }

    $('.amenities h4').text('');
    $.each(amenities, function (index, value) {
      const last = amenities[Object.keys(amenities)[Object.keys(amenities).length - 1]];
      if (value === last) {
        $('.amenities h4').append(value);
      } else {
        $('.amenities h4').append(value + ', ');
      }
    });
  });
};
