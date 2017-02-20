// DOM refs
var $bar = $('.js-bar');
var $remaining = $('.js-remaining');
var $amount = $('.js-amount');
var $submit = $('.js-submit');
var $success = $('.js-success');
var $form = $('.js-form');
var $help = $('.js-help');

var GOAL_AMOUNT = 618;
var CURRENT_AMOUNT = 451;
var CURRENT_REMAINING = 167;

var init = function() {
  // Bind events

  $submit.on('click', onSubmitClick);
}

var onSubmitClick = function(e) {
  e.preventDefault();

  var amount = $amount.val();
  var newAmount = parseInt($amount.val()) + CURRENT_AMOUNT;
  var barWidth = Math.floor((newAmount/GOAL_AMOUNT)  * 100);
  var newRemaining = '$' + (CURRENT_REMAINING - $amount.val());

  $bar.width(barWidth + '%');
  $remaining.text(newRemaining);

  $form.css('opacity', 0);
  $help.css('opacity', 0);
  $success.css('opacity', 1);
  $submit.attr('disabled',true);
}

init();
