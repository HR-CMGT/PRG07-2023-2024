/**
 * Startcode mini-case 2: Bouw je eigen useState() functie
 */

const [counter, setCounter] = useState(0);

//Opdracht 1 is een waarde meegeven om te updaten
setCounter(10);
//Counter als functie ipv variabele is (iets) makkelijker
console.log(counter());

//Opdracht 2 is dat je een functie meegeeft om te updaten
setCounter((oldCounter) => oldCounter + 1);
//In dit geval zou de waarde nu dus 11 moeten zijn
console.log(counter());

//Opdracht 3: Als dit is gelukt ga je naar de laatste fase
//Hierin wil je counter als variabele aanroepen i.p.v. als functie
console.log(counter);
