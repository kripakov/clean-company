$(document).ready(function() {
  $('.testimonials__item').find('div').each(function(i, e) {
    var $el = $(e),
      text = $(e).text();

    $({
      percentage: 0
    }).stop(true).animate({
      percentage: text
    }, {
      duration: 4000,
      easing: "easeOutExpo",
      step: function() {
        var percentageVal = Math.round(this.percentage * 10) / 10;
        $el.text(percentageVal);
      }
    }).promise().done(function() {
      $el.text(text);
    });
  })
});
