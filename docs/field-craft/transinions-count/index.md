# Transitions Count

## Overview

| ![](./img/transitions-count.png) | The Transitions Count field is a read-only metric that tracks how many times an issue transitions between statuses in Jira. To create and configure this field, refer to the [native Jira Custom Fields page](../getting-started.md). |
|---|:---|

When configuring this field:
- If multiple statuses are selected in the 'from' or 'to' fields, they are evaluated using an OR condition. This means that any selected status will increase the counter.

![Transition Count Configuration](./img/transition-count-config.png)


## Use Cases

- **Issue Attention Highlighting:** Helps identify issues needing more attention, such as tracking the number of times an issue is reopened.
- **Quality Assurance Metrics:** Provides KPI/SLA metrics, like counting transitions to critical statuses such as 'Escalate', crucial for support teams.


## Create and configure the custom field

Create and configure your custom field by following the instructions in our [Getting Started](../getting-started.md) guide on FieldCraft Custom Field Configuration.