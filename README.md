De Partiburen is een ouder- en buurtkoor van De Wijze Boom aan de
Rozenbroeken.
We repeteren elke donderdagavond van 20u tot 22u in de leraarskamer van de
school. Bij mooi weer zingen we wel eens buiten in het park.

Iedereen is welkom: je moet geen noten kunnen lezen. We zingen doorgaans
muziek die de laatste 25 jaar te horen was op Radio 1 of op Studio Brussel,
ondersteund door de cajon, wat kleine percussie en Pierre op gitaar. Voor klassieke
popnummers zijn de strofes vaak 1-stemmig en de refreinen 2- of 3-stemmig.

We werken geregeld met gastdirigenten, die zich telkens voor enkele maanden
engageren. Zo kwam Wim Claeys zijn eigen Gentse volksrepertoire met ons
inoefenen, deed Peter Boone met ons muziek uit de sixties en seventies en bracht
Aike Roodenburg van Papillon wereldmuziek mee.

Lees meer link: https://www.koorenstem.be/nl/artikel/zingen-in-de-buurt
Onze playlist
https://open.spotify.com/playlist/5cTvDz05adEOop9zYRiyBx?si=1gRZg8bvRdeRQO
a_SlUwhg&amp;pi=odM1z0jtTD-ic

Volg ons op fb, insta Lid van Koor&amp;Stem vzw link https://www.koorenstem.be/nl

## Content beheren met Pages CMS

De website blijft een statische Astro-site op de bestaande Vercel-hosting.
Pages CMS beheert alleen bestanden in GitHub; er is geen CMS-server nodig op Vercel.

### Eenmalig verbinden

1. Open https://app.pagescms.org en meld aan met GitHub.
2. Geef de Pages CMS GitHub-app toegang tot alleen `ThomasStock/partiburen`.
3. Kies de repository en de branch `main` zodra deze configuratie daarop staat.
4. Open **Homepage**. De velden zijn gegroepeerd en Nederlandstalig.
5. Nodig andere redacteurs via e-mail uit via de collaborator-instellingen.
   Zij hebben geen GitHub-account nodig; dit is e-maillogin, geen Google-login.

### Wijzigen en publiceren

- Bewerk teksten, afbeeldingen, links of zoekmachinegegevens onder **Homepage**.
- Afbeeldingen worden opgeslagen in `public/`; de publieke URL begint met `/`.
- Gebruik voor YouTube en Spotify de insluit-URL (embed).
- Opslaan maakt een GitHub-commit. Op `main` start daarmee de bestaande
  Vercel-productiedeployment. Wijzigingen staan online zodra die geslaagd is.
- Opslaan is dus publiceren: werk op een andere branch voor concepten.
- Een mislukte build vervangt de laatst geslaagde deployment niet.

### Lokaal

```sh
npm ci
npm run dev
npm run build
```

De inhoud staat in `src/data/home.json`; `.pages.yml` definieert het formulier.
Astro leest die gegevens tijdens de build en schrijft volledige HTML naar `dist/`.
Er worden geen CMS-gegevens in de browser opgehaald. Opmaak en lay-out blijven
in de Astro-templates. De rich-textvelden bevatten HTML voor vertrouwde redacteurs.
