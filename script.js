/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// funkcja tworząca tablicę liczb z podanego zakresu <a,...b) 
// lub <a,...b) - jeśli wartośś step uniemozliwia osiągnięcie wartości b to zakres 
// kończy się na maksymalnej liczbie mniejszej od b.

// Parametry funcji range:
// start - początek zakresu od którego ma powstać tworzenie tablicy
// end - koniec zakresu liczb
// step - krok inkrementacji. 
function range(start, end, step) {

  var numberList = [start];         // ustalamy pierwszy element tablicy liczb
  if (step == undefined) {          // jeśli nie zostanie podany argument step,
    step = 1;                       // ustalamy jego wartośc na równą 1.
  }

// budujemy tablicę poprzez cykliczne dodawanie
// wartości kroku (step) do początku zakresu (start)
  for (var i = 1; ;i++) {
    var number = start + i * step;
    if (number > end) {
      break;
    }
    numberList.push(number);
  }

  return numberList;              // zwracamy tablicę numberList

 }                                // end of function range    
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// funkcja sumująca liczby wchodzące w skład tablicy

// Parametry funkcji sum:
// array - tablica liczb [a, b,...,f]
function sum(array) {

  var result = 0                            // ustalamy wartośc początkową rezultatu sumowania     
  for(var i = 0; i < array.length; i++) {   // sumujemy po wszystkich elementach tablicy
    result += array[i];
  }

  return result;                            // zwracamy rezultat sumowania

}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


// Wyświetlamy rezultat działania programu w konsoli
console.log("Oto tablica liczb które będziemy dodawać: " + "\n" + "[" + range(34,50,2) + "]" +
            "\n" + "Oto suma powyższego zakresu liczb: " + sum(range(34,50,2)));

