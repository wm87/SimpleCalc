// The "use strict" directive was new in ECMAScript version 5
// Verbietet Duplikate
// write cleaner code, like preventing you from using undeclared variables
// Strict mode changes previously accepted "bad syntax" into real errors
// => robusterer JavaScript-Code
"use strict";

// $(document).ready(..) ist aus jQuery und stellt sicher, 
// das der nachfolgende JS-Code erst ausgeführt wird, 
// nachdem die gesamte HTML-Seite geladen wurde
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
        <td>
          <input type="text" class="form-control" id="number-${rowCount}" placeholder="Zahl ${rowCount} eintragen" />
        </td>
      </tr>
    `);

    tableBody.append(row);
  });

  deleteRowBtn.on("click", function () {
    const rows = $("#data-table tbody tr");
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
    // $("#data-table tbody tr").slice(2).remove();

    $("#data-table tbody input[type='text']").each(function () {
      $(this).val("").css("border-color", "");
    });

    resultField.val("").css("border-color", "");
    $("#selectedOperation").val(1);
    rowCount = 2;
  });

  calcBtn.on("click", function () {

    let values = [];

    if (checkValues(values) && values.length > 1) {
      calcResult(values);
    }
    else {
      resultField.val("Ungültige Eingabe(n)").css("border-color", "red");
    }
  });

  function checkValues(values) {

    let isValid = true;

    $("#data-table tbody input[type='text']").each(function () {
      const value = $(this).val().trim();
      if ($.isNumeric(value)) {
        $(this).css("border-color", "");
        values.push(value);
      }
      else {
        $(this).css("border-color", "red");
        isValid = false;
      }
    });

    if (!isValid) {
      values.length = 0; // Clear the array without changing the reference
    }

    return isValid;
  }

  function calcResult(values) {

    let result = parseFloat(values[0]);
    const selectedValue = $("#selectedOperation").val();
    resultField.css("border-color", "");

    switch (selectedValue) {
      case '2':
        for (let i = 1; i < values.length; i++) {
          result += parseFloat(values[i]);
        }
        break;
      case '3':
        for (let i = 1; i < values.length; i++) {
          result -= parseFloat(values[i]);
        }
        break;
      case '4':
        for (let i = 1; i < values.length; i++) {
          result *= parseFloat(values[i]);
        }
        break;
      case '5':
        for (let i = 1; i < values.length; i++) {
          result /= parseFloat(values[i]);
        }
        break;
      default:
        result = "Operation wählen";
        resultField.css("border-color", "red");
    }

    resultField.val(result);
  }
});