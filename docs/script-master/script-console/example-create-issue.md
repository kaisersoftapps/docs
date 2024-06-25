# Jira Example: Automate creating issues

:::tip Compatibility

This example for **Jira** version of [Script Console](./index.md).

:::

This script saves time and effort by automating the issue creation process.

```javascript
/* Example of issue creation */
/* REST API in this example https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post */
const postIssue = async (issue) => {
  const response = await requestJira('/rest/api/3/issue', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: issue,
  });

  return await response.json();
};

// issue object payload
const payload = {
  update: {},
  fields: {
    summary: 'Sample issue, created by Script Master',
    issuetype: { id: '10002' },
    project: { key: 'MC' },
    description: {
      type: 'doc', version: 1, content: [
        {
          type: "paragraph",
          content: [
            {
              text: "As a User, I want to...",
              type: "text",
            },
          ],
        },
      ],
    }
  }
};

const issueCreationResponse =  await postIssue(JSON.stringify(payload));
return JSON.stringify(issueCreationResponse);
```