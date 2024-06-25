# Example: Embedding Markdown-Formatted Documents in Your Dashboard Gadgets

:::tip Compatibility

This example for **Jira** version of [Gadgets](./index.md).

:::

This simple yet powerful example demonstrates how to embed markdown-formatted documents into your Dashboard Gadgets. Just place your content in the textarea, and the gadget will save it to the Gadget Entity Property and render the markdown to HTML.

```html
<script src="https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js"></script>

<style>
    #edit-btn {
        display: none;
        float: right;
        position: absolute;
        top: 0;
        right: 0;
    }
    #content:hover + #edit-btn, #edit-btn:hover {
        display: inline-block;
    }
</style>

<div id="loader" style="display: none">Loading...</div>
<div id="edit-panel" style="display: none">
    <div><textarea id="textarea" rows="10" style="width:90%;"></textarea></div>
    <div><button id="save-btn">save</button></div>
</div>
<div id="view-panel" style="display: none">
    <div id="content"></div>
    <button id="edit-btn">edit</button>
</div>

<script type="module">
    const context = await view.getContext();
    const dashboardId = context.extension.dashboard.id;
    const gadgetId = context.extension.gadget.id;

    const loadContent = async () => {
        document.querySelector('#loader').style.display = 'block';
        document.querySelector('#edit-panel').style.display = 'none';
        document.querySelector('#view-panel').style.display = 'none';

        const response = await requestJira(`/rest/api/3/dashboard/${dashboardId}/items/${gadgetId}/properties/config`, {
            headers: { 'Accept': 'application/json' }
        });

        if (response.status === 404) { // property is not found
            document.querySelector('#edit-panel').style.display = 'block';
            setHeight(document.querySelector('#edit-panel').scrollHeight + 'px');
        } else {
            const responseData = await response.json();
            const { content } = responseData.value;
            const html = new showdown.Converter().makeHtml(content);

            document.querySelector('#textarea').value = content;
            document.querySelector('#content').innerHTML = html;
            document.querySelector('#view-panel').style.display = 'block';

            setHeight(document.querySelector('#view-panel').scrollHeight + 'px');
        }

        document.querySelector('#loader').style.display = 'none';
    }
    await loadContent();
   
    document.querySelector('#save-btn').addEventListener('click', async () => {
        await requestJira(`/rest/api/3/dashboard/${dashboardId}/items/${gadgetId}/properties/config`, {
            method: 'PUT',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify({ content: document.querySelector('#textarea').value } )
        });
        
        await loadContent();
    });

    document.querySelector('#edit-btn').addEventListener('click', async () => {
        document.querySelector('#view-panel').style.display = 'none';
        document.querySelector('#edit-panel').style.display = 'block';

        setHeight(document.querySelector('#edit-panel').scrollHeight + 'px');
    });
</script>
```