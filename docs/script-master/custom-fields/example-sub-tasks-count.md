# Number field. Sub-tasks count

This example of a Number scripted field returns the count of sub-tasks for the current issue. 

```javascript
const response = await api.asUser().requestJira(route`/rest/api/3/issue/${payload.issue.id}?fields=sub-tasks`, {
  headers: { Accept: 'application/json' },
});

const data = await response.json();

return data.fields?.['sub-tasks']?.length ?? 0;
```