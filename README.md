🟥 Entwickle einen Taschenrechner auf einer HTML-Seite. 🟥


# 1) Erstelle eine HTML-Seite mit:
> * `zwei Eingabefeldern für Zahlen`
> * einem Auswahlfeld für die `Rechenoperation` (+,-,*,/)
> * einem `Button für die Berechnung des Ergebnisses`
> * Gib das `Ergebnis auf der Webseite` aus. Nutze dazu JavaScript.

```HTML
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rechner</title>
    <script>
        function berechne() {
            var zahl1 = parseFloat(document.getElementById('zahl1').value);
            var zahl2 = parseFloat(document.getElementById('zahl2').value);
            var operation = document.getElementById('operation').value;
            var ergebnis;

            if (isNaN(zahl1) || isNaN(zahl2)) {
                ergebnis = 'Bitte geben Sie gültige Zahlen ein.';
            } else {
                switch(operation) {
                    case '+':
                        ergebnis = zahl1 + zahl2;
                        break;
                    case '-':
                        ergebnis = zahl1 - zahl2;
                        break;
                    case '*':
                        ergebnis = zahl1 * zahl2;
                        break;
                    case '/':
                        ergebnis = zahl1 / zahl2;
                        break;
                    default:
                        ergebnis = 'Ungültige Operation';
                }
            }
            document.getElementById('ergebnis').innerText = 'Ergebnis: ' + ergebnis;
        }
    </script>
</head>
<body>
    <h1>Einfacher Rechner</h1>
    <label for="zahl1">Zahl 1:</label>
    <input type="text" id="zahl1"><br><br>
    <label for="zahl2">Zahl 2:</label>
    <input type="text" id="zahl2"><br><br>
    <label for="operation">Operation:</label>
    <select id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select><br><br>
    <button onclick="berechne()">Berechnen</button>
    <p id="ergebnis"></p>
</body>
</html>
```



## Relevante Begriffe

**HTML**
- HyperText Markup Language
- wird verwendet, um Dokumente zu erstellen und Informationen im Web zu strukturieren
- besteht aus einer Reihe von Elementen, die verwendet werden, um verschiedene Teile eines Dokuments wie Texte, Bilder, Links, Listen und Formulare darzustellen/formatieren

**Ereignisse**
- HTML und JavaScript werden Ereignisse verwendet, um auf Benutzeraktionen wie Mausklicks, Tastatureingaben oder das Laden einer Seite zu reagieren. Hier sind einige gängige Ereignisse:
  - `onchange`: An HTML element has been changed
  - `onclick`: The user clicks an HTML element
  - `onmouseover`: The user moves the mouse over an HTML element
  - `onmouseout`: The user moves the mouse away from an HTML element
  - `onkeydown`: The user pushes a keyboard key
  - `onload`: The browser has finished loading the page
  - weiteres: https://www.w3schools.com/js/js_events.asp

In HTML onclick is the event listener, myFunction is the event handler:
```HTML
<button onclick="myFunction()">Click me</button>
```

In JavaScript click is the event, myFunction is the event handler:
```Javascript
button.addEventListener("click", myFunction);
```

