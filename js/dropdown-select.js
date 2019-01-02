jQuery(document).ready(function($) {
  function init_matching_selection(className) {
    $(className).select2({
      placeholder: 'Find your company/organization',
      allowClear: true,
      width: "100%"
  });
  $(className).val(null).trigger("change");
  }

  init_matching_selection(".companies_matching_donations_monthly");
  init_matching_selection(".companies_matching_donations_once");

  function addCompanyToItem(frequency) {
    let company = $(".companies_matching_donations_" + frequency).val() || "";
    company = company.trim();

    let item_name = $("form.dntplgn_donate_" + frequency + " input[name='item_name']").val();
    item_name = item_name.replace(/\s+\(.*\)$/g, '');

    if (company)
      $("form.dntplgn_donate_" + frequency + " input[name='item_name']").val(item_name + " (matched by: " + company + ")");
    else
      $("form.dntplgn_donate_" + frequency + " input[name='item_name']").val(item_name);
  }

  $(".companies_matching_donations_monthly").on("select2:select", function(event) {
    $(".companies_matching_donations_once").val(event.params.data.id).trigger("change");
    addCompanyToItem("monthly");

  });
  $(".companies_matching_donations_once").on("select2:select", function(event) {
    $(".companies_matching_donations_monthly").val(event.params.data.id).trigger("change");
    addCompanyToItem("once");
  });

  $(".companies_matching_donations_monthly").on("select2:unselect", function (event) {
    $(".companies_matching_donations_once").val("").trigger("change");
    addCompanyToItem("monthly");
  });

  $(".companies_matching_donations_once").on("select2:unselect", function (event) {
    $(".companies_matching_donations_monthly").val("").trigger("change");
    addCompanyToItem("once");
  });
});
