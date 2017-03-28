$(document).ready(function() {
  $("form#survey").submit(function(event) {
      event.preventDefault();

      var resultLuckiness = 0;
      $("input:checkbox[name=luckiness]:checked").each(function() {
         resultLuckiness += parseInt($(this).val());
      })

      if (resultLuckiness <= 3) {
        $("p#resultNotLucky").show();
        $("p#resultLucky").hide();
        $("p#resultVeryLucky").hide();
      }
      else if (resultLuckiness >= 5) {
        $("p#resultVeryLucky").show();
        $("p#resultNotLucky").hide();
        $("p#resultLucky").hide();
      }
      else {
        $("p#resultLucky").show();
        $("p#resultVeryLucky").hide();
        $("p#resultNotLucky").hide();
      }

  });
});
