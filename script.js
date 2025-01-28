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
          <select class="form-select operation" aria-label="Operator">
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
      rowCount--;
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

    let numbers = [], operators = [];

    if (checkValues(numbers, operators) && numbers.length > 1) {
      calcResult(numbers, operators);
    }
  });

  function checkValues(numbers, operators) {

    let isValid = true;
    resultField.val("").css("border-color", "");

    $("#data-table tbody input[type='text']").each(function () {
      const number = $(this).val().trim();
      if ($.isNumeric(number)) {
        $(this).css("border-color", "");
        numbers.push(parseFloat(number));
      }
      else {
        $(this).css("border-color", "red");
        isValid = false;
      }
    });

    $("#data-table tbody select").each(function () {
      const operator = $(this).val();
      if (operator !== "1") {
        $(this).css("border-color", "");
      }
      else {
        $(this).css("border-color", "red");
        isValid = false;
      }
    });

    tableBody.find('tr').each(function () {
      let operator = $(this).find('select');
      let number = $(this).find('input');

      if (operator.val() === '5' && number.val() === '0') {
        operator.css("border-color", "red");
        number.css("border-color", "red");
        isValid = false;
      }
    });

    if (!isValid) {
      numbers.length = 0; // Clear the array without changing the reference
      resultField.val("Ungültige Eingabe(n)").css("border-color", "red");

      return false;
    }

    $('.operation').each(function () {
      const selectedOperation = $(this).find("option:selected").text();
      operators.push(selectedOperation);
    });

    return true;
  }

  function calcResult(numbers, operators) {

    let tmpValue = 0;
    // let numbers = [2, 3, 1, 6, 1, 2];
    // let operators = ['*', '*', '+', '*', '*'];

    for (let i = 0; i < operators.length; i++) {

      if (operators[i] === '*') {
        tmpValue = numbers[i] * numbers[i + 1];

        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
      else if (operators[i] === '/') {
        tmpValue = numbers[i] / numbers[i + 1];

        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < operators.length; i++) {

      if (operators[i] === '+') {
        tmpValue = numbers[i] + numbers[i + 1];

        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
      else if (operators[i] === '-') {
        tmpValue = numbers[i] - numbers[i + 1];

        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
    }

    // console.log(numbers);
    // console.log(operators);

    resultField.val(numbers);
  }
});