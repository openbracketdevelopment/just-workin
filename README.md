# just-workin

A minimal Next.js App Router application with an empty, full-window Three.js
scene. The scene intentionally contains no objects or lights.

## Development

Requires Node.js 20.9 or later and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. A blank dark canvas is the expected result.
The browser must support WebGL 2.

## Checks and production

```sh
npm run lint
npm run build
npm start
```

The Three.js renderer runs only in the browser, resizes with its container, and
releases its animation loop and renderer resources when unmounted.
