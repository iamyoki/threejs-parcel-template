# How to use static files

## 1. Place your static files inside static folder

## 2. Use your static file

Use in html

```html
<img src="/some.png" alt="">
```

Use in js

```js
fetch('/some.json')
```

```js
const fontLoader = new FontLoader()
fontLoader.load('/some.tyepface.json')
```
