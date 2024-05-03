# Mini-case week 3: Apps maken

Deze week maak je je eerste apps. Hiermee oefen je met basistechnieken om een mobile
app te maken in Expo/React Native.

## Installatie

Installeer voor je begint eerst [Expo](https://docs.expo.dev/get-started/installation/).
Het programma *Watchman* dat voorgeschreven wordt voor MacOS, lijkt niet noodzakelijk.

Test je installatie door een eerste project aan te maken:

```npx create-expo-app my-app```

En daarna te bekijken met de Expo Go app, op je telefoon:

```npx expo start```

**Let op!** Je telefoon moet verbonden zijn met hetzelfde netwerk als je computer.

## Opdracht 1: Teller app

Maak een app waarmee je mensen kunt tellen die ergens in en uit lopen (bijvoorbeeld omdat er maar
maximaal 100 mensen tegelijk aanwezig mogen zijn van de brandweer).

* Je hebt de knoppen +1, -1, en reset
* De teller mag nooit kleiner dan 0 worden
* Toon een alert als iemand probeert de teller kleiner dan 0 te maken
* Zorg dat de app er netjes uitzien

Gebruik ```console.log``` om de flow van je app te debuggen.

Extra: Lukt het ook om een progressbar van 0-100 toe te voegen?

Nuttige links: [Text](https://reactnative.dev/docs/text), [Button](https://reactnative.dev/docs/button),
[useState](https://react.dev/reference/react/useState), [style](https://reactnative.dev/docs/style),
[alert](https://reactnative.dev/docs/alert)

## Opdracht 2: Random quote app

Maak een app om een willekeurige quote (inspirerend, grappig,... [bedenk zelf maar](https://www.google.nl/search?q=Quote+API&sa=X&ved=2ahUKEwjVucXDn9f3AhVhIMUKHTgYBUsQ1QJ6BAgyEAE)) op de vragen.

* Er is alleen een refresh-knop (gebruik hiervoor geen Button component)
* Zorg dat de app er netjes uitzien

Nuttige links: [Pressable](https://reactnative.dev/docs/pressable),
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Opdracht 3: TBD

