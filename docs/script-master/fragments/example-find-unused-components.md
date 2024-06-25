# Jira Example: Find unused project components

:::tip Compatibility

This example for **Jira** version of [Fragments](./index.md).

:::

As a fragment for the "Project Page" location, you can find all the components without any issues and delete them in bulk.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atlaskit/css-reset@3.0.1/dist/bundle.css" /> <!-- Reset fonts, paddings, margins to default in Atlaskit -->
<p>Empty Components: </p>
<p></p>
<p id='loading'>Loading...</p>
<p id='components'></p>
<p></p>
<button id="delete-components" style="display: none;">Delete all selected</button>

<script type="module">
  /* <BuildingBlocks> */
  const createParagraph = (children) => {
    const paragraph = document.createElement("p");
    paragraph.appendChild(children);
    return paragraph;
  }
  const createCheckbox = (id, name) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.name = name;
    checkbox.value = id;
    checkbox.checked = true;
    const textContent = document.createTextNode(name);

    label.appendChild(checkbox);
    label.appendChild(textContent);
    return label;
  }

  const getComponentsRecursive = async (projectKey, startAt = 0, components = []) => {
    const maxResults = 2;
    const response = await requestJira(`/rest/api/3/project/${projectKey}/component?startAt=${startAt}&maxResults=${maxResults}`, {
      headers: { 'Accept': 'application/json' }
    });
    const responseData = await response.json();
    components.push(...responseData.values);

    if (responseData.isLast) return components;
    return await getComponentsRecursive(projectKey, startAt + maxResults, components);
  }
  /* </BuildingBlocks> */

  const context = await view.getContext();
  const projectKey = context.extension.project.key;
  const allComponents = await getComponentsRecursive(projectKey);
  for (const component of allComponents) {
    if (component.issueCount === 0) {
      document.getElementById('components').appendChild(
        createParagraph(createCheckbox(component.id, component.name))
      );
    }
  }

  setHeight((document.querySelector('body').scrollHeight + 20) + 'px'); // Update page size after all checkboxes creation

  document.getElementById('loading').style.display = 'none';
  document.getElementById('delete-components').style.display = 'block';

  document.querySelector('#delete-components').addEventListener('click', async () => {
    for (const checkBox of document.querySelectorAll('input:checked')) {
      await requestJira(`/rest/api/3/component/${checkBox.value}`, { method: 'DELETE' });
      showFlag({
        id: 'success-flag',
        title: `${checkBox.name} deleted!`,
        type: 'info',
        isAutoDismiss: true,
      });
    }
  });
</script>
```