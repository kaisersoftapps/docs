# Number field. Attachments count

This example of a Number scripted field returns the count of attachments for the current issue. 

```javascript
const response = await api.asUser().requestJira(route`/rest/api/3/issue/${payload.issue.id}?fields=attachment`, {
  headers: { Accept: 'application/json' },
});

const data = await response.json();

return data.fields?.attachment?.length ?? 0;
```
