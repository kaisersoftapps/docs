# String field. Parent Status

Displays the status of the parent issue.

REST API for getting issue fields https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get

```javascript
const response = await api.asUser().requestJira(route`/rest/api/3/issue/${payload.issue.id}?fields=parent`, {
  headers: { 'Accept': 'application/json'}
});
const data = await response.json();

return data?.fields?.parent?.fields?.status?.name; 
```