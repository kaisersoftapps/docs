---
sidebar_position: 87
---

# Workflow Conditions

:::tip Compatibility

This module available in Script Master for **Jira** only.

:::


## Overview 

Script Master provides advanced workflow conditions for Jira Cloud. These conditions check requirements before enabling workflow transitions. They include checks like ensuring a summary starts with specific characters, verifying field populations, requiring a PDF attachment, or restricting transitions to certain users. Script Master uses the [Jira Expressions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) for these conditions. Users can create and edit these conditions through the Script Master interface by navigating to the workflow, selecting the condition type, and configuring the necessary expressions.

Scripted Conditions implements [Forge Jira workflow condition module](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-workflow-condition/). 


## Context

[Jira Expressions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) use JavaScript-like syntax. They support a subset of JavaScript constructs and features, here is a brief overview of some of the main ones:

- `user` (User): The user the condition is evaluated for.
- `issue` (Issue): The issue selected for the transition.
- `project` (Project): The project the issue belongs to.
- `transition` (Transition): The transition that the condition is being evaluated against.
- `workflow` (Workflow): The workflow that contains the condition.


## Examples

### Allowed Issue Types

Transition is visible only if the issue type is included in the allowed list.

```javascript
['Bug', 'Task'].includes(issue.issueType.name)
```

### Current User Comment Verification

Transition is visible only if the issue has a comment from the current user.

```javascript
issue.comments
  .filter(c => c.author.accountId == user.accountId)
  .length > 0
```