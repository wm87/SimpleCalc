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
          <select id="selectedOperation-${rowCount}" class="form-select" aria-label="Operator">
            <option value="1" selected="selected">Bitte wählen</option>
            <option value="2">+</option>
            <option value="3">-</option>
            <option value="4">*</option>
            <option value="5">/</option>
          </select>
        </td>
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
    $('select').val('1').css("border-color", "");
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

    $("#data-table tbody select").each(function () {
      const value = $(this).val();
      if (value !== "1") {
        $(this).css("border-color", "");
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
    resultField.css("border-color", "");

    $("#data-table tbody select").each(function (idx) {
      const selectedValue = $(this).val();
      switch (selectedValue) {
        case '2':
          result += parseFloat(values[idx + 1]);
          break;
        case '3':
          result -= parseFloat(values[idx + 1]);
          break;
        case '4':
          result *= parseFloat(values[idx + 1]);
          break;
        case '5':
          result /= parseFloat(values[idx + 1]);
          break;
      }
    });

    resultField.val(result);
  }
});