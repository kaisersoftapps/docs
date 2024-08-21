# User field. Parent Assignee

Displays the Asssignee of the parent issue.

REST API for getting issue fields https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get

```javascript
const currentIssueResponse = await api.asUser().requestJira(route`/rest/api/3/issue/${payload.issue.id}?fields=parent`);
const currentIssueData = await currentIssueResponse.json();

const parentIssueResponse = await api.asUser().requestJira(route`/rest/api/3/issue/${currentIssueData?.fields?.parent?.id}?fields=assignee`);
const parentIssueData = await parentIssueResponse.json();

return {
    accountId: parentIssueData?.fields?.assignee?.accountId
}
```