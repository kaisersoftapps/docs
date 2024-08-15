---
sidebar_position: 4
pagination_next: null
pagination_prev: null
---

# ▮ FieldCraft: Custom fields

## Overview

| ![](/img/field-craft-logo-144-144.png) | FieldCraft is an advanced suite of Calculated Fields designed to enhance Jira screens, filters, and dashboards. This powerful tool enables users to extract and display critical insights directly from their Jira issues, making your Jira environment more informative and actionable. |
|---|:---|


### Who is this app for?
FieldCraft is designed for a wide range of Jira users who seek to maximize the effectiveness of their Jira environment through enhanced data visibility and real-time insights. Specifically, this app is ideal for:

- **Project Managers**
  - Gain deeper insights into project progress and bottlenecks by tracking detailed transition histories and status changes.
  - Make informed decisions based on accurate, real-time data displayed directly on Jira screens and dashboards.

- **Team Leads**
  - Monitor team performance and workflow efficiency with custom metrics and actionable data.
  - Empower team members with visibility into key project details, enabling better collaboration and accountability.

- **Business Analysts**
  - Enhance reports and dashboards with precise, automatically calculated data, ensuring accuracy and reliability.
  - Utilize advanced filters and calculated fields to analyze project metrics and derive actionable insights.

- **Developers**
  - Save time by automating the calculation of complex data points within Jira, reducing manual processing tasks.
  - Access detailed information about issue transitions and status updates directly within issue screens.

- **QA/Testers**
  - Track and analyze the frequency of issue status changes, such as the number of times issues are reopened, to improve testing processes.
  - Ensure accurate reporting of test progress and outcomes through enhanced Jira dashboards.

- **Operations and Support Teams**
  - Monitor support tickets and operational tasks with detailed insights into issue histories and transitions.
  - Improve response times and service quality by utilizing real-time data calculations within Jira.


## Installation and configuration

Install the app from Atlassian Marketplace:

- [FieldCraft: Custom fields](https://marketplace.atlassian.com/apps/1234688/fieldcraft-custom-fields-for-jira-cloud?tab=overview)

All the **FieldCraft** fileds could be created and configured through the native Jira Custom fields page.
Follow the [Getting Started guide](./getting-started.md) for more details.


## Features Overview

FieldCraft provides multiple custom field types with robust configuration to customize and automate your Jira instance. Below is a brief overview of the field types available:

### [Transitions Count](./transinions-count/index.md)

**Overview:**
- Tracks how many times an issue transitions between statuses.
- Supports multiple 'from' or 'to' statuses using an OR condition.

**Use Cases:**
- Identify issues needing attention based on frequent transitions.
- Measure specific transitions as KPIs or SLA metrics.

### [First/Last Field Change Time](./field-change-time/index.md)

**Overview:**
- Displays the date and time of the first or last change to specified fields.

**Use Cases:**
- SLA tracking by monitoring the latest update time.
- Ensure compliance through audit trails of field changes.
- Analyze team efficiency by evaluating update times.

### [Time in Status](./time-in-status/index.md)

**Overview:**
- Shows the duration an issue remains in specified statuses.
- Configurable to monitor single or multiple statuses.

**Use Cases:**
- Measure cycle time and lead time for issue resolution.
- Monitor work in progress (WIP) time to optimize workflows.

### [Calculated Metrics](./metrics/index.md)

**Overview:**
- A comprehensive set of automatically generated fields that present key metrics based on predefined criteria. Select from a variety of available options, such as the number of comments, linked issues, sub-tasks, components, and more, to display specific information on an issue.

**Use Cases:**
- Automatically display the number of linked issues or sub-tasks associated with a parent issue, making it easier to monitor dependencies and progress at a glance.
- Track the number of comments on an issue to gauge the level of team engagement and communication.
- Display the number of components or custom attributes linked to an issue, providing project managers with quick insights into the complexity and scope of the task.