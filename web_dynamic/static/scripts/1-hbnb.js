window.onload = function() {
    let amenities = {}; //dictionary

    $( "li input" ).on( "click", function() {
        if ($("input[type=checkbox]").prop(
            ":checked")) {
              alert($("li").prop("data-name") + " was checked");
          } else {
              alert($("li").prop("data-name") + " was unchecked");
          }
      });
};