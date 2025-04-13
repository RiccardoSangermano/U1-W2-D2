/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let number1 = 12
let number2 = 6
if(number1>number2)
  {console.log("il " + number1 + " è maggiore di " + number2)}
else{
  console.log(number1 + " è minore di " + number2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let notEqual= 6
if(notEqual === 5){
  console.log(notEqual + "uguale a 5")
}
else{console.log(notEqual + " è diverso da 5")}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let perfectDivisible = 25

if(perfectDivisible % 5 === 0)
  {
    console.log(perfectDivisible + " è perfettamente divisibile per 5")
  }
  else{
    console.log(perfectDivisible + " non è perfettamente divisibile per 5")
  }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let y1 = 10
let y2 = 2
if (y1 === 8 || y2 === 8 || y1 + y2 === 8 || y1 - y2 === 8 || y2 - y1 === 8) {
  console.log('verificato')
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 45
let dispatch = 10
const scountDispatch = function() {
  if (totalShoppingCart >= 50)
  {console.log("Hai ricevuto uno sconto sulla spedizione")}
  else{
    console.log("Il costo totale è " + (totalShoppingCart + dispatch))
  }
}
scountDispatch()



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 65
totalShoppingCart2 = totalShoppingCart2 * 0.8
let shippingCost2 = 10
let amountToPay2 = totalShoppingCart2

if (totalShoppingCart2 < 50) {
  amountToPay2 += shippingCost2
}

console.log('Totale da pagare:', amountToPay2)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let first = 8
let second = 12
let third = 6
if(8 > 12 && 6){
  console.log("L'ordine è " + first + second + third)
}
else if(12 > 8 && 6) {
  console.log("L'ordine è " + second + first + third)
}
else{
  console.log("L'ordine è " + third + first + second)
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let maybyString = 44
const isAString = function(maybyString) {
  if(typeof maybyString === "number") {
    return true
  }
  else{
    return false
  }

}
console.log(isAString(maybyString))


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let pariDispari = 5
const numero =function(){
  if( pariDispari % 2 ===0 ){
    return "pari"
  }
  else{
    return "dispari"
  }
}
console.log(numero())


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/
   let val =7 
   if ( val < 5) {
    console.log("Meno di 5")
   }
   else if ( val < 10) {
    console.log("Meno di 10")
   }
   else{
    console.log("Uguale a 10 o maggiore")
   }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'Riccardo',
  lastName: 'Sangermano',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Roma'
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100
console.log(myArray)


