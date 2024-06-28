# Jira Example: Bulk Clone Issues

:::tip Compatibility

This example for **Jira** version of [Script Console](./index.md).

:::

The script for the Scripted Console in Jira clones up to 50 issues based on a specified JQL (Jira Query Language) query. Admin input a JQL query to select issues, and the script retrieves issues using Jira REST API. It then clones each issue and logging the new issue keys. The process is designed to handle errors, manage performance by limiting the number of issues cloned, and ensure unique fields are appropriately managed. This script streamlines the task of cloning multiple Jira issues efficiently and consistently.

```javascript
// You can use JQL to select Jira issues for cloning. You can clone up to 50 issues at a time

// Configuration variables
const jql = 'filter = 10001';
const cloneFields = [
  'assignee', 'components', 'description', 'fixVersions', 'issuetype', 'labels', 'priority', 'project', 'summary',
  // Other required system fields
  // Add required custom fields as well
];
const newProjectKey = ''; // leave empty to create issues in the same project
const summaryPrefix = 'Cloned - '; // leave empty to create issues without any prefix

// Script
// Search for issues using JQL https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-get, pay attention, only first 50 issues will be returned
const issuesResponse = await requestJira(`/rest/api/3/search?jql=${jql}`, {
  headers: {
    'Accept': 'application/json'
  }
});
const issuesData = await issuesResponse.json();

const output = [];
for (const issue of issuesData.issues) {
  const newIssue = { fields: {} };
  for (const cloneField of cloneFields) {
    newIssue.fields[cloneField] = issue.fields[cloneField];
  }

  if (newProjectKey) newIssue.fields.project = { key: newProjectKey };
  if (summaryPrefix) newIssue.fields.summary = `${summaryPrefix}${issue.fields.summary}`;

  // Create issue https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post
  const response = await requestJira(`/rest/api/3/issue`, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(newIssue)
  });

  if (response.status === 201) {
    const clonedIssue = await response.json();
    output.push(`${issue.key} is cloned as ${clonedIssue.key}`)
  } else {
    const clonedIssueError = await response.json();
    output.push(`${issue.key} is not cloned because of ${JSON.stringify(clonedIssueError)}`)
  }
}
return output.join('\n');
```