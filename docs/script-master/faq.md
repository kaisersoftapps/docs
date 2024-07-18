---
sidebar_position: 300
---

# FAQ

## General Questions

### Who can access Script Master for Jira or Confluence?

Script Master is accessible to application administrators who have the necessary permissions to install and configure apps within their instance.

### Is Script Master for Jira compatible with all Jira products?

Yes, Script Master for Jira is compatible with all Jira products, including Jira Work Management, Jira Software, and Jira Service Management.


## Script Console

### What is the Script Console?

The Script Console is a hub for automations within Script Master. It provides tools such as REST API Exploration, Bulk Updates, and Automate Admin Tasks to execute scripts and automate routine administrative duties.

### Can I execute scripts in the Script Console as any user?

No, scripts executed in the Script Console run within the context of the current user and adhere to their permissions. Users can only read or modify content that they have access to.


## Fragments

### What are Fragments?

Fragments are UI components that extend the interface of Jira or Confluence to display Custom Actions or other Custom UI elements. They allow users to add new functionalities or enhance data visualizations within their application.

### In which Jira views do Fragments work?

Fragments work in the new issue view of Jira, but they are not compatible with the old issue view.


## Web Triggers

### What are Web Triggers?

Web Triggers are JavaScript functions running on the Forge back end that respond to HTTP requests. They provide a powerful way to integrate external systems with Jira or Confluence and automate workflows without requiring user authentication.

### Can Web Triggers interact with Jira or Confluence?

Yes, Web Triggers can interact with Jira or Confluence on behalf of the app using the `useApp()` method. This enables them to perform various actions, such as creating or updating content, querying data, or triggering workflows.


## Security

### Are Web Triggers secure by default?

No, Web Triggers are not secured out of the box. Administrators need to implement authentication functionality to ensure that only authorized users or systems can trigger the Web Triggers.

### How can I secure Web Triggers?

To secure Web Triggers, administrators can implement authentication mechanisms such as token-based authentication. An example of this can be found in the Snippets Library, which utilizes request headers to check for a proper token provided in them.

By implementing authentication, administrators can ensure that only trusted sources can access and trigger the Web Triggers, enhancing the overall security of their Jira or Confluence instance.


## Support and Documentation

### How can I get support for Script Master for Jira?

For support or assistance with Script Master, you can contact our customer support team or visit our community forums to connect with other users and developers.

 - [Go to Support Portal](https://kaisersoftapps.atlassian.net/servicedesk/customer/portal/1)