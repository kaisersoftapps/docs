---
sidebar_position: 30
toc_max_heading_level: 5
---

# Fragments

:::tip Compatibility

This module is available for both the Jira and Confluence versions of the app.

:::


Fragments are powerful blocks that extend the UI of Jira and Confluence, allowing you to display Custom Actions or Custom Elements in different places within the application. They provide flexibility to add new functionalities to your Jira and Confluence applications or enhance data visualizations. With Fragments, you can use HTML, CSS, and JavaScript, and access application data or external REST services.


## Creating and Managing Fragments

1. Navigate to the **Fragments** tab from the **Script Master** menu.
2. Click the "Create Fragment" button.
3. Fill in all the required fields for the new fragment.
4. Use HTML, CSS, and JavaScript inside the "Content" field to design your fragment.
5. Access necessary application data or external REST services to enhance functionality.


## Available locations

### In Jira version

#### Jira Custom Action

Custom Actions are interactive elements that you can add to standart Issue Actions menu. They allow users to trigger specific actions or workflows with a simple click.

<img src={require('/img/Screenshot2024-05-19at19.46.14.png').default} style={{width: '100%'}} />

- **Use Cases**: 
  - Triggering scripts or automations
  - Initiating workflows
  - Providing quick access to frequently used functions


#### Jira Custom Panel

Custom Panels are UI components that can display detailed information, charts, or any custom content. This module can be used in Jira Work Management, Jira Software, and Jira Service Management. It works in the new issue view but is not compatible with the old issue view.

<img src={require('/img/Screenshot2024-05-19at19.45.14.png').default} style={{width: '100%'}} />

- **Use Cases**: 
  - Displaying additional issue details
  - Visualizing data with charts or graphs
  - Integrating third-party service information


### In Confluence version

#### Confluence Custom Page Action

Page Actions are interactive elements that you can add to standart Page Actions menu. They allow users to trigger specific actions or workflows with a simple click.

<img src={require('/img/Screenshot2024-05-20at20.46.14.png').default} style={{width: '100%'}} />

- **Use Cases**: 
  - Triggering scripts or automations
  - Initiating page-related workflows
  - Providing quick access to frequently used functions


#### Confluence Custom Content byline item

Content byline items are UI components that adds an entry to the content byline section, which is the part of the content under the title that includes metadata about contributors and more.

<img src={require('/img/Screenshot2024-05-20at19.46.14.png').default} style={{width: '100%'}} />

- **Use Cases**: 
  - Displaying additional page details
  - Visualizing page data with charts or graphs
  - Integrating third-party service information


## Using Fragments

### HTML, CSS, and JavaScript

When creating Fragments, you can utilize standard web technologies to build and style your custom actions and panels.

- **HTML**: Define the structure and elements of your fragment.
- **CSS**: Style your fragment to ensure it integrates seamlessly with the Jira UI.
- **JavaScript**: Add interactivity, fetch data from Jira/Confluence or external APIs, and handle user events.

### Accessing Application Data

Fragments can interact with internal data of Jira and Confluence as well as external REST services. This allows you to create dynamic and context-aware UI components.

- **Internal Data**: Use Jira's REST API to fetch and manipulate data related to issues, projects, users, and more.
- **External Data**: Make external REST API calls to integrate data from other services or databases.

### Bridge Methods Available in Fragments

Both in Jira and Confluence versions:
- **context**: The `context` object contains various parameters based on the current page and module type.
- [**router**](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/router/): The `router` object allows you to navigate the host product to another page.

In Jira version only:
- [**requestJira**](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestJira/): The `requestJira` bridge method enables your script to call the Jira Cloud platform REST API as the current user.

In Confluence version only:
- [**requestConfluence**](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestConfluence/): The `requestJira` bridge method enables your script to call the Jira Cloud platform REST API as the current user.


### Jira Example: Creating a Custom Action to show issue contributors

Here's a simple example to demonstrate how you can create a Custom Action that fetches and displays the list of all the user names who edited current issue.

```html
<div>
  Contributors: <div id='contributors'>Loading...</div>
</div>

<script type="module">
  const issueKey = context.extension.issue.key;
  const response = await requestJira(`/rest/api/3/issue/${issueKey}/changelog`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const responseData = await response.json();
  const allContributors = responseData.values.map(obj => obj.author.displayName);
  const uniqueContributors = new Set(allContributors);
  const uniqueContributorsList = Array.from(uniqueContributors).join(', ');

  document.getElementById('contributors').textContent = uniqueContributorsList;
</script>
```

:::note More Examples

Find more fragment examples directly inside the app by using the "Snippets Library"

Or in our public repository [on GitHub](https://github.com/kaisersoftapps/script-master)

:::