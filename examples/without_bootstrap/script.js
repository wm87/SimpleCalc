"use strict";

$(document).ready(function () {
  let rowCount = 0;

  $("#add-row").css({
    "background-color": "green",
    "width": "100px",
    "color": "white",
    "border-radius": "5px"
  });

  $("#delete-row").css({
    "background-color": "red",
    "width": "100px",
    "color": "white",
    "border-radius": "5px"
  });

  $("#add-row").click(function () {
    const tableBody = document.querySelector("#data-table tbody");
    const row = document.createElement("tr");
    rowCount++;

    row.innerHTML = `
      <td>
        <input type="text" name="fN" id="firstNumber-${rowCount}" value="" placeholder="Zahl 1 eingeben"/>
      </td>
      
      <td>
        <select id="iterOperation-${rowCount}">
          <option value="1" selected="selected">Bitte wählen</option>
          <option value="2">+</option>
          <option value="3">-</option>
          <option value="4">*</option>
          <option value="5">/</option>
        </select>
      </td>

      <td>
        <input type="text" name="sN" id="secondNumber-${rowCount}" value="" placeholder="Zahl 2 eingeben"/>
      </td>
      
      <td> <button id="calcResult-${rowCount}" onclick="calcResult(${rowCount})">=</button> </td>

      <td>
        <input type="text" name="Res" id="result-${rowCount}" value="" placeholder="wird berechnet"/>
      </td>
    `;

    tableBody.appendChild(row);
  });

  $("#delete-row").click(function () {
    const tableBody = document.querySelector("#data-table tbody");
    const lastRow = tableBody.lastElementChild;

    if (lastRow) {
      tableBody.removeChild(lastRow);
    }
  });
});

function calcResult(rowNumber) {
  const firstNumber = $(`#firstNumber-${rowNumber}`).val();
  const secondNumber = $(`#secondNumber-${rowNumber}`).val();
  const operation = $(`#iterOperation-${rowNumber}`).val();

  if ($.isNumeric(firstNumber) && $.isNumeric(secondNumber)) {
    let result;
    switch (operation) {
      case '2':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '3':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '4':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '5':
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        result = "Operation wählen";
    }
    $(`#result-${rowNumber}`).val(result);
  } else {
    $(`#result-${rowNumber}`).val("Ungültige Eingabe");
  }
}
