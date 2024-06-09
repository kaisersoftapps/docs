---
sidebar_position: 10
---

# Getting Started

## Quick Start

Welcome to **Script Master**! This quick start guide will help you get up and running with our powerful customization and automation tools for Jira and Confluence Cloud.

### Installation

After installing **Script Master**, the app will be available from the Administrator menu. Please note that only Application Administrators will have access to this menu and the app.

Marketplace:

- [**Script Master for Jira**](https://marketplace.atlassian.com/apps/1233958/script-master-for-jira)
- [**Script Master for Confluence**](https://marketplace.atlassian.com/apps/1234082/script-master-for-confluence)


### Accessing Script Master

To access **Script Master for Jira**:

1. Log in to your Jira instance as an administrator.
2. Navigate to the Jira administrator menu.
3. Select **Script Master** in the Apps section.

<img src={require('/img/Screenshot2024-05-19at19.07.28.png').default} style={{width: 300}} />


To access **Script Master for Confluence**:

1. Log in to your Confluence instance as an administrator.
2. Navigate to the Confluence administrator menu.
3. Select **Script Master** in the Apps section.

<!-- <img src={require('/img/Screenshot2024-05-19at19.07.28.png').default} style={{width: 300}} /> -->


### Start your customization journey with one of the modules

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
        %% note right of sc1 : This is the note to the left.
    }
    state "Forge Custom UI" as cui {
        cui1 : Fragments
        %% note right of cui1 : This is the note to the left.

        cui1 --> ip1
        ip1 : Issue Panel

        cui1 --> ip2
        ip2 : Issue Action

        cui1 --> ip3
        ip3 : Project Page
       
        cui2 : Gadgets
        %% note right of cui2 : This is the note to the left.
    }
    state "Forge backend FaaS function" as fif {
        fif1 : Web Triggers
        %% note right of fif1 : This is the note to the left.
    }
```

- [Script Console](./script-console/index.md)
- [Fragments](./fragments/index.md)
- [Gadgets](./gadgets/index.md)
- [Macros](./macros/index.md)
- [Wen Triggers](./web-triggers/index.md)