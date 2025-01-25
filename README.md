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

// $(document).ready(..) ist aus jQuery und stellt sicher, das der nachfolgende JS-Code erst ausgeführt wird, nachdem die gesamte HTML-Seite geladen wurde
$(document).ready(function () {
  let rowCount = 2;

  const clearBtn = $("#clear-rows");
  const calcBtn = $("#calcResult");
  const addRowBtn = $("#add-row");
  const deleteRowBtn = $("#delete-row");
  let tableBody = $("#data-table tbody");
  let resultField = $("#result");

  addRowBtn.click(function () {
    rowCount++;

    const row = $(`
      <tr>
        <th scope="row">${rowCount}</th>
        <td><input type="text" class="form-control" id="number-${rowCount}" value="" placeholder="Zahl ${rowCount}"/></td>
      </tr>
    `);

    tableBody.append(row);
  });

  deleteRowBtn.click(function () {
    let rows = $("#data-table tbody tr");
    if (rows.length > 2) {
      rows.last().remove();
    }
  });

  clearBtn.click(function () {

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

  calcBtn.click(function () {

    resultField.css("background-color", "");

    let values = [];

    if (checkValues(values)) {
      console.log("Values are valid");
      calcResult(values);
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
        values.length = 0;
        isValid = false;
      }
    });

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

