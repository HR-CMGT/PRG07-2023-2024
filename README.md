# PRG07: Mobile development met Expo & React Native

Tijdens deze module gaan we eerst in op algemene Javascript skills. Daarmee
oefen je jouw algemene Javascript kennis en pas je principes toe die ik elke
framework worden toegepast. Om React echt goed te kunnen gebruiken heb je deze
kennis nodig.

Met de voorkennis van React uit programmeren 6, en het herhalen van essentiële
Javascript kennis, kun je daarna apps gaan bouwen in React Native. Hiervoor
gebruiken we Expo als basis waarmee je een gebruiksvriendelijke ontwikkelingomgeving
hebt waarmee je gemakkelijk kunt testen op je eigen smartphone.

## Voorwaardelijke mini-cases

Om mee te mogen doen aan de eindopdracht moet je de voorwaardelijke mini-cases
afronden. Je kunt ze [hier](mini-cases) vinden en het bewijs van afronding opleveren
op Brightspace.

## Eindopdracht

De eindopdracht is vanaf les 6 te vinden in [deze map](eindopdracht)

Tip: Als je jouw eigen webservice moet maken kun je de volgende prompt omgeving aan ChatGPT:

> Give me JSON code with 10 items. Every item has a title, description, latitude and longitude.
> The lat/long need to be in the Rotterdam area. the items need to be about snackbars in Rotterdam

Daarna kun je die natuurlijk aanpassen om nog iets meer richting te krijgen.

## Algemene tips

* Je styling mooi maken met een bekende omgeving? Gebruik [NativeWind](https://www.nativewind.dev)
* Krijg je geen connectie met Expo Go? Probeer het volgende:
    * Via Tethering lukte het wel dus dat is een optie.
    * Een tunnel starten.
        * Hiervoor creëer je een account bij Expo
        * In de terminal moet je eerst inloggen met `npx expo login`
        * Start expo in de terminal met `npx expo start --tunnel`
        * Ik moest daarvoor ook `@expo/ngrok` installeren en hier heb je sudo rechten voor nodig
    * Backup: De emulator gebruiken. Daarvoor moet je eerst XCode of Android Studio installeren.
* Als je icons wilt gebruiken in je App, check dan: https://icons.expo.fyi/
