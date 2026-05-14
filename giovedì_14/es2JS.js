let valore = 10; //number rappresenta valori numerici interi e decimali
valore = "ciao"; //ora è una stringa (testo)
valore ="true"; //ora è un booleano (vero o falso)

let x; //undefined cioè non ha un valore assegnato
let y = null //null cioè non ha un valore, è intenzionalmente vuoto

let id = Symbol("id"); //symbol è un identificatore univoco
let grande = 9007199254740991n; //bigint rappresenta numeri interi molto grandi

const PI = 3.14; //const è una costante, non può essere riassegnata
// PI= 3.1415; //errore, non si può riassegnare una costante

const numeri = [1, 2, 3]; //array è una collezione ordinata di valori
numeri.push(4); //posso farlo perchè non sto modificando l'array ma solo aggiungendo un elemento

let globale = "visibile ovunque"; //variabile globale

if (true) {
    let locale = "visibile solo qui"; //variabile locale visibile solo nel blocco delle parentesi
    console.log(globale); //funziona
    console.log(locale); //funziona
}
//console.log(locale); //errore

//console.log(a); // errore: non è accessibile prima della dichiarazione. QUINDI PRIMA DICHIARO POI STAMPO
let a = 10;

// Con var (comportamento diverso). SOLO CON VAR è DIVERSO, STAMPA UNDEFINED SE NON DICHIARATO
console.log(b); // undefined non errore
var b = 20;

//OPERATORI
let a = 10;
let b = 5;

//operatori aritmetici
let somma = a + b;
let differenza = a - b;
let prodotto= a * b;
let divisione = a / b;

//operatori di confronto
let uguale = (a == "10")
let strettamenteUguale = (a==="10")
let maggiore = (a>b)

//operatori logici
let condizione = (a > 5 && b < 10)
let alternativa = (a < 5  b < 1)
let negazione = !(a > b)

//operatori di assegnazione
let x = 10;
x += 5; // x= x+5 -- 15

