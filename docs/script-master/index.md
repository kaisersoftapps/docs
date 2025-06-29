---
sidebar_position: 1
---

# ▮ Script Master app

## Overview

| ![](/img/script-master-logo.png) | Script Master is a unique app built on top of the [Atlassian Forge framework](https://developer.atlassian.com/platform/forge/). It allows Atlassian Administrators to build Forge-compatible scripts, UI extensions, and integrations directly within Jira Cloud and Confluence Cloud, without the need for complex build processes or additional infrastructure. |
| -------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### Who is this app for?
First of all, it is for Atlassian Consultants and Atlassian Administrators, who need to perform bulk updates, automate tasks, extend the UI of Jira Cloud and Confluence Cloud, and create flexible integrations.

Script Master could replace dozens of other apps because you don't need to install all of them for a small UI change, bulk operation, simple custom Jira Gadget, or custom Confluence Macro. The app is ready to be used as a single source for most of the customizations your Cloud instance will ever need.


### The uniqueness of the app

<div style={{ display: "flex", gap: "20px", "justify-content": "space-between", "align-content": "center", width: "100%" }}>
  <div style={{ display: "flex", "flex-direction": "column", "justify-content": "flex-start", "align-content": "center", "align-items": "center", width: "100%" }}>
    <div>![](./img/get-started.png)</div>
    <h3>Start Small, Build Only What You Need</h3>
    <div>Jump in with minimal effort - try out the app and get a feel for the experience. With so many ways to customize Jira and Confluence, you can start with just the features you need, without worrying about disrupting anything else.</div>
  </div>
  <div style={{ display: "flex", "flex-direction": "column", "justify-content": "flex-start", "align-content": "center", "align-items": "center", width: "100%" }}>
    <div>![](./img/grow-as-you-go.png)</div>
    <h3>Grow at Your Own Pace</h3>
    <div>Get started quickly with built-in code snippets and ready-to-use examples. As your needs expand, create fully Forge-compatible apps with advanced, custom business logic - no limits, no hassle.</div>
  </div>
  <div style={{ display: "flex", "flex-direction": "column", "justify-content": "flex-start", "align-content": "center", "align-items": "center", width: "100%" }}>
    <div>![](./img/leave-anytime.png)</div>
    <h3>No Strings Attached</h3>
    <div>Outgrow the app? No problem. If your functionality gets too big, it’s easy to transition to a standalone Forge app. You’re never locked in, so you can scale however you like.</div>
  </div>
</div>

---

1. It is 100% a Forge app, and not one byte will leave your instance or Atlassian infrastructure. All the scripts and customizations are hosted directly on your instance and within the Atlassian platform.
2. It is fully compatible with the latest Forge version, and you can take the built script and start making an independent Forge app at any time if you decide that your customization requires more independence.
3. It is the one and only app that allows Administrators to create custom scripted [Issue Panels, Project Pages](./fragments/index.md), [Gadgets](./gadgets/index.md), [Custom Fields](./custom-fields/index.md), [Post-functions](./workflow-extensions/workflow-post-functions/index.md), [Macros](./macros/index.md) and many more directly inside the Jira or Confluence platform and implement all the needs of your users without installing new apps from the Marketplace.
4. It allows you to use both the [Backend API: Forge FaaS (Functions as a Service)](./forge-bridge-back/index.md) and [Frontend API: Forge Custom UI](./forge-bridge-front/index.md) directly from your Jira instance in real-time.


## Installation and configuration

Install the app from Atlassian Marketplace:

- [Script Master for Jira](https://marketplace.atlassian.com/apps/1233958/script-master-for-jira)
- [Script Master for Confluence](https://marketplace.atlassian.com/apps/1234082/script-master-for-confluence)

To access **Script Master**:

1. Log in to your instance as an administrator.
2. Navigate to the administrator menu.
3. Select **Script Master** in the Apps section.

Follow the [Getting Started guide](./getting-started.md) for more details.


## Features Overview

<!-- 
```mermaid
graph TD
    A["`**Script Master**`"] --\> B["`**Script Console**`"]
    A --\> C["`**Fragments**`"]
    A --\> D["`**Web Triggers**`"]

    subgraph Front-end scripting
    B --\> B1[REST API Exploration]
    B --\> B2[Bulk Updates]
    B --\> B3[Automate Admin Tasks]

    C --\> C1[Custom Actions]
    C --\> C2[Custom Panels]
    C1 --\> C3[HTML, CSS, JavaScript]
    C2 --\> C4[Data Visualizations]
    C3 --\> C5[Access Application Data]
    C4 --\> C6[External REST Services]
    end
    
    subgraph Back-end scripting
    D --\> D1[Respond to HTTP Requests]
    D1 --\> D2[No User Authentication Required]
    D1 --\> D3[Communicate with Jira/Confluence]
    end
``` -->


```mermaid
---
title: Script Master
---

stateDiagram-v2
    [*] --> sc
    [*] --> cui
    [*] --> fif

    state "Run Scripts" as sc {
        sc1 : Script Console 
    }
    state "Forge Custom UI" as cui {
        frag : Fragments

        frag --> frag1
        frag1 : Jira Issue Panel / Action / Project Page

        frag --> frag4
        frag4 : Confluence Content Actions / Content byline items / Space Page
       
        gadg : Jira Gadgets

        macro : Confluence Macros
    }
    state "Forge backend FaaS function" as fif {
        fif1 : Web Triggers
        fif2 : Workflow post-functions
        fif3 : Custom fields
    }
```

Script Master provides multiple ways to customize and automate your Jira and Confluence instance. Below is a brief overview of the key features available:


### Script Console

The [Script Console](./script-console/index.md) is your hub for automations. 

Use cases:

- REST API Exploration: Experiment with the [Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3) or [Confluence REST API](https://developer.atlassian.com/cloud/confluence/rest/v2) seamlessly, allowing you to test and debug API calls directly within the console.
- Bulk Updates: Execute scripts to manage multiple pieces of content efficiently. This is ideal for making large-scale changes across your instances.
- Automate Admin Tasks: Simplify and automate routine administrative duties, reducing manual effort and increasing efficiency.


### Fragments

[Fragments](./fragments/index.md) are blocks that extend the UI to display Custom UI elements in various locations in Jira and Confluence. 

With fragments, you can:

- Add new functionalities to your Jira or Confluence application.
- Create data visualizations.
- Utilize HTML, CSS styles, and JavaScript.
- Access application data or external REST services.


### Gadgets (in Jira only)

[Gadgets](./gadgets/index.md) provide Jira users with the flexibility to tailor their dashboards to their specific needs. 

These gadgets can:

- Display dynamic data
- Automate complex workflows
- Integrate seamlessly with other tools and services, enhancing productivity

By allowing users to create custom visualizations and interfaces, scripted gadgets help make informed decisions faster and streamline project management processes. This level of customization ensures that each team can have a dashboard that perfectly fits their unique requirements and operational goals.


### Macros (in Confluence only)

[Macros](./macros/index.md) for Confluence empower users to enhance and personalize their Confluence pages. 

With these macros, users can:

- Create dynamic and interactive content
- Automate data integration
- Streamline information presentation

This capability allows teams to build tailored solutions that meet specific collaboration needs, improving efficiency and user engagement. Custom Scripted Macros enable the embedding of real-time data, custom forms, and specialized content layouts, making Confluence a more powerful tool for knowledge sharing and project management.


### Web Triggers

[Web Triggers](./web-triggers/index.md) are "Forge backend FaaS function" - JavaScript functions running on the Forge backend that respond to HTTP requests. Key features include:

- No User Authentication Required: Web Triggers can be run without user authentication, making them accessible via their URL.
- Communication with Application: User can communicate with Jira or Confluence on behalf of the app using the `api.useApp()` method.


## Examples

You can find multiple ready-to-go scripts and UI customization examples directly inside the app by using the "Snippets Library".
