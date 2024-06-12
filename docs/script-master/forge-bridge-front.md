---
sidebar_position: 80
---

# Forge Bridge API for Custom UI

Inside Custom UI related modules (like [Script Console](./script-console/) or [Fragments](./fragments/)), you can use these global forge bridge objects and functions to access your application:

- `view`: The [view](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/view/) object represents the context in which a resource is loaded, such as within a modal dialog. This context provides relevant information and methods for managing the resource.

- `requestConfluence`: The [requestConfluence](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestConfluence/) bridge method allows Forge apps to interact with the [Confluence Cloud platform REST API](https://developer.atlassian.com/cloud/confluence/rest/v2) on behalf of the current user. This function available only in Confluence. 

- `requestJira`: The [requestJira](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestJira/) bridge method allows Forge apps to interact with the [Jira Cloud platform REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro) on behalf of the current user. This function available only in Jira. 

- `router`: The [router](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/router/) object provides navigation capabilities within the host product, allowing you to programmatically direct users to different pages.

- `showFlag`: The [showFlag](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/showFlag/) bridge method allows your custom UI apps to display notification flags within the product's flag group.

- `events`: The [Events API](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/events/) allows your app to manage event subscriptions and emissions, facilitating communication between different Custom UI extensions within the same app. You can subscribe to events (register to listen for specific events).
Unsubscribe from events (remove a previously registered event listener). Emit events (trigger events to notify other parts of your app).

- `Modal`: The [Modal](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/modal/) class enables your custom UI app to open a modal dialog. You can specify the resource that will be displayed within this modal.


:::note

Something is missing or not clear? [Contact our Support team](../ask-for-help/)

:::