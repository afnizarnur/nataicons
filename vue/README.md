<p align="center">
  <a href="https://github.com/afnizarnur/nataicons">
    <img src="https://user-images.githubusercontent.com/4648648/96120944-841ca180-0f19-11eb-892e-4312017f5e8b.png" width="44">
  </a>
</p>
<h3 align="center">Nataicons</h3>

<p align="center">
  A fun-themed simple open source icon by the folks at <a href="https://natatoko.com">Natatoko</a>. 
</p>

---

<div align="center">
  <img src="https://user-images.githubusercontent.com/4648648/96269199-404a9a80-0ff4-11eb-9039-c71f1225c721.png">
</div>

## Installation

Install with npm
```bash
npm install @nataicons/vue
```

## Usage

1. Import the icon components

```js
import { AlarmIcon, AlertIcon, NataIcon } from "@nataicons/vue"
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
  import { AlarmIcon } from "@nataicons/vue"
    export default {
    components: { AlarmIcon }
  }
</script>
```

You can set a custom `size` (in pixels) or use the default sizes (24px or 20px). The `color` prop allows you to change the icon color.
om `size` (in pixels) or use the default sizes. The `color` prop allows you to change the icon color.


## License

Nataicons is licensed under the [MIT License](https://github.com/afnizarnur/nataicons//tree/main/LICENSE). In short, you are free to use this icons in any personal, open-source or commercial work. Attribution is optional but appreciated.
