---
title: Authorizing Payments
description: s
extends: _layouts.documentation
section: content
---

<style>
    table {
        display: table;
        border-collapse: collapse;
        position: relative;
        font-size: 90%;
        width: 100%;
        line-height: 1.5;
        table-layout: auto;
    }
    td {
        padding: 10px 8px;
        border: 0;
        vertical-align: top;
    }
    #params_p {
      font-size: 1.375em;
    }
</style>

# Authorizing Payments (V-Pay)

### You can enable users to authorize payments for your Project.

To integrate Voltox's V-Pay, you need to go to <a href="http://developers.voltox.tech/credentials">V-Developers Console</a> and create an API Key that represents your project.

To integrate V-Pay, consider which flow best fits your app.

<ul>
    <li><a href="#web-application-flow">Web application flow</a>: Used to authorize payments for standard applications that run in the browser.</li>
</ul>

### Web application flow

<ul>
    <li style="list-style-type: disc">Users are redirected to request their Voltox identity</li>
    <li style="list-style-type: disc">Users are asked for billing details information.</li>
    <li style="list-style-type: disc">Users are asked for payment authorization verification.</li>
    <li style="list-style-type: disc">Users are redirected back to your site by Voltox</li>
    <li style="list-style-type: disc">Your app accesses the V-Pay Charge object created by Voltox for personal use.</li>
</ul>

#### 1) Request a user's payment authorization

<pre>GET https://api.voltox.tech/pay/:amount</pre>

When your Voltox App specifies a login parameter, it prompts users with a specific account they can use for signing in and authorizing your app.

<p id="params_p">Parameters</p>

<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>amount</code></td><td><code>integer</code></td><td><strong>Required</strong>. The amount in cents that your application requests for payment.</td></tr><tr><td><code>app_id</code></td><td><code>string</code></td><td><strong>Required</strong>. The app ID you received from Voltox when you <a href="http://developers.voltox.tech/">registered</a>.</td></tr><tr><td><code>redirect_uri</code></td><td><code>string</code></td><td>The URL in your application where users will be sent after authorization. See details below about <a href="#redirect-urls">redirect urls</a>.</td></tr><tr></tr><tr><td></td></tr><tr></tr><tr></tr></tbody></table>

#### 2) Users are redirected back to your site by Voltox

If the user accepts your request, Voltox redirects back to your site with the charge object containing payment and billing address details.

You can save the charge ID for future use.

<pre>GET https://api.voltox.tech/api/v1/charges/:charge_id</pre>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>charge_id</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <strong>Required.</strong> The charge ID you received from Voltox after an user's payment authorization.
      </td>
    </tr>

  </tbody>
</table>

<!-- # Authorizing Payments {#authorizing-oauth-apps}

This starter template includes support for [DocSearch](https://community.algolia.com/docsearch/), a documentation indexing and search tool provided by Algolia for free. To configure this tool, you’ll need to sign up with Algolia and set your API Key and index name in `config.php`. Algolia will then crawl your documentation regularly, and index all your content.

[Get your DocSearch credentials here.](https://community.algolia.com/docsearch/#join-docsearch-program)

```php
// config.php
return [
    'docsearchApiKey' => '',
    'docsearchIndexName' => '',
];
```

Once the `docsearchApiKey` and `docsearchIndexName` values are set in `config.php`, the search field at the top of the page is ready to use.

<img class="block m-auto" src="/assets/img/docsearch.png" alt="Screenshot of search results" />

To help Algolia index your pages correctly, it's good practice to add a unique `id` or `name` attribute to each heading tag (`<h1>`, `<h2>`, etc.). By doing so, a user will be taken directly to the appropriate section of the page when they click a search result.

---

## Adding Custom Styles {#algolia-adding-custom-styles}

If you'd like to customize the styling of the search results, Algolia exposes custom CSS classes that you can modify:

```css
/* Main dropdown wrapper */
.algolia-autocomplete .ds-dropdown-menu {
  width: 500px;
}

/* Main category (eg. Getting Started) */
.algolia-autocomplete .algolia-docsearch-suggestion--category-header {
  color: darkgray;
  border: 1px solid gray;
}

/* Category (eg. Downloads) */
.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {
  color: gray;
}

/* Title (eg. Bootstrap CDN) */
.algolia-autocomplete .algolia-docsearch-suggestion--title {
  font-weight: bold;
  color: black;
}

/* Description description (eg. Bootstrap currently works...) */
.algolia-autocomplete .algolia-docsearch-suggestion--text {
  font-size: 0.8rem;
  color: gray;
}

/* Highlighted text */
.algolia-autocomplete .algolia-docsearch-suggestion--highlight {
  color: blue;
}
```

---

For more details, visit the [official Algolia DocSearch documentation.](https://community.algolia.com/docsearch/what-is-docsearch.html) -->
