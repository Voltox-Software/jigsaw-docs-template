---
title: Getting Started
extends: _layouts.documentation
section: content
---

# Getting Started {#getting-started}

This template is a front-end theme for your Jigsaw projects, giving you a starting point for creating a beautiful documentation site. Getting started is easy and only requires minimal configuration.

## Configuration {#getting-started-configuration}

As with all Jigsaw sites, configuration options for this theme are found in `config.php`. This file is where you can update variables such as `siteName` and `siteDescription` with your own information.

```php
// config.php
return [
    'baseUrl' => 'https://my-awesome-jigsaw-site.com/',
    'production' => false,
    'siteName' => 'My Site',
    'siteDescription' => 'Give your documentation a boost with Jigsaw.',
    'docsearchApiKey' => '',
    'docsearchIndexName' => '',
    'navigation' => require_once('navigation.php'),
];
```

> Tip: If you need to extend the configuration, see the official Jigsaw documentation for [site variables](https://jigsaw.tighten.co/docs/site-variables/) and [collections](https://jigsaw.tighten.co/docs/collections/).

---

### Adding Content {#getting-started-adding-content}

Jigsaw supports a variety of [file types](http://jigsaw.tighten.co/docs/content-other-file-types/) for creating content. By default, this template stores your documentation content in the `source/docs/`. If you want to change this location, be sure to update the url references in `navigation.php`. [Read more about navigation](/docs/navigation).

The top of every content page contains a YAML header that specifies how it should be rendered. The `title` variable is used to dynamically generate html `<title></title>` tag for each page. The `extends` and `section` variables reference the parent Blade layout and the target content area that parent layout:

```yaml
---
title: Navigation
extends: _layouts.documentation
section: content
---
```

[Read more about Jigsaw layouts.](/docs/extending)

---

### Adding Assets {#getting-started-adding-assets}

Any assets that need to be compiled (such as JavaScript, LESS, or Sass files) can be added to the `source/_assets/` directory, and Laravel Mix will process them when running `npm run local` or `npm run production`. The processed assets will be stored in `/source/assets/build/` (note there is no underscore on this second `assets` directory).

Then, when Jigsaw builds your site, the entire `/source/assets/` directory containing your build files (and any other directories containing static assets, such as images or fonts, that you choose to store there) will be copied to `/build_local` or `/build_production`.

Files that don't require processing (such as images and fonts) can be added directly to `/source/assets/`.

[Read more about compiling assets in Jigsaw using Laravel Mix.](http://jigsaw.tighten.co/docs/compiling-assets/)

---

## Building Your Site {#getting-started-building-your-site}

```bash
# build static files with Jigsaw
$ ./vendor/bin/jigsaw build

# compile assets with Laravel Mix
# options: dev, staging, production
npm run dev
```
