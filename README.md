# image_generator
## Dependency
### Satori
[Satori](https://github.com/vercel/satori/) convert HTML to SVG, automatically wrap text and using [Yoga](https://yogalayout.dev/) Layout under the hood.

### Satori-html
[Satori-html](https://github.com/natemoo-re/satori-html) convert HTML to React Node, this is because Satori only support React node object at least on Node.js.

### Resvg-js
[Resvg-js](https://github.com/yisibl/resvg-js) convert SVG to PNG, Rust-Node binding for github.com/RazrFalcon/resvg.

### Victor Mono
[Victor mono](https://github.com/rubjo/victor-mono) is font that we will use because Satori need at least 1 font as default font.

## Flow
HTML -> Satori -> Resvg -> PNG

## How to use
```
node main.mjs
```
