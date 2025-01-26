// The "use strict" directive was new in ECMAScript version 5
// Verbietet Duplikate
// write cleaner code, like preventing you from using undeclared variables
// Strict mode changes previously accepted "bad syntax" into real errors
// => robusterer JavaScript-Code
"use strict";

// $(document).ready(..) ist aus jQuery und stellt sicher, das der nachfolgende JS-Code erst ausgeführt wird, nachdem die gesamte HTML-Seite geladen wurde
$(document).ready(function () {
  let rowCount = 2;

  const clearBtn = $("#clear-rows");
  const calcBtn = $("#calcResult");
  const addRowBtn = $("#add-row");
  const deleteRowBtn = $("#delete-row");
  let tableBody = $("#data-table tbody");
  let resultField = $("#result");

  addRowBtn.on("click", function () {
    rowCount++;

    const row = $(`
      <tr>
        <th scope="row">${rowCount}</th>
        <td><input type="text" class="form-control" id="number-${rowCount}" value="" placeholder="Zahl ${rowCount}"/></td>
      </tr>
    `);

    tableBody.append(row);
  });

  deleteRowBtn.on("click", function () {
    let rows = $("#data-table tbody tr");
    if (rows.length > 2) {
      rows.last().remove();
    }
  });

  clearBtn.on("click", function () {

    $("#data-table tbody tr").each(function (index) {
      if (index >= 2) {
        $(this).remove();
      }
    });

    $("#data-table tbody input[type='text']").each(function () {

      $(this).val("");
      $(this).css("background-color", "");
      resultField.val("");
      resultField.css("background-color", "");
      $("#selectedOperation").val(1);
    });
  });

  calcBtn.on("click", function () {

    resultField.css("background-color", "");

    let values = [];

    if (checkValues(values) && values.length > 1) {
      console.log("Values are valid: " + values);
      calcResult(values);
    }
    else {
      console.log("Values are invalid: " + values.length);
    }
  });

  function checkValues(values) {

    let isValid = true;

    $("#data-table tbody input[type='text']").each(function () {
      if ($.isNumeric($(this).val())) {
        $(this).css("background-color", "");
        values.push($(this).val());
      }
      else {
        $(this).css("background-color", "red");
        resultField.css("background-color", "red");
        resultField.val("Ungültige Eingabe");
        isValid = false;
      }
    });

    if (!isValid) {
      values.length = 0; // Clear the array without changing the reference
    }

    return isValid;
  }

  function calcResult(values) {

    let result = 0;
    let selectedValue = $("#selectedOperation").val();

    switch (selectedValue) {
      case '2':
        result = parseFloat(values[0]);
        for (let i = 1; i < values.length; i++) {
          result += parseFloat(values[i]);
        }
        break;
      case '3':
        result = parseFloat(values[0]);
        for (let i = 1; i < values.length; i++) {
          result -= parseFloat(values[i]);
        }
        break;
      case '4':
        result = parseFloat(values[0]);
        for (let i = 1; i < values.length; i++) {
          result *= parseFloat(values[i]);
        }
        break;
      case '5':
        result = parseFloat(values[0]);
        for (let i = 1; i < values.length; i++) {
          result /= parseFloat(values[i]);
        }
        break;
      default:
        result = "Operation wählen";
    }

    resultField.css("background-color", "");
    resultField.val(result); // Setzt das Ergebnis
  }
});