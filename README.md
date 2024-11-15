# 1 - Olympic Rings

## Motivation

Excercice pour progresser en :

- React avec Preact
- CSS
- Scrapping
- Animation

## Méthode d'apprentissage

1. Regarder une fois en entier la [vidéo de Grafikart](https://www.youtube.com/watch?v=zw_Z0CuYOV8)
2. Réaliser le projet. Si blocage, un coup d'oeil à la vidéo.
3. Noter les apprentissages en bas et en lien avec le repos Notes.

## Commands

- `npm run dev` - Starts a dev server at http://localhost:5173/

- `npm run build` - Builds for production, emitting to `dist/`. Prerenders app to static HTML

- `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

## Apprentissage

### CSS

- [reset.css](https://github.com/elad2412/the-new-css-reset) pour repartir de zéro et éviter d'avoir des différences dues au navigateur
- pseudo-éléments _::after_, _::before_
- vh, vw : height or width viewport (en pourcentage)

### HTML

- la différence entre `<b>` (mise en valeur visuelle), `<i>` (décalage visuel), `<strong>` (mise en exergue) et `<em>` (emphase)

### TS

- Utiliser le JSON pour inferer un type

```ts
type ItemOf<T> = T extends (infer U)[] ? U : never;
type Continent = ItemOf<typeof continents>;
```

### Autre

- serif = empattement, évoue plutôt le poids de l'histoire, le sérieux...
