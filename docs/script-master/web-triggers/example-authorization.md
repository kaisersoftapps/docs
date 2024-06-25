# Example: Authorization

:::tip Compatibility

This example both for **Jira** and **Confluence** versions of [Web Triggers](./index.md).

:::

By default, the URLs provided by Web Trigger have no built-in authentication. 
As such, anyone can use the URL (and, by extension, invoke its related function) without providing an authentication token. 
You should keep these URLs secure. Alternatively, you can also implement authentication inside the trigger itself. 

For example, you can add a check for an "authorization" header in the request and validate any provided token.

```javascript
/* no import needed, 'api', 'route', 'fetch', 'authorize', 'request' already available as global variables */

const YOUR_SECRET_KEY = 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==';

if (request.headers['authorization']?.[0] !== YOUR_SECRET_KEY) return ({
    statusCode: 403,
    statusText: 'Not Permitted'
});

return ({
    statusCode: 200,
    statusText: 'OK'
});
```