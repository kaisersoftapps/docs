---
sidebar_position: 10
---

# Getting Started

## Quick Start

Welcome to **Script Master**! This quick start guide will help you get up and running with our powerful customization and automation tools for Jira Cloud and Confluence Cloud.


### Installation

Install the app from Marketplace:

- [Script Master for Jira](https://marketplace.atlassian.com/apps/1233958/script-master-for-jira)
- [Script Master for Confluence](https://marketplace.atlassian.com/apps/1234082/script-master-for-confluence)


### Accessing Script Master

After installing **Script Master**, the app will be available from the Administrator menu. Please note that only Application Administrators will have access to this menu and the app.

1. Log in to your cloud instance as an administrator.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jira" label="In Jira version" default>
    2. Navigate to the Jira administrator menu.
    3. Select **Script Master** in the Apps section.

    <img src={require('./img/jira-admin-apps.png').default} style={{width: 200}} />
  </TabItem>
  <TabItem value="conf" label="In Confluence version">
    1. Navigate to the Confluence administrator menu.
    2. Select **Script Master** in the Apps section.
   
    <img src={require('./img/conf-apps-link.png').default} style={{width: 200}} />
  </TabItem>
</Tabs>


### Configuration

The app doesn't require any additional configuration, as it serves as a configuration and automation tool itself.


### Start your customization journey with one of these modules:

- [Script Console](./script-console/index.md)
  - Powerful interface for executing and testing JavaScript code directly within the browser, offering immediate feedback and debugging capabilities. This feature allows users to streamline development processes, experiment with code snippets, and troubleshoot issues efficiently without the need for a separate development environment.
- [Fragments](./fragments/index.md)
  - Create reusable HTML and JavaScript UI blocks to extend your Jira and Confluence interfaces in multiple locations. It integrates with Forge Custom UI and Forge bridge APIs for advanced customization.
- [Gadgets](./gadgets/index.md)
  - Enhance Jira dashboards by allowing users to create and configure custom gadgets using HTML, CSS, and JavaScript. This flexibility enables dynamic visualizations, automation of workflows, and tailored interfaces, improving dashboard functionality and user interaction. It integrates with Forge Custom UI and Forge bridge APIs for advanced customization.
- [Macros](./macros/index.md)
  - Enhance page content by allowing users to create dynamic, interactive macros tailored to their needs. They enable automation, custom layouts, and data integration, improving both functionality and usability of Confluence pages.
- [Web Triggers](./web-triggers/index.md)
  - Seamless integration of Jira or Confluence with external systems via JavaScript functions that respond to HTTP requests. They require no user authentication, support robust error handling and performance optimization, and offer scalability. Key benefits include ease of communication with Jira, automation of workflows, and enhanced functionality through custom actions.
- [Custom fields](./custom-fields/)
- Workflow [Post-functions](./workflow-extensions/workflow-post-functions/index.md), [Validators](./workflow-extensions/workflow-validators/index.md), [Conditions](./workflow-extensions/workflow-conditions/index.md)

