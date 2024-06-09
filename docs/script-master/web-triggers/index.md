---
sidebar_position: 60
---

# Web Triggers

:::tip Compatibility

This module is available for both the Jira and Confluence versions of the app.

:::


Web Triggers are JavaScript functions running on the Forge back end that respond to HTTP requests. They enable seamless integration between your Jira or Confluence instances and external systems without requiring user authentication.

```mermaid
sequenceDiagram
    participant User as Actor (User or Application)
    participant Server as Custom Web Trigger (Forge FaaS)

    User->>Server: HTTP Request
    Server->>Server: Route to WebTrigger Handler
    Server->>Server: Validate and Parse Request
    Server->>Server: Execute your amazing script
    Server->>User: HTTP Response
```

## Setting Up Web Triggers

1. Go to the **Web Triggers** section from the **Script Master** menu.
2. Create a new web trigger by writing a JavaScript function.
3. Save the web trigger to generate a unique URL.
4. Use this URL to handle HTTP requests.


## Key Features

- **No User Authentication Required**: Accessible via a unique URL, allowing external systems to communicate with Jira or Confluence seamlessly.
- **Communication with Jira**: Interact with application using the `useApp()` method, enabling actions such as issue creation, updates, and workflow triggers.
- **Scalability and Reliability**: Benefit from Forge platform's scalability and reliability for handling a large volume of requests.


## Best Practices

- **Security Considerations**: Validate incoming requests and perform authorized actions within Jira or Confluence applications to ensure security.
- **Error Handling**: Implement robust error handling to ensure reliable trigger operation.
- **Performance Optimization**: Optimize trigger performance for minimal latency and improved responsiveness.


## Use Cases

- **Integrating with External Systems**: Integrate Jira or Confluence with third-party applications or internal tools for seamless data synchronization.
- **Automating Workflows**: Trigger actions based on specific events or conditions to streamline processes and improve productivity.
- **Extending Functionality**: Enhance functionality of Jira or Confluence with custom actions or behaviors to meet organizational needs.


:::note

[More Examples on GitHub](https://github.com/kaisersoftapps/script-master)

:::