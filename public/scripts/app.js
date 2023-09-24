// Client facing scripts here
$(document).ready(function() {

  $("#create-poll").hide();

  $("#submit-poll-btn").click(function() {
    $("#create-poll").slideToggle(500, function() {
      $("#email").focus();
    });
  });
});
