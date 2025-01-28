🟥 Entwickle einen Taschenrechner auf einer HTML-Seite. 🟥


# 1) Erstelle eine HTML-Seite:
> * `zwei Eingabefeldern für Zahlen`
> * einem Auswahlfeld für die `Rechenoperation` (+,-,*,/)
> * einem `Button für die Berechnung des Ergebnisses`
> * Gib das `Ergebnis auf der Webseite` aus. Nutze dazu JavaScript.


## Relevante Begriffe

**HTML**
- HyperText Markup Language
- wird verwendet, um Dokumente zu erstellen und Informationen im Web zu strukturieren
- HTML-Elemente teilen dem Browser mit, wie der Inhalt (Texte, Bilder, Links, Listen und Formulare) angezeigt werden soll
- Ein HTML-Element wird durch ein Start-Tag, einige Inhalte und ein End-Tag definiert: `<h1>My First Heading</h1>`
- https://www.w3schools.com/html/html_intro.asp

**Ereignisse**

HTML und JavaScript werden Ereignisse verwendet, um auf Benutzeraktionen wie Mausklicks, Tastatureingaben oder das Laden einer Seite zu reagieren. Hier sind einige gängige Ereignisse:

HTML
  - `onchange`: An HTML element has been changed
  - `onclick`: The user clicks an HTML element
  - `onmouseover`: The user moves the mouse over an HTML element
  - `onmouseout`: The user moves the mouse away from an HTML element
  - `onkeydown`: The user pushes a keyboard key
  - `onload`: The browser has finished loading the page
  - https://www.w3schools.com/js/js_events.asp

jQuery
  - `.click()`, `.dblclick()`, `.hover()` ...
  - https://api.jquery.com/category/events/

In HTML onclick is the event listener, myFunction is the event handler:
```HTML
<button onclick="myFunction()">Click me</button>
```

In JavaScript click is the event, myFunction is the event handler:
```Javascript
document.getElementById("myButton").addEventListener("click", myFunction);
```

In jQuery click is the event, function () is the event handler:
```Javascript
$("#add-row").("click", function () { ... });
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

# 2) Nutze jQuery und passe Schritt 1 an:
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

# 3) Erweitere Schritt 2:
> * die Eingabefelder für die Zahlen in einer Tabellenzeile stehen
> * erstelle einen Button, mit dem weitere Zeilen + Eingabefeld zu der Tabelle hinzugefügt werden können
> * Passe die Berechnung des Ergebnisses so an, dass beliebig viele Eingabefelder mit der ausgewählten Rechenoperation berechnet werden, nutze dazu jQuery Selektoren.


## Punktrechnung vor Strichrechnung

### HOW-TO

-	Eingabe: Zwei Listen (numbers und operators).
Schleifendurchläufe
-	Berechnet das Ergebnis einer Folge von Zahlen und Operatoren.

`1.	Erster Durchlauf: Multiplikation und Division`

-	Durchlaufe operators und suche nach * oder /
-	Multipliziere oder dividiere die entsprechenden Zahlen in numbers
-	Ersetze die beiden Zahlen durch das Ergebnis der Operation
-	Entferne den verwendeten Operator aus operators
- setze Zählvariable `i` um eins (`i--`) zurück, sonst wird der nächste Wert wegen `i++` in den Listen übersprungen

`2.	Zweiter Durchlauf: Addition und Subtraktion`

-	Durchlaufe operators erneut, diesmal für + oder -
-	Addiere oder subtrahiere die entsprechenden Zahlen in numbers
-	Ersetze die beiden Zahlen durch das Ergebnis der Operation
-	Entferne den verwendeten Operator aus operators
- setze Zählvariable `i` um eins (`i--`) zurück, sonst wird der nächste Wert wegen `i++` in den Listen übersprungen

### JS-Code

```Javascript
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
```

## Werte abrufen und setzen
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

## Veraltete Methode

```Javascript
$("#element").click(function() {
  // Event-Handler
});
```
This page describes the click event. For the deprecated .click() method, see .click().
https://api.jquery.com/click/

## Moderne Methode mit on

```Javascript
$("#element").on("click", function() {
  // Event-Handler
});
```

Ein Vorteil von on ist, dass du damit mehrere Ereignisse in einem einzigen Aufruf behandeln kannst:

```Javascript
$("#element").on("click mouseenter", function() {
  // Event-Handler für Klick und Mauszeiger
});
```
