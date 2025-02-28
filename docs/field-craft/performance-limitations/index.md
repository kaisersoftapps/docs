---
sidebar_position: 900
---

# Performance and limitations

FieldCraft, as an [Atlassian Forge](https://developer.atlassian.com/platform/forge/) app, provides **Calculated Custom Fields** functionality and has some limitations due to the Forge platform's architecture.

## ⚠️ Key Limitations

- **Field values update only in Issue View**  
  Custom field values are recalculated **only when a user opens an issue in Issue View mode**.  
  If an issue is updated via **automation, REST API, or other background processes**, the custom field values will **not** be updated automatically until a user manually views the issue.

- **Old issues remain without values until opened**  
  If a custom field is added to existing issues, those issues **will not have values until a user opens them**.  
  This means historical issues remain unchanged until accessed.

- **Recommendation for updating old issues**  
  To populate values for all existing issues when a new custom field is added, we recommend using the [**Reindex**](../reindex/index.md) feature.  
  This operation must be performed by a **Jira administrator**, as it triggers a full recalculation of custom fields across all issues.

These limitations are due to the way Forge handles background execution and cannot be bypassed at the moment.
