---
title: Customizing Your Site
extends: _layouts.documentation
section: content
---
# Customizing Your Site

## Styles
This skeleton comes with [Tailwind CSS](https://tailwindcss.com) pre-loaded, which is a utility CSS framework that allows you to customize and build complex designs without touching a line of CSS. There are also a few base Sass files in the `/source/_assets/sass` folder, set up with the expectation that you can add any custom CSS into `_documentation.scss`.

> You can also re-work the architecture of the Sass includes any way you’d like; just make sure to keep the `@tailwind` references in your final files.

```scss
// source/_assets/sass/main.scss

@tailwind preflight;
@tailwind components;

// Code syntax highlighting,
// powered by https://highlightjs.org
@import '~highlight.js/styles/github.css';

@import 'base';
@import 'navigation';
@import 'documentation';

@tailwind utilities;
```

---

## Typography Styles
Here’s a quick preview of what some of the basic type styles will look like in your template.

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

The quick brown fox jumps over the lazy dog

<s>The quick brown fox jumps over the lazy dog</s>

<u>The quick brown fox jumps over the lazy dog</u>

_The quick brown fox jumps over the lazy dog_

**The quick brown fox jumps over the lazy dog**

`The quick brown fox jumps over the lazy dog`

<small>The quick brown fox jumps over the lazy dog</small>

> The quick brown fox jumps over the lazy dog

[The quick brown fox jumps over the lazy dog](#)

```php
class Foo extends bar
{
    public function fooBar()
    {
        //
    }
}
```
