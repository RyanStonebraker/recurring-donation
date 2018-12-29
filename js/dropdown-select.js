jQuery(document).ready(function($) {
  function init_matching_selection(className) {
    $(className).select2({
      placeholder: {
        id: "none",
        text: 'Find your company/organization'
      },
      allowClear: true,
      width: "100%"
  });
  $(className).val(null).trigger("change");
  }

  init_matching_selection(".companies_matching_donations_monthly");
  init_matching_selection(".companies_matching_donations_once");

  $(".companies_matching_donations_monthly").on("select2:select", function(event) {
    $(".companies_matching_donations_once").val(event.params.data.id).trigger("change");
  });

  $(".companies_matching_donations_once").on("select2:select", function(event) {
    $(".companies_matching_donations_monthly").val(event.params.data.id).trigger("change");
  });
});
