# Mini-case les 2: Schrijf je eigen useState functie

Je gaat aan de slag om je eigen useState functie te schrijven. Door
hiermee aan de slag te gaan leer je hoe een framework bepaalde zaken op
de achtergrond probeert op te lossen.

useState in React brengt best wat complexiteit met zich mee. Om je eerst
een basisversie te laten maken, is het volgende stukje code gegeven hoe
de useState in eerste instantie moet werken.

## Opdracht 1
```javascript
const [year, setYear] = useState(2007);
const [favorites, setFavorites] = useState(['Programming', 'Board Games']);
console.log(year()); //2007
console.log(favorites()); //['Programming', 'Board Games']

setYear(2020);
console.log(year()); //2020

setFavorites(['Programming', 'Board Games', 'Tennis']);
console.log(favorites()); //['Programming', 'Board Games', 'Tennis']
```

Maak een eigen useState functie die ervoor zorgt dat bovenstaande code
goed werkt. Het grote verschil met de echte useState is dat het aanroepen
van de waarde nu gebeurt als functie (`year()` IPV in React `year`, dus
denk goed na over wat useState moet returnen).

## Opdracht 2

```javascript
const [year, setYear] = useState(2007);
const [favorites, setFavorites] = useState(['Programming', 'Board Games']);
console.log(year()); //2007
console.log(favorites()); //['Programming', 'Board Games']

setYear((oldYear) => oldYear + 1);
console.log(year()); //2008

setFavorites((oldFavorites) => {
  oldFavorites.push('Tennis');
  oldFavorites.push('Listen music');
  return oldFavorites;
});
console.log(favorites()); //['Programming', 'Board Games', 'Tennis', 'Listen music']
```

Zorg er nu voor dat bovenstaande ook werkt. Dit houdt in dat de waarde die
meegegeven wordt aan de set functie zelf ook een functie kan zijn. Die functie
moet als parameter de huidige waarde meekrijgen zodat die aangepast kan worden.

## Opdracht 3

Als opdracht 1 en 2 zijn gelukt heb je in essentie een mooi stukje code ontwikkeld!
Je hebt het voor elkaar gekregen via een eigen useState functie waardes in een 'set'
functie aan te passen, en deze in een 'get' functie weer op te halen.

Om helemaal te voldoen aan de React notatie heb je nu de uitdaging om de waardes ook
werkend te krijgen als je `year` en `favorites` aanroept als variable IPV als functie.
