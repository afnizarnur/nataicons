# Nataicons
Nataicons is a fun-themed simple open source icon by the folks at [Natatoko](https://natatoko.com/). This icons provide 2 icons variant: 24x24 and 20x20. Practically, this icons are used on our web application, but feel free to use it on your project!

## Usage
Currently, *we only provide Vue icon component*.

### Vue
1. Install with [npm](npmjs.com/).
```bash
npm install nataicons --save
```

2. Import the icon
```js
import { Home24, Inbox24, Folder24, ... } from "nataicons"
```

3. Use the icon on your project
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