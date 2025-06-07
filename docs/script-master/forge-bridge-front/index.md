---
sidebar_position: 160
---

# Forge Bridge API for Custom UI

## Forge API

<div style={{ display: "flex", gap: "20px", "justify-content": "space-between", "align-content": "center", width: "100%" }}>
  <div><img src={require('./img/front-end-script.png').default} style={{width: 100}} /></div>
  <div>Inside Custom UI related modules (like [Script Console](./script-console/) or [Fragments](./fragments/)), you can use these global forge bridge objects and functions to access your application:</div>
</div>

- `view`: The [view](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/view/) object represents the context in which a resource is loaded, such as within a modal dialog. This context provides relevant information and methods for managing the resource.

- `requestConfluence`: The [requestConfluence](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestConfluence/) bridge method allows Forge apps to interact with the [Confluence Cloud platform REST API](https://developer.atlassian.com/cloud/confluence/rest/v2) on behalf of the current user. This function available only in Confluence. 

- `requestJira`: The [requestJira](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestJira/) bridge method allows Forge apps to interact with the [Jira Cloud platform REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro) on behalf of the current user. This function available only in Jira. 

- `router`: The [router](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/router/) object provides navigation capabilities within the host product, allowing you to programmatically direct users to different pages.

- `showFlag`: The [showFlag](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/showFlag/) bridge method allows your custom UI apps to display notification flags within the product's flag group.

- `events`: The [Events API](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/events/) allows your app to manage event subscriptions and emissions, facilitating communication between different Custom UI extensions within the same app. You can subscribe to events (register to listen for specific events).
Unsubscribe from events (remove a previously registered event listener). Emit events (trigger events to notify other parts of your app).

- `Modal`: The [Modal](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/modal/) class enables your custom UI app to open a modal dialog. You can specify the resource that will be displayed within this modal.

- `setHeight`: If the custom UI components, such as panels, macros, and gadgets, do not resize correctly within the application upon layout updates, we recommend checking and confirming that the sizing properties of the root container are defined using non-viewport-related units such as px, em, and so on. This limitation occurs because the iframe component's root container does not support viewport-based relative sizing units like vh and vw well.This global function for all custom UI elements, such as panels, macros, and gadgets, assists in setting the required iframe size after all content has loaded. You can use it to set a static size, like `setHeight('320px');`, or dynamically adjust the size after content loads, like `setHeight(document.querySelector('#my-gadget-container').scrollHeight + 'px');`.


## Everyday Examples

### Reset Styles

This CSS file from Atlaskit provides a minimal reset along with base styles for many HTML elements. It is intended to be used as a foundation for all subsequent styling. The Atlassian Design System is built on top of this foundation, and you can include it in your fragment, gadget, or macro to enable default fonts and styles.
Check for datails [https://atlassian.design/components/css-reset/examples](https://atlassian.design/components/css-reset/examples).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atlaskit/css-reset" />
<!-- ...the rest part of your custom UI... -->
```


### Error Handling

To catch all errors in your code and display them as meaningful messages, use this combination of the `window.onerror` listener and an error placeholder.

```html
<div id="errors" style="color:red"></div>

<script type="module">
    window.onerror = (e) => document.getElementById('errors').innerHTML = e.toString(); // show error when a resource failed to load or couldn't be used 

    throw new Error('Task failed successfully!');
</script>
```


### "strict mode"

Defines that JavaScript code should be executed in "strict mode".  It helps you to write cleaner code, like preventing you from using undeclared variables.

```html
<!-- ...the rest part of your custom UI... -->
<script type="module">
    'use strict';
     // the rest part of your amazing script
</script>
```


### Dark Mode support

```html
<!-- ...the rest part of your custom UI... -->
<script type="module">
    // Dark theme support
    document.querySelector(":root").setAttribute("data-color-mode", theme.colorMode);
    document.querySelector(":root").setAttribute("data-theme", `${theme.colorMode}:${theme.colorMode}`);
    document.querySelector(":root").insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="https://forge.cdn.prod.atlassian-dev.net/atlaskit-tokens_${theme.colorMode}.css" />`);
</script>
```


### Resize window to content

```html
<!-- ...the rest part of your custom UI... -->
<script type="module">
    // Resize window
    setHeight(document.querySelector(':root').scrollHeight + 'px');
</script>
```


### Hidden Macro

Sometimes a macro should add functionality to the page without being visible. You can place the macro at the bottom of the page and set its height to the smallest possible value.

```html
<!-- ...the rest part of your custom UI... -->
<script type="module">
    setHeight('0px'); // Set the macro height as small as possible
</script>
```


### Fetches issues using JQL

```js
/**
 * Fetches issues using JQL
 * @param {string} jql 
 * @returns {Promise<Array>} List of issues
 */
const fetchIssuesByJQL = async (jql) => {
    const response = await requestJira(`/rest/api/3/search?jql=${encodeURIComponent(jql)}`);
    
    if (!response.ok) {
        throw new Error(`JQL search failed: ${response.status}`);
    }

    const data = await response.json();
    return data.issues || [];
};
```


### Fetches changelog for a specific issue

```js
/**
 * Fetches changelog for a specific issue
 * @param {string} issueKey 
 * @returns {Promise<Array>} Changelog entries
 */
const fetchIssueChangelog = async (issueKey) => {
    const response = await requestJira(`/rest/api/3/issue/${issueKey}/changelog`);
    
    if (!response.ok) {
        throw new Error(`Changelog fetch failed for ${issueKey}: ${response.status}`);
    }

    const data = await response.json();
    return data.values || [];
};
```

## Logging and debugging

<iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://www.youtube.com/embed/s1QtjiFlrsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::note

Something is missing or not clear? [Contact our Support team](../ask-for-help/)

:::