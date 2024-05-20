---
sidebar_position: 20
---

# Script Console

## Overview
The Script Master provides a tool for executing ad hoc scripts and experimenting with the [Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro) and Forge-compatible scripts. You can input scripts directly into the Script Console editor and run them with your current permissions. It's useful for displaying information, performing one-off cleanup tasks, and bulk updating various Jira elements. For instance, as an admin, you can swiftly change the ownership of multiple filters or dashboards in bulk, rather than manually searching and updating the owner of each one individually.

[Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro)

## Getting Started with Script Console

1. Open the **Script Console** tab from the **Script Master** menu.
2. Follow the on-screen instructions to write and execute your scripts.

<img src={require('/img/Screenshot2024-05-19at19.35.44.png').default} style={{width: 600}} />


## Context

The Script Console runs all scripts in the context of the current user, adhering to their permissions. This means it cannot read or modify any content that the user does not have access to. You can use JavaScript to perform external `fetch` calls and employ special bridge methods for seamless interaction between your script and Confluence.

To output relevant information, use `console.log()` or the `return` statement at the end of your script. For more insights and examples, refer to the 'Snippets Library'.

## Bridge Methods

- **`requestJira`**: This bridge method allows your script to call the Jira Cloud platform REST API as the current user.

## Snippets Library

The in-app Snippets Library consists of various script examples that will help you get started with building amazing scripts. It explains the basics of getting data from the Jira REST API and sending POST/PUT requests, making it easier to automate and customize your Jira instance.

<img src={require('/img/Screenshot2024-05-19at19.44.14.png').default} style={{width: '100%'}} />

