// Client facing scripts here
$(document).ready(function () {
  $("#create-poll").hide();

  $("#submit-poll-btn").click(function () {
    $("#create-poll").slideToggle(500, function () {
      $("#email").focus();
    });
  });

  $("#add-option-btn").click(function () {
    const newInputField = $("<input>").attr({
      type: "text",
      name: `option-${$("input[name^='option']").length + 1}`,
      placeholder: `Option ${$("input[name^='option']").length + 1}`,
      required: true,
    });

    $(".option").append(newInputField);
  });

  $("#remove-option-btn").click(function () {
    const options = $("input[name^='option']");
    if (options.length > 2) {
      options.last().remove();
    } else if (options.length === 2) {
      alert("At least 2 options are required!");
    }
  });

  // disallow same rank for choices
  const selectedOptions = {};

  $("select").change(function () {
    const selectedValue = $(this).val();

    if (Object.values(selectedOptions).includes(selectedValue)) {
      alert("You cannot select the same rank for multiple options!");

      // clear the current selected option and remove it from selectedOptions;
      $(this).val("");
      if (selectedOptions[this.name]) {
        delete selectedOptions[this.name];
      }
    } else {
      selectedOptions[this.name] = selectedValue;
    }
  });
});
