// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!

// variabili
var fizzBuzz = "FizzBuzz"
//console.log(fizzBuzz);
var fizz = "Fizz"
//console.log(fizz);
var buzz = "Buzz"
//console.log(buzz);

// ciclo for che genera i numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    //console.log(i);
    //numeri divisibili per 3 e per 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz);
    //numeri divisibili solo per 3
    }else if (i % 3 == 0) {
        console.log(fizz);
    //numeri divisibili solo per 5
    }else if (i % 5 == 0) {
        console.log(buzz);
    // i restanti numeri che non sono divisibili ne per 3 ne per 5
    }else{
        console.log(i)
    }
}
