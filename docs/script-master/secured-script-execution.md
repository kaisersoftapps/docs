---
sidebar_position: 170
---

# Secured Scripts Execution

## Overview

The app allows executing custom JavaScript scripts in two modes: **Secured** and **Unsecured**.

- **Unsecured Execution** (deprecated): Scripts run directly in the shared Forge backend context. This mode is intended for testing purposes only, as it poses security risks due to shared tenancy. **We strongly advise against using this mode**.

- **Secured Execution**: Scripts are executed securely through a dedicated external app, isolating script execution from the shared Forge backend and ensuring robust security.

:::warning  

Unsecured Execution is deprecated and will be **removed in future Script Master releases**. To maximize security and prevent disruptions, configure **Secured Execution** as soon as possible.  

:::


### Affected Modules

- Web Triggers  
- Scheduled Jobs  
- Custom Fields  
- Workflow Extensions  

Administrators can execute unprotected scripts for testing purposes. However, for production use, follow this guide to configure **Secured Execution** via the dedicated companion app.


## Configuration

Follow the video guide:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player'

<ReactPlayer controls width='100%' url='https://www.youtube.com/watch?v=DQoEmN9w8-0' />


Or follow the step-by-step guide in [Script Master: Sandbox](https://github.com/kaisersoftapps/script-master-sandbox) to build, install, and configure the companion app.

On the configuration page, the status should be changed from **Unsecured Execution** to **Secured Execution**.

**Invalid Configuration** status appears when the companion app is installed but not properly configured.  
To resolve this issue:  
1. Reinstall the latest version of the companion app.  
2. Follow the configuration guide to set it up correctly.  
