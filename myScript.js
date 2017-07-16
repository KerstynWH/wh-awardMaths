var rowNumber = 5


$(document).ready(function() {
  initSpreadsheet();
  hideWinners();
  initButtons();
});

function initSpreadsheet() {
  var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/16uq_hdw42uJvi4RT67lAf0gxyER_hUoamOSOiC7ZcZg/pubhtml";

  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: useSpreadsheetData,
    simpleSheet: false
  });
}

function populateAwards(elemId, winnerName) {
  $(elemId).html(winnerName);
}

function useSpreadsheetData(data, tabletop) {
  console.log("Spreadsheet loaded.");
  var fleetAwards = data["Fleet Subject Award"].elements[rowNumber-2];
  var tyburnAwards = data["Tyburn Subject Award"].elements[rowNumber-2];
  populateAwards("#achievement-name-fleet", fleetAwards["AA Name"]);
  populateAwards("#achievement-name-tyburn", tyburnAwards["AA Name"]);
  populateAwards("#progress-name-fleet", fleetAwards["MP Name"]);
  populateAwards("#progress-name-tyburn", tyburnAwards["MP Name"]);

  console.log(['Awards data: ', fleetAwards, tyburnAwards]);
}

function hideWinners() {
  $(".winner-name").hide();
}


function initButtons() {
  $("#tyburn-button").click(function() {
    $(".tyburn-row .winner-name").show();
    console.log("HELLO TY BUTTON WAS CLICKED");
  });
  $("#fleet-button").click(function() {
    $(".fleet-row .winner-name").show();
    console.log("HELLO FL BUTTON WAS CLICKED");
  });
}
