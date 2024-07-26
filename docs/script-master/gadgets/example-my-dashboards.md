# Example: My Dashboards

:::tip Compatibility

This example for **Jira** version of [Gadgets](./index.md).

:::

This gadget provides a comprehensive list of all dashboards associated with the current user. It consolidates your dashboards in one convenient location, making it easy to access and manage your data visualizations.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atlaskit/css-reset@3.0.1/dist/bundle.css" />  <!-- Reset fonts, padding, margins to default in Atlaskit -->

<span id="loader">Loading...</span>
<ul id="dashboards" style="margin: 0px; display: none"></ul>

<script type="module">
    const context = await view.getContext();
    const response = await requestJira(`/rest/api/3/dashboard/search?accountId=${context.accountId}`, {
        headers: { 'Accept': 'application/json' }
    });
    const data = await response.json();

    const dashboardLink = (dashboardId, dashboardName) => `<li><a href="/jira/dashboards/${dashboardId}">${dashboardName}</a></li>`;
    for (const dashboard of data.values) {
        document.getElementById('dashboards').innerHTML += dashboardLink(dashboard.id, dashboard.name);
    }

    const elements = document.querySelectorAll('#dashboards a');
    elements.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            router.open(e.target.getAttribute('href'));
        });
    });

    document.querySelector('#loader').style.display = 'none';
    document.querySelector('#dashboards').style.display = 'block';

    setHeight(document.querySelector('#dashboards').scrollHeight + 'px');
</script>
```