/**funzione parola palindroma
 * separa lettere parola
 * gira letter al contrario
 * le riunisce
 * restituisce confronto che input è uguale a parola al contrario
 *  */
function isPalindroma(parola) {
    const parolareverse = parola.split('').reverse().join('');
    console.log(parolareverse);
    return parola === parolareverse;
    
}

/**funzione di controllo al click
 * prende dati input 
 * usa funzione isPalindroma per verificare se l'uguaglianza di return è vera o falsa
 */
const btn = document.querySelector('.button');

btn.addEventListener('click',function() {
    const parolaInput = document.getElementById('Input');
    const result = document.getElementById('result');
    const parola = parolaInput.value;

    if (isPalindroma(parola)) {
        console.log(parola);
        result.textContent = `La parola "${parola}" è palindroma!`;
    } else {
        console.log(parola);
        result.textContent = `La parola "${parola}" non è palindroma.`;
    }
});