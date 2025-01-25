// The "use strict" directive was new in ECMAScript version 5
// Verbietet Duplikate
// write cleaner code, like preventing you from using undeclared variables
// Strict mode changes previously accepted "bad syntax" into real errors
// => robusterer JavaScript-Code
"use strict";

// $(document).ready(..) ist aus jQuery und stellt sicher, das der nachfolgende JS-Code erst ausgeführt wird, nachdem die gesamte HTML-Seite geladen wurde
$(document).ready(function () {
  let rowCount = 0;

  const addRowBtn = $("#add-row");
  const deleteRowBtn = $("#delete-row");
  const tableBody = $("#data-table tbody");

  addRowBtn.addClass("btn btn-success button-custom");
  deleteRowBtn.addClass("btn btn-danger button-custom");

  addRowBtn.click(function () {
    rowCount++;

    const row = $(`
      <tr>
        <th scope="row">${rowCount}</th>
        <td><input type="text" class="form-control" id="firstNumber-${rowCount}" value="" placeholder="Zahl 1"/></td>
        <td>
          <select id="selectedOperation-${rowCount}" class="form-select" aria-label="Operator">
            <option value="1" selected="selected">Bitte wählen</option>
            <option value="2">+</option>
            <option value="3">-</option>
            <option value="4">*</option>
            <option value="5">/</option>
          </select>
        </td>
        <td><input type="text" class="form-control" id="secondNumber-${rowCount}" value="" placeholder="Zahl 2"/></td>
        <td><button id="calcResult-${rowCount}" class="btn btn-outline-primary calcResultBtn" data-row="${rowCount}">=</button></td>
        <td><input type="text" class="form-control" id="result-${rowCount}" value="" readonly placeholder="..."/></td>
      </tr>
    `);

    tableBody.append(row);
  });

  deleteRowBtn.click(function () {
    $("#data-table tbody tr:last").remove();
  });

  // Event-Handler: tableBody.on("click", ".calcResultBtn", function () { ... }); bedeutet, dass ein Klick-Ereignis an alle Elemente innerhalb von tableBody delegiert wird, die die Klasse .calcResultBtn besitzen. Das bedeutet, dass der Event-Handler ausgelöst wird, wenn ein Klick auf ein Element mit der Klasse .calcResultBtn erfolgt
  // Daten abrufen: Innerhalb der Funktion function () { ... } wird $(this).data("row") verwendet, um den Wert des data-row-Attributs des angeklickten Elements abzurufen. Das data-row-Attribut enthält in diesem Fall die Zeilennummer.
  // Funktion aufrufen: calcResult(rowNumber); ruft die Funktion calcResult auf und übergibt die abgerufene Zeilennummer als Argument.
  tableBody.on("click", ".calcResultBtn", function () {
    const rowNumber = $(this).data("row");
    calcResult(rowNumber);
  });

  function calcResult(rowNumber) {
    const firstNumber = $(`#firstNumber-${rowNumber}`).val();
    const secondNumber = $(`#secondNumber-${rowNumber}`).val();
    const operation = $(`#selectedOperation-${rowNumber}`).val();
    const resultField = $(`#result-${rowNumber}`);

    // jQuery-Funktion isNumeric, standardmäßig nicht in js
    // Alternative-Fkt. zu isNumeric sind:
    // isNaN prüft, ob der Wert NaN (not a number) ist.
    // isFinite stellt sicher, dass der Wert eine endliche Zahl ist.
    if ($.isNumeric(firstNumber) && $.isNumeric(secondNumber)) {
      let result;
      switch (operation) {
        case '2':
          result = parseFloat(firstNumber) + parseFloat(secondNumber); // Addition
          break;
        case '3':
          result = parseFloat(firstNumber) - parseFloat(secondNumber); // Subtraktion
          break;
        case '4':
          result = parseFloat(firstNumber) * parseFloat(secondNumber); // Multiplikation
          break;
        case '5':
          result = parseFloat(firstNumber) / parseFloat(secondNumber); // Division
          break;
        default:
          result = "Operation wählen"; // Standardnachricht
      }

      resultField.css("background-color", "");
      $(`#result-${rowNumber}`).val(result); // Setzt das Ergebnis
    } else {
      resultField.css("background-color", "red");
      $(`#result-${rowNumber}`).val("Ungültige Eingabe"); // Fehlermeldung
    }
  }
});