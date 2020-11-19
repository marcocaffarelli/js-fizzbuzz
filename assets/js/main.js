// variabili
var fizzBuzz, fizz, buzz, i, listaNumeri;

//fibbuz, fizz, buzz;
fizzBuzz = "FizzBuzz";
//console.log(fizzBuzz);
fizz = "Fizz";
//console.log(fizz);
buzz = "Buzz";
//console.log(buzz);

// ciclo for che genera i numeri da 1 a 100
for (i = 1; i < 101; i++) {
    listaNumeri = document.getElementById("lista_numeri").innerHTML;
    //console.log(i);
    //numeri divisibili per 3 e per 5
    if (i % 3 == 0 && i % 5 == 0) {
        //console.log(fizzBuzz);
        document.getElementById("lista_numeri").innerHTML = listaNumeri + "<li>" + fizzBuzz + "</li>";
    //numeri divisibili solo per 3
    }else if (i % 3 == 0) {
        //console.log(fizz);
        document.getElementById("lista_numeri").innerHTML = listaNumeri + "<li>" + fizz + "</li>";
    //numeri divisibili solo per 5
    }else if (i % 5 == 0) {
        //console.log(buzz);
        document.getElementById("lista_numeri").innerHTML = listaNumeri + "<li>" + buzz + "</li>";
    // i restanti numeri che non sono divisibili ne per 3 ne per 5
    }else{
        //console.log(i)
        document.getElementById("lista_numeri").innerHTML = listaNumeri + "<li>" + i + "</li>";
    }
    
};
