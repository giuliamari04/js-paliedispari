//UTILITY

/**
 * funzione intero random
 *
 * @param {number} min 
 * @param {number} max 
 * @returns --- numero intero random
 * 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * funzione è pari
 *
 * @param {number} 
 * @returns --- booleano true:false
 * 
 */
function isEven(number) {
    return number % 2 === 0;
}

//funzione somma giusto per esercitarsi 
function somma(number1,number2){
    return number1+number2;
}

const btn = document.querySelector('button');

//funzione di controllo col click

/**
 * prendo dati di input
 * controllo dei dati di input
 * creo variabile random del computer con funzione getRndInteger
 * sommo i due numeri con funzione somma 
 * controllo se il totale è pari con funzione isEven
 * stampo risultati in html
 * 
 * 
 */
btn.addEventListener('click', function () {
    const choice = document.getElementById('scelta').value;
    const numero = parseInt(document.getElementById('numero').value)
    const result = document.getElementById('result');

    if (numero < 1 || numero > 5) {
        const resultText = `
        Inserisci un numero da 1 a 5.`;
        result.textContent = resultText;
        console.log('errore dati');
        return;
    } else {

        const numeroComputer = getRndInteger(1, 5);
        console.log('numero utente:'+numero+' e numero pc:'+numeroComputer);
        const totale = somma(numeroComputer,numero);
        console.log('numero somma:'+ totale);
        const isTotalEven = isEven(totale);
        console.log(isTotalEven);

        const resultText = `Il computer ha scelto ${numeroComputer}. La somma dei due numeri è ${totale}, che è ${(isTotalEven ? 'pari' : 'dispari')}.`;
        result.textContent = resultText;

        if ((choice === 'pari' && isTotalEven) || (choice === 'dispari' && !isTotalEven)) {
            result.textContent += ' Hai vinto!';
        } else {
            result.textContent += ' Hai perso!';
        }
    }
});
