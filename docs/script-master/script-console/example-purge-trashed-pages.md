# Confluence Example: Permanently purge trashed pages from multiple Confluence spaces

:::tip Compatibility

This example for **Confluence** version of [Script Console](./index.md).

:::

This script allows you to permanently delete trash from multiple Confluence spaces. Be aware that this action is irreversible; once the trash is emptied, the content cannot be recovered.

```javascript
/*
  Permanently purge trashed pages from multiple Confluence spaces.
  This script allows you to permanently delete trash from multiple Confluence spaces. 
  Be aware that this action is irreversible; once the trash is emptied, the content cannot be recovered.
*/

// Configuration variables:
const spaceKeys = ['HR', 'ITDOC'];

// Script
// REST API https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space/#api-spaces-get
const spacesResponse = await requestConfluence(`/wiki/api/v2/spaces?&keys=${spaceKeys.join(',')}`, {
  headers: { 'Accept': 'application/json' }
});
const spacesData = await spacesResponse.json();

if (!spacesData.results?.length) return 'Spaces not found';

let output = '';
for (const spaceData of spacesData.results) {
  // REST API https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-get
  const pagesResponse = await requestConfluence(`/wiki/api/v2/pages?space-id=${spaceData.id}&status=trashed&limit=250`, {
    headers: { 'Accept': 'application/json' }
  });
  const pagesData = await pagesResponse.json();

  for (const pageData of pagesData.results) {
    // REST API https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-delete
    const deletePageResponse = await requestConfluence(`/wiki/api/v2/pages/${pageData.id}?purge=true`, {
      method: 'DELETE'
    });
    if (deletePageResponse.status === 204) {
      output += `- The page '${pageData.title} (${pageData.id})' was successfully purged in the '${spaceData.name} (${spaceData.key})' space.\n`;
    } else {
      const deletePageData = await deletePageResponse.json();
      output += `- The page '${pageData.title} (${pageData.id})' was not purged in the '${spaceData.name} (${spaceData.key})' space. Reason: ${JSON.stringify(deletePageData)}\n`;
    }
  }
}

return output ? output : 'No changes made (no trashed pages found in the selected spaces)';
```