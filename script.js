// The "use strict" directive was new in ECMAScript version 5
// Prohibits duplicates
// Helps write cleaner code, like preventing the use of undeclared variables
// Strict mode changes previously accepted "bad syntax" into real errors
// => more robust JavaScript code
"use strict";

// $(document).ready(..) is from jQuery and ensures 
// the following JS code is executed only after 
// the entire HTML page has loaded
$(document).ready(function () {

  let rowCount = 2;
  const clearBtn = $("#clear-rows");
  const calcBtn = $("#calcResult");
  const addRowBtn = $("#add-row");
  const deleteRowBtn = $("#delete-row");
  let tableBody = $("#data-table tbody");
  let resultField = $("#result");

  // Adding a new row
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

    // Append the new row to the end of the table
    tableBody.append(row);
  });

  // Deleting the last row
  deleteRowBtn.on("click", function () {
    const rows = $("#data-table tbody tr");
    if (rows.length > 2) {
      rows.last().remove();
      rowCount--;
    }
  });

  clearBtn.on("click", function () {

    // Remove all rows except the first two
    $("#data-table tbody tr").each(function (index) {
      if (index >= 2) {
        $(this).remove();
      }
    });
    // $("#data-table tbody tr").slice(2).remove();

    // Reset all input fields
    $("#data-table tbody input[type='text']").val("").css("border-color", "");

    // Reset all select elements (operations)
    $('select').val('1').css("border-color", "");

    // Reset the row numbering
    rowCount = 2;

    // Reset the result field
    resultField.val("").css("border-color", "");
  });

  calcBtn.on("click", function () {

    let numbers = [], operators = [];

    // Check if all values are valid: numbers and 
    // operators are selected and there are at least two numbers
    if (checkValues(numbers, operators) && numbers.length > 1) {
      // Calculate the result
      calcResult(numbers, operators);
    }
  });

  // Check input values to validate numbers and operators
  function checkValues(numbers, operators) {

    let isValid = true;
    resultField.val("").css("border-color", "");

    // Check if all numbers are valid
    $("#data-table tbody input[type='text']").each(function () {
      const number = $(this).val().trim();

      // Check if the input is a number
      if ($.isNumeric(number)) {
        $(this).css("border-color", "");
        numbers.push(parseFloat(number));
      }
      else {
        $(this).css("border-color", "red");
        isValid = false;
      }
    });

    // Check if all operators are valid
    $("#data-table tbody select").each(function () {
      const operator = $(this).val();
      const selectedOperation = $(this).find("option:selected").text();

      // Check if the operator is selected, but not the default value
      if (operator !== "1") {
        $(this).css("border-color", "");
        operators.push(selectedOperation);
      }
      else {
        $(this).css("border-color", "red");
        isValid = false;
      }
    });

    // Check if there is a division by zero
    tableBody.find('tr').each(function () {
      let operator = $(this).find('select');
      let number = $(this).find('input');

      // Check if the operator is division and the number is zero
      if (operator.val() === '5' && number.val() === '0') {
        operator.css("border-color", "red");
        number.css("border-color", "red");
        isValid = false;
      }
    });

    if (!isValid) {
      numbers.length = 0;
      resultField.val("Ungültige Eingabe(n)").css("border-color", "red");
    }

    return isValid;
  }

  // Calculate the result based on the input numbers and operators
  function calcResult(numbers, operators) {

    let tmpValue = 0;
    // let numbers = [2, 3, 1, 6, 1, 2];
    // let operators = ['*', '*', '+', '*', '*'];

    // at first we calculate the multiplication and division because they have the highest priority
    for (let i = 0; i < operators.length; i++) {

      if (operators[i] === '*') {

        // Calculate the product of the two numbers at the position i and i+1
        tmpValue = numbers[i] * numbers[i + 1];

        // Remove the two numbers and replace them with the product
        numbers.splice(i, 2, tmpValue);

        // Remove the operator at the current position
        operators.splice(i, 1);

        // Decrement the index to check the next operator and number
        i--;
      }
      else if (operators[i] === '/') {
        tmpValue = numbers[i] / numbers[i + 1];
        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
    }

    // second we calculate the addition and subtraction because they have the lowest priority
    for (let i = 0; i < operators.length; i++) {

      if (operators[i] === '+') {

        // Calculate the sum of the two numbers at the position i and i+1
        tmpValue = numbers[i] + numbers[i + 1];

        // Remove the two numbers and replace them with the sum
        numbers.splice(i, 2, tmpValue);

        // Remove the operator at the current position
        operators.splice(i, 1);

        // Decrement the index to check the next operator and number
        i--;
      }
      else if (operators[i] === '-') {
        tmpValue = numbers[i] - numbers[i + 1];
        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
    }

    // Display the result
    resultField.val(numbers);
  }
});
