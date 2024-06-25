# Jira Example: Creating a Custom Action to show issue contributors

:::tip Compatibility

This example for **Jira** version of [Fragments](./index.md).

:::

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