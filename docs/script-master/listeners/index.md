---
sidebar_position: 62
---

# Listeners

## What are Listeners?

Somethines you need to execute a script with business logic as result of some content events, like Issue Created, Issue Updated, Page Create, Page Updated, etc. So typically listeners - are functions which executet for particular events in Jira or COnfluence and executes some logic to process its content. 


## Where are Listeners in Script Master?

We had this functionality in the app in the past, but due to Forge invocation limitation decided to remove it. Forge event listeners could produce huge amount of invocation on an activaly used instances and becuase of invocation limits some event listeners could be missed, which produces unexcepted bahaviour and not guaranteed executions. We've found a good workaround to avoid forge listeners usage, but provide similar functionality to Atlassian Admns - a combination of Automation ([Jira Automation](https://www.atlassian.com/software/jira) and [Confluence Automation](https://www.atlassian.com/software/confluence)) and [Web Triggers](../web-triggers/index.md).  
