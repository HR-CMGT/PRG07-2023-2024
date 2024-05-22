# Mini-case les 3: Apps maken

Deze les maak je je eerste apps. Hiermee oefen je met basistechnieken om een mobile
app te maken in Expo/React Native.

## Installatie

Als het goed is heb je alle vereisten al om met Expo te werken.

Maak je eerste project aan door het volgende commando uit te voeren:

```npx create-expo-app newproject --template blank```

En daarna te bekijken met de Expo Go app op je telefoon, door in het project het volgende uit te voeren:

```npm run start```

**Let op!** Je telefoon moet verbonden zijn met hetzelfde netwerk als je computer.

## Opdracht 1: Teller app

Maak een app waarmee je mensen kunt tellen die ergens in en uit lopen (bijvoorbeeld omdat er maar
maximaal 100 mensen tegelijk aanwezig mogen zijn van de brandweer).

* Je hebt de knoppen +1, -1, en reset
* De teller mag nooit kleiner dan 0 worden
* Toon een alert als iemand probeert de teller kleiner dan 0 te maken
* Zorg dat de app er netjes uitzien

Gebruik ```console.log``` om de flow van je app te debuggen.

> Klaar? Lukt het je ook om een progressbar van 0-100 toe te voegen?

Nuttige links: [Text](https://reactnative.dev/docs/text), [Button](https://reactnative.dev/docs/button),
[useState](https://react.dev/reference/react/useState), [style](https://reactnative.dev/docs/style),
[alert](https://reactnative.dev/docs/alert), [Progress](https://www.npmjs.com/package/react-native-progress)

## Opdracht 2: Random quote app

Maak een app om een willekeurige quote (inspirerend, grappig,... [bedenk zelf maar](https://www.google.nl/search?q=Quote+API&sa=X&ved=2ahUKEwjVucXDn9f3AhVhIMUKHTgYBUsQ1QJ6BAgyEAE)) op te vragen.

* Er is alleen een refresh-knop (gebruik hiervoor geen Button component)
* Zorg dat de app er netjes uitzien

Nuttige links: [Pressable](https://reactnative.dev/docs/pressable),
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
