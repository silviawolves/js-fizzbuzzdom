"use strict"

//creo il conteggio di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i)

    //creo le condizioni e variabili che sostituiscono i multipli di 3 || 5
    // i multipli di tre && 5
    // se non ci sono multipli
    if ((i % 3 === 0) && (i % 5 === 0)) {
        let fizzBuzz = ((i % 3 === 0) && (i % 5 === 0))
        fizzBuzz = "FizzBuzz"
        console.log(fizzBuzz)
        const multiploDoppio = document.querySelector(".row")
        multiploDoppio.innerHTML += `  <div class="col">
                                            <div class="square square-fizzbuzz">
                                                ${fizzBuzz}
                                            </div>
                                        </div>  `
        
    } else if (i % 3 === 0) { 
        let fizz = (i % 3 === 0)
        fizz = "Fizz"
        console.log(fizz)
        const multiploTre = document.querySelector(".row")
        multiploTre.innerHTML += `  <div class="col">
                                        <div class="square square-fizz">
                                            ${fizz}
                                        </div>
                                    </div>  `
    } else if (i % 5 === 0) {
        let buzz = (i % 5 === 0)
        buzz = "Buzz"
        console.log(buzz)
        const multiploCinque = document.querySelector(".row")
        multiploCinque.innerHTML +=  `  <div class="col">
                                            <div class="square square-buzz">
                                                ${buzz}
                                            </div>
                                        </div>  `
    } else {
        const centoNumeri = document.querySelector(".row")
        centoNumeri.innerHTML += `  <div class="col">
                                        <div class="square square-numero">
                                            ${i}
                                        </div>
                                    </div>  `
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