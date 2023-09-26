// Client facing scripts here
$(document).ready(function() {

  $("#create-poll").hide();

  $("#submit-poll-btn").click(function() {
    $("#create-poll").slideToggle(500, function() {
      $("#email").focus();
    });
  });

  $("#add-option-btn").click(function() {
    const newInputField = $("<input>").attr({
      type: "text",
      name: `option-${$("input[name^='option']").length + 1}`,
      placeholder: `Option ${$("input[name^='option']").length + 1}`,
      required: true
    });

    $(".option").append(newInputField);
  });

  $("#remove-option-btn").click(function() {
    const options = $("input[name^='option']");
    if (options.length > 1) {
      options.last().remove();
    }
  });
