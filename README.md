<div align="center">
  <a href="https://github.com/afnizarnur/nataicons">
    <img src="https://user-images.githubusercontent.com/4648648/96117950-08b8f100-0f15-11eb-8385-ef647435a5ad.png" width="44">
  </a>
</div>
<h1 align="center">Nataicons</h1>

<p align="center">
  A fun-themed simple open source icon by the folks at <a href="https://natatoko.com">Natatoko</a>. This icons provide 2 icons variant: 24x24 and 20x20. Practically, this icons are used on our web application, but feel free to use it on your project!
</p>

<div align="center">
  <img src="https://user-images.githubusercontent.com/4648648/96118486-c47a2080-0f15-11eb-8899-59ce1acc32b1.png">
</div>

## Installation

Install with [npm](npmjs.com/).

```bash
npm install nataicons --save
```

## Usage

### Inline

Copy the SVGs you want to use from `icons/24x24` or `icons/20x20` inside `node_modules/nataicons` and inline them in your HTML.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#333"
    fill-rule="evenodd"
    d="M3.22 1.375a1 1 0 111.56 1.25l-2 2.5a1 1 0 11-1.56-1.25l2-2.5zm16.155-.156a1 1 0 011.406.156l2 2.5a1 1 0 11-1.562 1.25l-2-2.5a1 1 0 01.156-1.406zM4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 5.5a1 1 0 10-2 0v4.032l-2.64 2.2a1 1 0 101.28 1.536l3-2.5A1 1 0 0013 12V7.5z"
  />
</svg>
```

### SVG Sprite

1. Include an icon on your page with the following markup:

```html
<svg width="24" height="24" class="custom-class">
  <use xlink:href="#24x24--alarm"></use>
</svg>
```

### Vue

1.  Import the icon

```js
import { Home24, Inbox24, Folder24, ... } from "nataicons"
```

2. Use the icon on your project
   By default, each icon size will be on 24x24 and 20x20 depends on the variant. You can set a custom `size`: Multiple based sizing followed by an `x` or set a `px` directly by passing an integer.

```js
// Multiple based sizing
<Home24 size="2x" class="custom-class" />

// px based sizing
<Home24 size="20" class="custom-class" />
```

## Inspiration

1. [vue-hero-icons](https://github.com/matschik/vue-hero-icons)
2. [radix-icons](https://github.com/modulz/radix-icons)

## License

Nataicons is licensed under the [MIT License](https://github.com/afnizarnur/nataicons/blob/dev/LICENSE). In short, you are free to use this icons in any personal, open-source or commercial work. Attribution is optional but appreciated.
