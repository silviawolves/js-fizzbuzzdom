"use strict"

for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0) {
        let fizz = (i % 3 === 0)
        fizz = "Fizz"
        console.log(i, fizz)
    } else if (i % 5 === 0) {
        let buzz = (i % 5 === 0)
        buzz = "Buzz"
        console.log(i, buzz)
    } else if (i % 3 === 0 && i % 5 === 0) {
        let fizzBuzz = (i % 3 === 0) && (i % 5 === 0)
        fizzBuzz = "FizzBuzz"
        console.log(i, fizzBuzz)
    }


}












/*
Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.

MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/