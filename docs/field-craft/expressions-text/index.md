---
sidebar_position: 85
---

# Jira Expressions - Text

## Overview

| ![](./img/expressions-min.png) | "Jira Expressions - Text" allows to create calculated custom fields using [Jira Expressions](https://developer.atlassian.com/cloud/jira/software/jira-expressions). To create and configure this field, refer to the [native Jira Custom Fields page](../getting-started.md). |
|---|:---|


## Jira expressions syntax

To retrieve the priority of an issue's parent using [Jira Expressions](https://developer.atlassian.com/cloud/jira/software/jira-expressions), use the following:

```javascript
issue.parent?.priority?.name
```

Explanation:
* `issue.parent`: Accesses the parent issue of the current issue.​
* `?.`: The optional chaining operator ensures that if parent is null or undefined (i.e., the issue has no parent), the expression will return null instead of causing an error.​
* `.priority`: Accesses the priority field of the parent issue.​
* `.name`: Retrieves the name of the priority (e.g., "High", "Medium", "Low").


## Global variables

* `user`: The current user. Equal to null if the request is anonymous.
* `app`: This Forge app that made the request or provided the module.
* `issue`: The current issue.
* `project`: The current project.


## Examples

### Assignee's User Groups

Lists all user groups that include the current issue's assignee as a member.

```javascript
issue.assignee 
  ? issue.assignee.groups.join(', ')
  : [];
```

### Attachment Contributors

Identifies all users who have uploaded attachments to this issue.

```javascript
issue.attachments?.length
    ? issue.attachments.map(attachment => attachment.author.displayName).join(', ')
    : ''
```

### Label Count

Shows the total number of labels currently applied to the issue.

```javascript
issue.labels?.length ?? 0
```

### Parent priority

Retrieve the priority of an issue's parent

```javascript
issue.parent?.priority?.name
```


:::info

Check out the 'Snippets' section in the app for more useful examples.

:::