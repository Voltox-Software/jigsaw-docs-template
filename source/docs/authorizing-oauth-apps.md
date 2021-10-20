---
title: Authorizing OAuth Apps
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

# Authorizing OAuth Apps

### You can enable other users to authorize your OAuth App.

Voltox's OAuth implementation supports the standard <a href="https://tools.ietf.org/html/rfc6749#section-4.1">authorization code grant type</a> and the OAuth 2.0 <a href="https://tools.ietf.org/html/rfc8628">Device Authorization Grant</a> for apps that don't have access to a web browser.

To authorize your OAuth app, consider which authorization flow best fits your app.

<ul>
    <li><a href="#web-application-flow">Web application flow</a>: Used to authorize users for standard OAuth apps that run in the browser.</li>
</ul>

### Web application flow

<ul>
    <li style="list-style-type: disc">Users are redirected to request their Voltox identity</li>
    <li style="list-style-type: disc">Users are redirected back to your site by Voltox</li>
    <li style="list-style-type: disc">Your app requests for an access token using the authorization code received by Voltox Identity</li>
    <li style="list-style-type: disc">Your app accesses the API with the user's access token</li>
</ul>

#### 1) Request a user's Voltox identity

<pre>GET https://voltox.com/login/oauth/authorize</pre>

When your Voltox App specifies a login parameter, it prompts users with a specific account they can use for signing in and authorizing your app.

<p id="params_p">Parameters</p>

<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_id</code></td><td><code>string</code></td><td><strong>Required</strong>. The client ID you received from Voltox when you <a href="https://voltox.com/settings/applications/new">registered</a>.</td></tr><tr><td><code>redirect_uri</code></td><td><code>string</code></td><td>The URL in your application where users will be sent after authorization. See details below about <a href="#redirect-urls">redirect urls</a>.</td></tr><tr></tr><tr><td><code>scope</code></td><td><code>string</code></td><td>A comma-delimited list of <a href="/en/apps/building-oauth-apps/understanding-scopes-for-oauth-apps">scopes</a>. If not provided, <code>scope</code> defaults to an empty list for users that have not authorized any scopes for the application. For users who have authorized scopes for the application, the user won't be shown the OAuth authorization page with the list of scopes. Instead, this step of the flow will automatically complete with the set of scopes the user has authorized for the application. For example, if a user has already performed the web flow twice and has authorized one token with <code>user</code> scope and another token with <code>repo</code> scope, a third web flow that does not provide a <code>scope</code> will receive a token with <code>user</code> and <code>repo</code> scope.</td></tr><tr><td><code>state</code></td><td><code>string</code></td><td>An unguessable random string. It is used to protect against cross-site request forgery attacks.</td></tr><tr><td><code>allow_signup</code></td><td><code>string</code></td><td>Whether or not unauthenticated users will be offered an option to sign up for Voltox during the OAuth flow. The default is <code>true</code>. Use <code>false</code> when a policy prohibits signups.</td></tr></tbody></table>

#### 2) Users are redirected back to your site by Voltox

If the user accepts your request, Voltox redirects back to your site with a temporary code in a code parameter as well as the state you provided in the previous step in a state parameter. The temporary code will expire after 10 minutes. If the states don't match, then a third party created the request, and you should abort the process.

Exchange this <code>code</code> for an access token:

<pre>POST https://voltox.com/login/oauth/access_token</pre>

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
        <code>client_id</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <strong>Required.</strong> The client ID you received from Voltox for
        your OAuth App.
      </td>
    </tr>
    <tr>
      <td>
        <code>client_secret</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <strong>Required.</strong> The client secret you received from Voltox
        for your OAuth App.
      </td>
    </tr>
    <tr>
      <td>
        <code>code</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        <strong>Required.</strong> The code you received as a response to Step
        1.
      </td>
    </tr>
    <tr>
      <td>
        <code>redirect_uri</code>
      </td>
      <td>
        <code>string</code>
      </td>
      <td>
        The URL in your application where users are sent after authorization.
      </td>
    </tr>
  </tbody>
</table>

#### 3) Use the access token to access the API

The access token allows you to make requests to the API on a behalf of a user.

<pre>
Authorization: Bearer OAUTH-TOKEN
GET https://api.voltox.com/me
</pre>

For example, in curl you can set the Authorization header like this:

<pre>
curl -H "Authorization: Bearer OAUTH-TOKEN" https://api.voltox.com/me
</pre>

<!-- # Authorizing OAuth Apps {#authorizing-oauth-apps}

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
