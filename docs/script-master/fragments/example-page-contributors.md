# Confluence Example: Get recent page contributors

:::tip Compatibility

This example for **Jira** version of [Fragments](./index.md).

:::

This script retrieves the list of recent contributors for the current page and prints them as a comma-separated string

```html
<div>
    Recent contributors: <div id='contributors'>Loading...</div>
</div>
<div id="errors" style="color:red"></div>

<script type="module">
    window.onerror = (e) => document.getElementById('errors').innerHTML = e.toString();

    const pageId = context.extension.content.id;
    const versionsResponse = await requestConfluence(`/wiki/api/v2/pages/${pageId}?include-version=false&include-versions=true`, {
        headers: {'Accept': 'application/json'}
    });
    if (versionsResponse.status !== 200) throw new Error(`Error getting page versions ${versionsResponse.statusText}`);
    const pageWithVersions = await versionsResponse.json();

    const authorIds = pageWithVersions.versions.results.map(version => version.authorId);
    const uniqueAuthorIds = [...new Set(authorIds)];
    const authorsQueryParams = uniqueAuthorIds.map(authorId => `accountId=${authorId}&`).join('');
    const authorsResponse = await requestConfluence(`/wiki/rest/api/user/bulk?${authorsQueryParams}`, {
        headers: {'Accept': 'application/json'}
    });
    if (authorsResponse.status !== 200) throw new Error(`Error getting contributor details ${authorsResponse.statusText}`);
    const contributorsData = await authorsResponse.json();
    
    const allContributors = contributorsData.results.map(contributor => contributor.displayName);
    const uniqueContributors = [...new Set(allContributors)];
    const result = allContributors.length ? uniqueContributors.join(', ') : 'no contributors';
    document.getElementById('contributors').textContent = result;
</script>
```