# Example: Embed Plans iframe

:::tip Compatibility

This example for **Jira** version of [Gadgets](./index.md).

:::

Embed a view of your plan in Jira Gadget. Use gadget script below.

To create an <iframe> element of your plan:
1. In your plan, select Share, then choose iFrame.
2. Copy the generated iFrame using the Copy button.
2. Add this to the gadget’s HTML code below.

```html
<!-- This iframe should be replaces -->
<iframe src='https://one-atlas-abcd.atlassian.net/secure/PlanEmbeddedReport.jspa?r=g6vSh' width='1024' height='640' style='border:1px solid #ccc;'></iframe>

<script type="module">
    // Dark theme support
    document.querySelector(":root").setAttribute("data-color-mode", theme.colorMode);
    document.querySelector(":root").setAttribute("data-theme", `${theme.colorMode}:${theme.colorMode}`);
    document.querySelector(":root").insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="https://forge.cdn.prod.atlassian-dev.net/atlaskit-tokens_${theme.colorMode}.css" />`);
   
    // Resize to fit the iframe content
    setHeight(document.querySelector(':root').scrollHeight + 'px');
</script>
```