# Fotos reales del taller (.webp)

Guarda aquí las fotos reales de las piezas, en formato **.webp** y con un
nombre descriptivo en minúsculas, por ejemplo:

```
public/images/anillo-solitario-oro-18k.webp
public/images/aretes-perla.webp
```

Recomendaciones:
- Tamaño ideal: 800×800 px (cuadradas) para las tarjetas de producto.
- Para el hero de la página principal: 1920×1280 px.
- Para convertir a .webp puedes usar https://squoosh.app (gratis, en el navegador).

Luego, en `src/app/data/collections.ts`, reemplaza la `url` de cada pieza por
la ruta local:

```ts
{ url: "/images/anillo-solitario-oro-18k.webp", alt: "...", label: "...", ... }
```

El componente `OptimizedImage` detecta automáticamente que es una imagen local
y la sirve tal cual (las de Unsplash ya se sirven en .webp/.avif).
