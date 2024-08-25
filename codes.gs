function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitData(obj) {
  // Replace your google Sheet id below >>>>>>>>>>>>>>>>>>>>
  var spreadsheetId = "1wsalJm10xlbYqbA58aF2Ba-znU6fxOwtDV8JGMjfL34";
  var sheetName = "Data";
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheetByName(sheetName);
  var flag = 1;
  var lastRow = sheet.getLastRow();

  for (var i = 1; i <= lastRow; i++) {
    var currentId = sheet.getRange(i, 1).getValue();

    if (currentId == obj) {
      flag = 0;
	  // Replace your google Sheet Heading below >>>>>>>>>>>>>>>>>>>>
      var columnB = sheet.getRange(i, 2).getValue();
      var columnC= sheet.getRange(i, 3).getValue();
      var columnD = sheet.getRange(i, 4).getValue();
      var columnE = sheet.getRange(i, 5).getValue(); 

     

      var resultHtml = "<table border='1' style='width:100%; border-collapse: collapse;'>" +
                   "<tr><th colspan='2' style='text-align: center;'>അർത്ഥം</th></tr>" +
                   "<tr><td>संस्कृतम्</td><td>" + obj + "</td></tr>" +
                   "<tr><td>മലയാളം</td><td>" + columnB + "</td></tr>" +
                   "<tr><td>ENGLISH</td><td>" + columnC + "</td></tr>" +
                   "<tr><td>ശബ്ദവിഭാഗം</td><td>" + columnD + "</td></tr>" +
                   "<tr><td>ശബ്ദവിഭാഗം</td><td>" + columnE + "</td></tr>" +
                   "</table>";

      return resultHtml;




    }
  }

  if (flag == 1) {
    var notFoundMessage = "DATA IS NOT FOUND!";
    return notFoundMessage;
  }
}
