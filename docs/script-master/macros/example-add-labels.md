# Example: Add labels

:::tip Compatibility

This example for **Confluence** version of [Macros](./index.md).

:::

Read comma-separated labels from the Macro Body and add any missing labels to the current page every time the page is opened.

```html
<!-- 
    This example allows you to configure labels, which will always be added to the page on every page view.
    It ensures that even if someone deletes the required label accidentally, it will be set back.
    Labels should be defined as a comma-separated list in the Macro Body. 
-->
<script type="module">
    setHeight('0px'); // Set the macro height as small as possible

    // Get current labels
    const context = await view.getContext();
    const response = await requestConfluence(`/wiki/api/v2/pages/${context.extension.content.id}/labels`, {
      headers: {'Accept': 'application/json'}
    });
    const labelsData = await response.json();

    // Find labels that should be added
    const requiredLabels = context.extension.config.macroBody.split(',').map(labelName => labelName.trim());
    const labelsToBeAdded = requiredLabels.filter(requiredLabel => {
        return !labelsData.results.some(pageLable => pageLable.name === requiredLabel);
    });

    // Adding labels
    const labelsAddedSuccessfully = [];
    for (const labelToAdd of labelsToBeAdded) {
        const bodyData = [{
            prefix: 'global',
            name: labelToAdd
        }];

        // Do not show any errors if a new label cannot be added, most likely due to lack of permissions
        try {
            await requestConfluence(`/wiki/rest/api/content/${context.extension.content.id}/label`, {
                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                body: JSON.stringify(bodyData),
            });

            labelsAddedSuccessfully.push(labelToAdd);
        } catch (e) {
            console.error(e);
        }
    }

    // Show a flag if a new label is added
    if (labelsAddedSuccessfully.length) showFlag({
        id: 'success-flag',
        title: 'These labels were added to the page: ' + labelsAddedSuccessfully.join(', '),
        type: 'success',
        isAutoDismiss: true,
    });
</script>
```