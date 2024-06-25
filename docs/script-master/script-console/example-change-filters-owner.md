# Jira Example: Change the owner of multiple filters

:::tip Compatibility

This example for **Jira** version of [Script Console](./index.md).

:::

```javascript
/* Change the ownership of multiple filters, identified by their IDs (filterIds array), to another user (newOwnerAccountId) */

// Configuration variables
const filterIds = [10001, 10002, 10008];
const newOwnerAccountId = '0000000【ツ】0000000';

// Script
let output = '';
for (const filterId of filterIds) {
  // REST API https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filters/#api-rest-api-3-filter-id-owner-put
  const response = await requestJira(`/rest/api/3/filter/${filterId}/owner`, {
    method: 'PUT',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: `{ "accountId": "${newOwnerAccountId}" }`,
  });

  if (response.status === 204) output += `Ownership successfully changed for the filter with ID "${filterId}"\n` // OK
  else { 
    const responseData = await response.json();
    output += `Ownership could not be changed for the filter with ID "${filterId}", Error: ${responseData.errorMessages}\n` // Error
  }
}

return output;
```