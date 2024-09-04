<p align="center">
  <a href="https://github.com/afnizarnur/nataicons">
    <img src="https://user-images.githubusercontent.com/4648648/96120944-841ca180-0f19-11eb-892e-4312017f5e8b.png" width="44">
  </a>
</p>
<h3 align="center">Nataicons</h3>

<p align="center">
  A fun-themed simple open source icon by the folks at <a href="https://natatoko.com">Natatoko</a>. This icons provide 2 icons variant: 24x24 and 20x20. Practically, this icons are used on our web application, but feel free to use it on your project!
</p>

---

<div align="center">
  <img src="https://user-images.githubusercontent.com/4648648/96269199-404a9a80-0ff4-11eb-9039-c71f1225c721.png">
</div>

## Installation

Install with [npm](https://www.npmjs.com/package/nataicons).
```bash
npm install nataicons --save
```

## Usage

### Inline

Copy the SVGs you want to use from `icons/24x24` or `icons/20x20` inside `node_modules/nataicons` and inline them in your HTML.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 14l8.515-11v6.5H21L12.015 21v-7H3.5z"/>
</svg>
```

### SVG Sprite

Include an icon on your page with the following markup:

```html
<svg width="24" height="24" class="custom-class">
  <use xlink:href="#24x24--alarm"></use>
</svg>
```

### Vue

1. Import the icon components

```js
import { AlarmIcon, AlertIcon, NataIcon } from "nataicons/vue"
```

2. Use the icon components in your template


```jsx
<template>
  <div>
    <AlarmIcon color="red" size="24" />
    <NataIcon name="bell" color="blue" size="32" />
  </div>
</template>
<script>
  import { AlarmIcon } from "nataicons/vue"
    export default {
    components: { AlarmIcon }
  }
</script>
```

You can set a custom `size` (in pixels) or use the default sizes (24px or 20px). The `color` prop allows you to change the icon color.

### React

1. Import the icon components

```jsx
import { AlarmIcon, NataIcon } from "nataicons/react"
```

2. Use the icon components in your JSX

```jsx
function MyComponent() {
  return (
    <div>
      <AlarmIcon color="red" size={24} />
      <NataIcon name="bell" color="blue" size={32} />
    </div>  
  )
}
```

Similar to Vue, you can set a custom `size` (in pixels) or use the default sizes. The `color` prop allows you to change the icon color.

## Inspiration

1. [vue-hero-icons](https://github.com/matschik/vue-hero-icons)
2. [radix-icons](https://github.com/modulz/radix-icons)
3. [heroicons](https://github.com/tailwindlabs/heroicons)

## License

Nataicons is licensed under the [MIT License](https://github.com/afnizarnur/nataicons//tree/main/LICENSE). In short, you are free to use this icons in any personal, open-source or commercial work. Attribution is optional but appreciated.
