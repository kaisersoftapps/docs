# Migrate to Forge

## Overview

Script Master is built on top of the Forge framework. All modules in the app are fully compatible with standard Forge modules, as Script Master essentially acts as a smart wrapper around the Forge SDK.

There are two main types of modules to be aware of:

- **Front-end modules** – Wrap Forge Custom UI components to handle user interface elements.
- **Back-end modules** – Manage server-side logic and data processing.

When you write a custom script, Script Master automatically wraps it with the necessary imports for global objects and includes a set of predefined helper functions - so you can focus on writing the core logic.


```js
import api, { authorize, fetch, route } from '@forge/api';

// your script will be executed here
```

## Script Master for Jira → Forge Modules Parity

The table below maps Script Master modules to their equivalent Forge modules. This demonstrates how closely Script Master aligns with Forge's native module architecture:

| Script Master Module                                                                         | Forge Module                                                                                                                |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [Fragment: Issue Panel](https://kaisersoftapps.github.io/docs/docs/script-master/fragments)  | [Jira Issue Panel](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-issue-panel/)             |
| [Fragment: Issue Action](https://kaisersoftapps.github.io/docs/docs/script-master/fragments) | [Jira Issue Action](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-issue-action/)           |
| [Fragment: Project Page](https://kaisersoftapps.github.io/docs/docs/script-master/fragments) | [Jira Project Page](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-project-page/)           |
| [Fragment: Global Page](https://kaisersoftapps.github.io/docs/docs/script-master/fragments)  | [Jira Admin Page](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-admin-page/)               |
| [Web Trigger](https://kaisersoftapps.github.io/docs/docs/script-master/web-triggers)         | [Web Trigger](https://developer.atlassian.com/platform/forge/manifest-reference/modules/web-trigger/)                       |
| [Scheduled Job](https://kaisersoftapps.github.io/docs/docs/script-master/scheduled-jobs)     | [Scheduled Trigger](https://developer.atlassian.com/platform/forge/manifest-reference/modules/scheduled-trigger/)           |
| [Custom Field](https://kaisersoftapps.github.io/docs/docs/script-master/custom-fields)       | [Jira Custom Field Type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) |
| [Gadgets](https://kaisersoftapps.github.io/docs/docs/script-master/gadgets)                  | [Jira Dashboard Gadget](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-dashboard-gadget/)   |

---

## Migrating a Fragment Script to a Pure Forge App

Since Script Master acts as a thin layer over Forge, migrating to a standalone Forge app is not only possible - it's often quite straightforward.  
You can continue developing your solution independently, without relying on Script Master.

**Let’s walk through an example of migrating an Issue Panel fragment to a pure Forge app.**

### Example: Issue Panel Fragment

Imagine you have a fragment script that retrieves the history of the current issue and extracts the names of all users who've updated it - essentially identifying the issue's contributors.

Here's what such a fragment might look like:


```html
<!-- This example displays issue contributors, listing all users who have edited this issue -->
<!-- REST API in this example https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-changelog-get -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atlaskit/css-reset" />  <!-- Reset fonts, padding, margins to default in Atlaskit -->
<div>
    Contributors: <div id='contributors'>Loading...</div>
</div>

<script type="module">
     // Dark theme support
    document.querySelector(":root").setAttribute("data-color-mode", theme.colorMode);
    document.querySelector(":root").setAttribute("data-theme", `${theme.colorMode}:${theme.colorMode}`);
    document.querySelector(":root").insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="https://forge.cdn.prod.atlassian-dev.net/atlaskit-tokens_${theme.colorMode}.css" />`);
   
    const context = await view.getContext();
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

    console.error('uniqueContributorsList', uniqueContributorsList);

    document.getElementById('contributors').textContent = uniqueContributorsList;

    // Resize window
    setHeight(document.querySelector(':root').scrollHeight + 'px');
</script>
```

So it's a mix of HTML for layout and JavaScript for business logic.

---

### Create a Forge App

Start by creating a new Forge app using the `forge create` command from the [Forge CLI](https://developer.atlassian.com/platform/forge/cli-reference/).

When prompted, choose the following options:
- **Product**: Jira
- **UI type**: Custom UI
- **Template**: `jira-issue-panel`

Then follow the setup steps outlined in:
- [Getting Started with Forge](https://developer.atlassian.com/platform/forge/getting-started/)
- [Build a Custom UI App in Jira](https://developer.atlassian.com/platform/forge/build-a-custom-ui-app-in-jira/)

By the end, you should have a working Forge app with a “Hello, World” Issue Panel installed on your Jira Cloud instance.

---

### Migrate the Functionality

To migrate your Script Master fragment script into the newly created Forge app, follow these three steps:

1. **Add required imports**  
   Script Master automatically injects global objects into scripts. In Forge, you need to import them manually—for example, `import { requestJira, view } from '@forge/bridge';`.

2. **Wrap your business logic**  
   Use the `useEffect(() => { ... }, [])` hook to run your logic when the component loads. For example: `useEffect(() => { /* your business logic here */ }, []);`.

3. **Add static HTML in the return block**  
   Place your layout inside the `return (<></>)` block. A basic example: `return (<div>Hello, contributors!</div>);`.

> **Note:**  
> It’s a good idea to refactor your logic into small, standalone functions. If your code is already modular, you can usually reuse it with minimal changes.

Once complete, your Forge app will mirror the functionality of your Script Master fragment—most static HTML and logic can be transferred directly.

```jsx
import { requestJira, view } from '@forge/bridge';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const context = await view.getContext();
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
    })();
  }, []);

  return (
    <div>
      Contributors: <div id='contributors'>Loading...</div>
    </div>
  );
}

export default App;
```

## Test Your App

Once your script has been migrated and your app is ready, follow the standard steps to test a Forge app:

1. Build (or auto-build) the Custom UI project inside its folder.  
   For example, run `yarn build` or use `yarn dev` for live reloads during development.

2. Deploy the app to the Forge infrastructure using `forge deploy`.

3. Install the app to your Jira Cloud instance with `forge install`.

After completing these steps, your Forge app should be active on your Jira site, and the Issue Panel will display the list of contributors as expected.

---

## Conclusion

Since Script Master uses the same Forge APIs under the hood and simply wraps modules to improve accessibility and usability, migrating is straightforward.

You can start building new customizations for Jira and Confluence Cloud within minutes—without worrying about boilerplate or setup.  
Of course, this simplicity comes with some trade-offs in flexibility and control, which Forge apps can offer in full.