**DocumentObjectModel (DOM)**
  - The DOM is a W3C (World Wide Web Consortium) standard
  - The HTML DOM model is constructed as a tree of Objects:
  ![The HTML DOM Tree of Objects](https://www.w3schools.com/js/pic_htmltree.gif)
  - The HTML DOM is a standard for how to get, change, add, or delete HTML elements
  - With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
  - weiteres: https://www.w3schools.com/js/js_htmldom.asp

**JavaScript**
  - JavaScript ist eine Programmiersprache, die direkt im Browser ausgeführt wird (clientseitig)
  - Mit JavaScript können Inhalte auf einer Webseite dynamisch verändert werden
  - Die Darstellung von Inhalten kann sich je nach Benutzeraktionen ändern
  - Formulare sind ein Beispiel, bei dem JavaScript sofort auf fehlende oder falsche Nutzereingaben reagiert

***

# 2) Nutze jQuery und passe Schritt 1 an, sodass:
> * das „Click“ Ereignis über jQuery angebunden wird
> * das Auslesen der Werte über jQuery realisiert ist
> *  die Ausgabe des Ergebnisses per jQuery realisiert ist
> * Prüfe die Eingabewerte, ob es sich wirklich um Zahlen handelt und weise den Benutzer darauf hin, wenn dies nicht so ist

## Relevante Begriffe

**Framework vs. Bibliothek**
  - um die Entwicklung von Webanwendungen zu vereinfachen und zu beschleunigen
  - Die Hauptziele dieser Frameworks sind Wiederverwendung von wiederkehrenden Codeschnipseln, Skalierbarkeit und vor allem die Reduzierung von Fehlern und Bugs
  - `Frameworks`: Bieten eine feste Struktur und übernehmen die Kontrolle über den Ablauf der Anwendung
    - Struktur und Kontrolle: Ein Framework bietet eine umfassende Struktur und gibt den Rahmen vor, in dem Entwickler arbeiten. Es legt fest, wie der Code organisiert und strukturiert sein soll.
    - Inversion of Control: Bei einem Framework ruft das Framework den Code des Entwicklers auf. Das bedeutet, dass das Framework die Kontrolle über den Ablauf der Anwendung hat und der Entwickler sich an die Vorgaben des Frameworks halten muss.
    - Beispiele: React.js, Angular, Vue.js ..
  - `Bibliotheken`: Bieten flexible Werkzeuge und lassen dem Entwickler die Kontrolle über den Ablauf der Anwendung
    - Funktionale Unterstützung: Eine Bibliothek ist eine Sammlung von Funktionen und Methoden, die Entwickler bei spezifischen Aufgaben unterstützen. Sie bietet keine umfassende Struktur, sondern stellt einzelne Werkzeuge zur Verfügung, die bei Bedarf verwendet werden können
    - Direct Control: Bei einer Bibliothek ruft der Entwickler die Bibliothek auf. Der Entwickler hat die Kontrolle über den Ablauf der Anwendung und entscheidet, wann und wie die Bibliothek verwendet wird.
    - Beispiele: jQuery, Lodash, D3.js.

**jQuery Selektoren**
  - HTML-Elemente auswählen und bearbeiten
  - Verwendung von Namen, IDs, Klassen, Typen, Attributen und Attributwerten zur Auswahl von HTML-Elementen
  - Grundlegende CSS-Selektoren
    - ID-Selektor: $("#header") wählt das Element mit der ID "header" aus
    - Element-Selektor: $("p") wählt alle p-Elemente aus
  - Positionsselektoren
    - Erstes Kind-Selektor: $("ul li:first-child") wählt das erste li-Element in jedem ul aus
    - Letztes Kind-Selektor: $("ul li:last-child") wählt das letzte li-Element in jedem ul aus
  - Benutzerdefinierte jQuery-Selektoren
    - $("p:contains(coffee)") wählt alle p-Elemente aus, die den Text coffee enthalten
    - $(":text:disabled") wählt alle Textfelder aus, die deaktiviert sind
  - weiteres: https://www.w3schools.com/jquery/jquery_ref_selectors.asp

**Zusammenhang zwischen DOM und jQuery Selektoren**
  - `Durchsuchen und Auswählen`: jQuery-Selektoren durchlaufen das DOM, um bestimmte Elemente auszuwählen. Diese Selektoren dienen als Filter, um die gewünschten Knoten im DOM zu identifizieren
  - `Manipulation`: Sobald die gewünschten Elemente mit jQuery-Selektoren ausgewählt sind, können Entwickler verschiedene Methoden verwenden, um diese Elemente zu manipulieren (z. B. Inhalte ändern, CSS-Stile anwenden, Ereignisse hinzufügen)
  - `Interaktivität`: jQuery erleichtert die Erstellung interaktiver Webanwendungen, indem es Entwicklern ermöglicht, DOM-Elemente einfach zu ändern und mit ihnen zu interagieren.

Insgesamt erleichtern jQuery-Selektoren das Arbeiten mit dem DOM erheblich und bieten eine benutzerfreundliche Möglichkeit, auf Elemente zuzugreifen und diese zu manipulieren.

***

# 3) Erweitere Schritt 2, sodass:
> * die Eingabefelder für die Zahlen in einer Tabellenzeile stehen
> * erstelle einen Button, mit dem weitere Zeilen + Eingabefeld zu der Tabelle hinzugefügt werden können
> * Passe die Berechnung des Ergebnisses so an, dass beliebig viele Eingabefelder mit der ausgewählten Rechenoperation berechnet werden, nutze dazu jQuery Selektoren.

`JS-Code`
```Javascript

// The "use strict" directive was new in ECMAScript version 5
// Verbietet Duplikate
// write cleaner code, like preventing you from using undeclared variables
// Strict mode changes previously accepted "bad syntax" into real errors
// => robusterer JavaScript-Code
"use strict";

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
        <td><input type="text" class="form-control" id="result-${rowCount}" value="" disabled placeholder="..."/></td>
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
```


.text(): Diese Methode wird verwendet, um den Textinhalt eines Elements zu bekommen oder zu setzen.

```Javascript
// Textinhalt eines Elements mit der ID "myElement" abrufen
const text = $('#myElement').text();
console.log(text);

// Textinhalt eines Elements mit der ID "myElement" setzen
$('#myElement').text('Neuer Textinhalt');
```

.val(): Diese Methode wird verwendet, um den Wert eines Formularfeldes (wie z.B. eines Eingabefeldes) zu bekommen oder zu setzen.

```Javascript
// Wert eines Eingabefeldes mit der ID "inputField" abrufen
const value = $('#inputField').val();
console.log(value);

// Wert eines Eingabefeldes mit der ID "inputField" setzen
$('#inputField').val('Neuer Wert');
```

.css(): Diese Methode wird verwendet, um CSS-Eigenschaften eines Elements zu bekommen oder zu setzen.
```Javascript
// CSS-Eigenschaft "color" eines Elements mit der ID "myElement" abrufen
const color = $('#myElement').css('color');
console.log(color);

// CSS-Eigenschaft "color" eines Elements mit der ID "myElement" setzen
$('#myElement').css('color', 'blue');
```

***

