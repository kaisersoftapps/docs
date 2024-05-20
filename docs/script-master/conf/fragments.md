---
sidebar_position: 30
---

# Fragments

Fragments are powerful blocks that extend the Confluence UI, allowing you to display Custom Page Actions or Content Byline Items. They provide flexibility to add new functionalities to your Confluence application or enhance data visualizations. With Fragments, you can use HTML, CSS, JavaScript, and access application data or external REST services.

### Creating and Managing Fragments

1. Navigate to the **Fragments** tab from the **Script Master** menu.
2. Choose to create a new Custom Action or Custom Panel.
3. Use HTML, CSS, and JavaScript to design your fragment.
4. Access necessary application data or external REST services to enhance functionality.

## Key Features

### Custom Actions

Custom Actions are interactive elements that you can add to the standard Confluence actions menu. They allow users to trigger specific actions or workflows with a simple click.


- **Use Cases**:
  - Triggering scripts or automations
  - Initiating workflows
  - Providing quick access to frequently used functions

- **Implementation**:
  - Define the HTML structure for the action button or link.
  - Style it using CSS to match your Confluence theme.
  - Use JavaScript to bind the action to a specific function or script.

### Custom Panels

Custom Panels are UI components that can display detailed information, charts, or any custom content. This module can be used in Confluence to enhance the user interface with additional functionalities and data visualizations.


- **Use Cases**:
  - Displaying additional page details
  - Visualizing data with charts or graphs
  - Integrating third-party service information

- **Implementation**:
  - Create the panel layout with HTML.
  - Apply CSS for styling and positioning.
  - Use JavaScript to fetch and display data, and integrate dynamic content.

## Using Fragments

### HTML, CSS, and JavaScript

When creating Fragments, you can utilize standard web technologies to build and style your custom actions and panels.

- **HTML**: Define the structure and elements of your fragment.
- **CSS**: Style your fragment to ensure it integrates seamlessly with the Confluence UI.
- **JavaScript**: Add interactivity, fetch data from Confluence or external APIs, and handle user events.

### Accessing Application Data

Fragments can interact with Confluence's internal data as well as external REST services. This allows you to create dynamic and context-aware UI components.

- **Internal Data**: Use Confluence's REST API to fetch and manipulate data related to pages, spaces, users, and more.
- **External Data**: Make external REST API calls to integrate data from other services or databases.

### Bridge Methods Available in Fragments

- **[requestConfluence](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/requestConfluence/)**: The `requestConfluence` bridge method enables your script to call the Confluence Cloud platform REST API as the current user.
- **context**: The `context` object contains various parameters based on the current page and module type.
- **[router](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/router/)**: The `router` object allows you to navigate the host product to another page.



## Conclusion

Fragments are a versatile way to enhance your Jira instance with custom actions and panels. By leveraging HTML, CSS, and JavaScript, you can create dynamic and interactive UI components that integrate seamlessly with Jira's existing features. Use Fragments to streamline workflows, visualize data, and add new functionality to your Jira environment.