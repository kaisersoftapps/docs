---
sidebar_position: 9
pagination_prev: null
---

# ▮ Secrets: Password-Protected Content

## Overview

**Secrets for Jira: Password-Protected Content** and **Secrets for Confluence: Password-Protected Content** apps for allows users to securely store sensitive information, referred to as "secrets," within Jira issues or Confluence pages. Each secret is protected by a password, ensuring that only authorized users can access the content.

## **Key Features**

- **Secure Storage:** Secrets are stored in an encrypted format, safeguarding your sensitive data. Read more about [Forge Encrypted Storage](https://developer.atlassian.com/platform/forge/runtime-reference/storage-api-secret/)
- **Password Protection:** Each secret requires a password for access. Users must enter the correct password to unlock and view the content.
- **Editing and Management:** After unlocking a secret, users can edit its contents, change the password, or delete it.
- **User Access Control:** Secrets are accessible only to the user who unlocked them, enhancing privacy and security.

## **Getting Started**

1. **Adding a Secret:**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player'

<Tabs>
  <TabItem value="jira" label="In Jira version" default>
    - Navigate to the desired Jira issue.
    - Open "Secrets" panel.
    - Click on the Add secret button to add a new secret.
    - Fill in the required fields, including a title and password.
    - Enter the secret content and save.
  </TabItem>
  <TabItem value="conf" label="In Confluence version">
    - Navigate to the desired Confluence page.
    - Insert "Secrets" macro.
    - Click on the Add secret button to add a new secret.
    - Fill in the required fields, including a title and password.
    - Enter the secret content and save.
  </TabItem>
</Tabs>

2. **Unlocking a Secret:**
   - Access the secret within the issue.
   - Click on the "Unlock" button.
   - Enter the correct password on the Unlock screen to view the secret.

3. **Managing Secrets:**
   - Once unlocked, you can:
     - View the secret content.
     - Edit the content or password.
     - Delete the secret if no longer needed.

## **Support**

For further assistance, please contact our support team or visit our [online help center](https://kaisersoftapps.atlassian.net/servicedesk/customer/portal/1).
