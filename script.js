/* The "use strict" directive was new in ECMAScript version 5
Prohibits duplicates
Helps write cleaner code, like preventing the use of undeclared variables
Strict mode changes previously accepted "bad syntax" into real errors
=> more robust JavaScript code */
"use strict";

/* $(document).ready(..) is from jQuery and ensures 
the following JS code is executed only after 
the entire HTML page has loaded */
$(document).ready(function () {

  let rowCount = 2;
  const clearBtn = $("#clear-rows");
  const calcBtn = $("#calcResult");
  const addRowBtn = $("#add-row");
  const deleteRowBtn = $("#delete-row");
  let tableBody = $("#data-table tbody");
  let resultField = $("#result");
  $("#errorBox").hide();

  // Adding a new row
  addRowBtn.on("click", function () {

    rowCount++;

    const row = $(`
      <tr>
        <th scope="row">${rowCount}</th>
        <td>
          <select class="form-select operation" aria-label="Operator">
            <option value="1" selected>Bitte wählen</option>
            <option value="2">+</option>
            <option value="3">-</option>
            <option value="4">×</option>
            <option value="5">÷</option>
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

    // Reset all input fields
    $("#data-table tbody input[type='text']").val("").css("border-color", "");

    // Reset all select elements (operations)
    $('select').val('1').css("border-color", "");

    // Reset the row numbering
    rowCount = 2;

    // Reset the result field
    resultField.val("").css("border-color", "");

    $("#errorBox").hide();
  });

  calcBtn.on("click", function () {

    let numbers = [], operators = [];
    let errors = { operators: 0, numbers: 0, divZeros: 0 };
    let errorMessage = "";
    let countErrors = 0;

    // Check if all values are valid: numbers and 
    // operators are selected and there are at least two numbers
    if (checkValues(numbers, operators, errors) && numbers.length > 1) {
      $("#errorBox").hide();
      // Calculate the result
      calcResult(numbers, operators);
    }
    else {
      errorMessage = "Bitte prüfen Sie die Eingaben:\n\n";
      for (let key in errors) {
        if (errors[key] > 0) {
          countErrors += errors[key];
          errorMessage += `${errors[key]} ${key}\n`;
        }
      }
      errorMessage += `\nInsgesamt ${countErrors} Fehler gefunden`;
      $("#errorBox").val(errorMessage).show();
    }
  });

  // Check input values to validate numbers and operators
  function checkValues(numbers, operators, errors) {

    let isValid = true;
    resultField.val("").css({ "border-color": "", "color": "" });

    tableBody.find('tr').each(function () {

      const operator = $(this).find("select");
      const selectedOperation = $(this).find("select").find("option:selected").text();
      const number = $(this).find("input[type='text']");
      const numberValue = number.val().trim();

      // Check if the input is a number and finite
      if (!isNaN(numberValue) && isFinite(numberValue) && numberValue !== '') {
        number.css("border-color", "");
        numbers.push(parseFloat(numberValue));
      }
      else {
        number.css("border-color", "red");
        errors.numbers++;
        isValid = false;
      }

      // Check that all operators are present
      if (operator.val() && selectedOperation) {
        // Check if the operator is selected, but not the default value
        if (operator.val() !== "1") {
          operator.css("border-color", "");
          operators.push(selectedOperation);
        }
        else {
          operator.css("border-color", "red");
          errors.operators++;
          isValid = false;
        }
      }

      // Check if the operator is division and the number is zero
      if (operator.val() === '5' && number.val() === '0') {
        operator.css("border-color", "red");
        number.css("border-color", "red");
        errors.divZeros++;
        isValid = false;
      }
    });

    if (!isValid) {
      numbers.length = 0;
      resultField.val("Ungültige Eingabe(n)").css({ "border-color": "red", "color": "red" });
    }

    return isValid;
  }

  // Calculate the result based on the input numbers and operators
  function calcResult(numbers, operators) {

    let inputs = [];
    let tmpValue = 0;
    // let numbers = [2, 3, 1, 6, 1, 2];
    // let operators = ['*', '*', '+', '*', '*'];

    inputs.push(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
      inputs.push(operators[i]);
      inputs.push(numbers[i + 1]);
    }

    // at first we calculate the multiplication and division because they have the highest priority
    for (let i = 0; i < operators.length; i++) {

      if (operators[i] === '×') {

        // Calculate the product of the two numbers at the position i and i+1
        tmpValue = numbers[i] * numbers[i + 1];

        // Remove the two numbers and replace them with the product
        numbers.splice(i, 2, tmpValue);

        // Remove the operator at the current position
        operators.splice(i, 1);

        // Decrement the index to check the next operator and number
        i--;
      }
      else if (operators[i] === '÷') {
        tmpValue = numbers[i] / numbers[i + 1];
        numbers.splice(i, 2, tmpValue);
        operators.splice(i, 1);
        i--;
      }
    }

    // second we calculate the addition and subtraction because they have the lowest priority
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

    inputs.push("=");

    // insert opening and closing parentheses for result
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === '÷' || inputs[i] === '×') {
        for (let j = i; j < inputs.length; j += 2) {

          if (inputs[j] !== '÷' && inputs[j] !== '×') {
            // Insert closing parenthesis after the non-operator element
            inputs.splice(j, 0, ")");
            // Insert opening parenthesis before the operator element
            inputs.splice(i - 1, 0, "(");
            // Update i to continue after the current scope of parentheses
            i = j + 2;
            break;
          }
        }
      }
    }

    // Display the result
    resultField.val(inputs.join('') + numbers);
  }
});
