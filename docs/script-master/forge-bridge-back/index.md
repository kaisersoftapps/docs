---
sidebar_position: 150
---

# Forge Bridge API for backend FaaS functions

<div style={{ display: "flex", gap: "20px", "justify-content": "space-between", "align-content": "center", width: "100%" }}>
  <div><img src={require('./img/back-end-script.png').default} style={{width: 100}} /></div>
  <div>Inside Forge backend FaaS function modules (like [Web Trigger](./web-triggers/), [Custom Fields](./custom-fields/), [Workflow extensions](../workflow-extensions/index.md)), you can use these global  bridge objects and functions from `'@forge/api'` to access your application:</div>
</div>

## API

- `api`: The [api](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/) provides access to both the [requestJira](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/) and [requestConfluence](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/), which allow you to access data from your application through the REST API.
 
- `route`: To construct the path passed to the product fetch APIs, you must use the [route](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/#path-construction--route-) tagged template function. This function blocks unsafe interpolated parameters in the path and encodes the query parameters using encodeURIComponent. This ensures protection against security vulnerabilities like path traversal and query string injection.

- `fetch`: The [Forge Fetch API](https://developer.atlassian.com/platform/forge/runtime-reference/fetch-api/) is a partial implementation of node-fetch, which fetches data from an HTTP server. In its simplest form, fetch acts as a basic HTTP client.

- `authorize`: The [Forge Authorize API](https://developer.atlassian.com/platform/forge/runtime-reference/authorize-api/) assists app developers in verifying user permissions before making requests using the asApp method. 

- `request`: "request" is an object sent to your backend function from an external caller. It contains all the information about the request, such as query parameters, headers, body, etc.
Request format:

  ```javascript
  interface Request {
    body: string;
    headers: {[headerName: string]: string[]};
    method: string;
    path: string;
    queryParameters: {[paramName: string]: string[]};
  }
  ```

At the beginning of each script, Script Master automatically includes all necessary imports and special global objects, such as "request" for web-trigger scripts. This means you don't need to include them yourself; you can simply start writing your script.

```javascript
// These components are added automatically by Script Master
import api, { authorize, fetch, route } from '@forge/api';
const request = '...request details...';

// Your script starts here:

your script

```

## Logging and debugging

<iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://www.youtube.com/embed/dj7WeGBfl7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


:::note

Something is missing or not clear? [Contact our Support team](../ask-for-help/)

:::