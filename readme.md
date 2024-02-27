# Readme
## Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

### Steps
- Creo una costante e le assegno come valore la parola inserita dall'utente
- Verifico se la parola è palindroma o no
  - Utilizzo array.reverse() per invertire l'ordine delle lettere nella parola
  - Confronto l'output con la parola iniziale 
    - SE le due parole sono uguali 
      - La parola è palindroma
- Comunico all'utente se la parola è palindroma o no

### Tools
- Variabili e costanti
- prompt()
- array.reverse()
- If/else
- console.log()/alert()

***

## Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

### Steps
- Creo una costante e le assegno come valore la scelta dell'utente (fra pari e dispari)
- Creo una costante e le assegno come valore il numero inserito dall'utente (da 1 a 5)
- Creo una costante e le assegno come valore un numero random fra 1 e 5
- Sommo i due numeri 
- Verifico se la somma dei due numeri è pari o dispari con una funzione che mi restituisce "Pari" o "Dispari"
  - SE la scelta dell'utente e il risultato della funzione coincidono
    - Comunico all'utente che ha vinto
  - ALTRIMENTI 
    - Comunico all'utente che ha perso

### Tools
- Variabili e costanti
- prompt()
- Math.floor()
- Math.random()
- operatore modulo (%)
- If/else
