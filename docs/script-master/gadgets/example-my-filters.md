# Example: My Filters gadget

:::tip Compatibility

This example for **Jira** version of [Gadgets](./index.md).

:::

This gadget provides a comprehensive list of all filters associated with the current user. By consolidating your filters in one convenient location, it ensures easy access and management. This gadget is quite similar to the [My Dashboards gadget](./example-my-dashboards.md).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atlaskit/css-reset" />  <!-- Reset fonts, padding, margins to default in Atlaskit -->

<span id="loader">Loading...</span>
<ul id="filters" style="margin: 0px; display: none"></ul>

<script type="module">
    const context = await view.getContext();
    const filtersResponse = await requestJira(`/rest/api/3/filter/my`, {
        headers: { 'Accept': 'application/json' }
    });
    const filters = await filtersResponse.json();

    const filterLink = (filterId, filterName) => `<li><a href="/issues/?filter=${filterId}">${filterName}</a></li>`;
    for (const filter of filters) {
        document.getElementById('filters').innerHTML += filterLink(filter.id, filter.name);
    }

    const elements = document.querySelectorAll('#filters a');
    elements.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            router.open(e.target.getAttribute('href'));
        });
    });

    document.querySelector('#loader').style.display = 'none';
    document.querySelector('#filters').style.display = 'block';

    setHeight(document.querySelector('#filters').scrollHeight + 'px');
</script>
```