---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /test.jpg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /foo/one
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
![An image](/test.jpg)
[[toc]]
:tada: :100:
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   1 |
| zebra stripes | are neat      |    $1 |




::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
# heading

```js
export default {
  name: 'MyComponent',
  // ...
}
```

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.


<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>
