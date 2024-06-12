---
sidebar_position: 90
---

# Forge Bridge API for backend FaaS functions

Inside Forge backend FaaS function modules (like [Web Trigger](./web-triggers/)), you can use these global  bridge objects and functions from `'@forge/api'` to access your application:

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


:::note

Something is missing or not clear? [Contact our Support team](../ask-for-help/)

:::