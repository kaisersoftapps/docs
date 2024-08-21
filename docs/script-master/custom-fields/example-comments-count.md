# Number field. Comments count

This example of a Number scripted field returns the count of comments for the current issue. 
It uses a clever workaround with the "startAt=9999&maxResults=0" parameters. 
By requesting Jira to "give me 0 issue comments, starting from comment 9999," the response always returns zero results. 
However, the response includes a "total" property, which provides the total number of comments for the issue. 
This method is much faster than retrieving and counting the actual comments.

REST API for getting issue comments https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-get

```javascript
const response = await api.asUser().requestJira(route`/rest/api/3/issue/${payload.issue.id}/comment?startAt=9999&maxResults=0`, {
  headers: { 'Accept': 'application/json'}
});
const data = await response.json();

return data.total ?? 0;
```
