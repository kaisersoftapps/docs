---
sidebar_position: 30
---

# REST API

:::warning

The REST API is still in beta and is subject to change.

:::

:::warning

! The request structure was updated on November 28, 2024, due to significant storage changes.

:::

Before using the REST API to access polls, please configure the [access token](../access-tokens/index.md).


## `GET` Get polls for content

Get polls related to content (issues in Jira and pages in Confluence).


### Request

**Query parameters**

- `token` (required): Your [access token](../access-tokens/index.md)
- `type` (required): 'polls' for getting polls
- `workspace` (required): Project key in Jira and Space id in Confluence
- `content` (required): Issue key for Jira and page id in Confluence
- `container` (required for Confluence only): Empty in Jira and macro id in Confluence

**Example for Jira version:**

```
https://1d609651-8def-4d6b-aadc-d4e843273d1d.hello.atlassian-dev.net/x1/xs2i4ODeo611kO2x4adU6sCYcqM?token=f991ebe3-2d93-4fd9-b8ee-4a1725c9f337&type=polls&workspace=PLAT&content=PLAT-254604

where:
- 'https://1d609651-8def-4d6b-aadc-d4e843273d1d.hello.atlassian-dev.net/x1/xs2i4ODeo611kO2x4adU6sCYcqM' = REST endpoint
- token = f991ebe3-2d93-4fd9-b8ee-4a1725c9f337
- type = polls
- workspace = PLAT
- content = PLAT-254604
```

### Responses

- `200` OK, ***application/json***, Body: Poll[]

<details>
<summary>Response example</summary>
<p>

```json
[
    {
        "settings": {
            "allowSelectionOfMultipleOptions": false,
            "resultsVisibility": "alwaysPublic",
            "endDate": "",
            "hideAbsoluteNumbers": false,
            "allowRevote": false,
            "saveParticipantNames": false,
            "closePollOnEndDate": false,
            "allowComment": false
        },
        "options": [
            {
                "id": "1",
                "title": "⭐",
                "order": 0
            },
            {
                "id": "2",
                "title": "⭐⭐",
                "order": 1
            },
            {
                "id": "3",
                "title": "⭐⭐⭐",
                "order": 2
            },
            {
                "id": "4",
                "title": "⭐⭐⭐⭐",
                "order": 3
            },
            {
                "id": "5",
                "title": "⭐⭐⭐⭐⭐",
                "order": 4
            }
        ],
        "description": "Simple scoring from 1 to 5 stars",
        "id": "ee9107b5-5041-4c15-8c76-f14404fa1fad",
        "title": "Stars from ⭐ to ⭐⭐⭐⭐⭐"
    }
]

```
</p>
</details>

- `400` Bad request. Required field is not defined in query parameters
- `403` Not permitted. 'token' is not provided or not valid
- `404` Not found. If 'pollId' is defined, but poll with this ID is not found


## `POST` Create poll for content

Creates a new poll for defined content.

### Request

**Query parameters**

- `token` (required): Your [access token](../access-tokens/index.md)
- `type` (required): 'polls' for creating new poll
- `workspace` (required): Project key in Jira and Space id in Confluence
- `content` (required): Issue key for Jira and page id in Confluence
- `container` (required for Confluence only): Empty in Jira and macro id in Confluence

**Body**

Poll

<details>
<summary>Poll object example</summary>
<p>

```json
{
  "settings": {
    "allowSelectionOfMultipleOptions": false,
    "resultsVisibility": "alwaysPublic",
    "endDate": "",
    "hideAbsoluteNumbers": false,
    "allowRevote": false,
    "saveParticipantNames": false,
    "closePollOnEndDate": false,
    "allowComment": false
  },
  "options": [
    {
      "id": "1",
      "title": "⭐",
      "order": 0
    },
    {
      "id": "2",
      "title": "⭐⭐",
      "order": 1
    },
    {
        "id": "3",
        "title": "⭐⭐⭐",
        "order": 2
    },
    {
        "id": "4",
        "title": "⭐⭐⭐⭐",
        "order": 3
    },
    {
        "id": "5",
        "title": "⭐⭐⭐⭐⭐",
        "order": 4
    }
  ],
  "description": "Simple scoring from 1 to 5 stars",
  "title": "Stars from ⭐ to ⭐⭐⭐⭐⭐"
}
```
</p>
</details>


### Responses

- `200` OK, ***application/json***, Body: Poll
- `400` Bad request. Required field is not defined in query parameters
- `403` Not permitted. 'token' is not provided or not valid


## `PUT` Update poll

Update an existed poll in defined content.

### Request

**Query parameters**

- `token` (required): Your [access token](../access-tokens/index.md)
- `type` (required): 'polls' for updating an existing poll
- `workspace` (required): Project key in Jira and Space id in Confluence
- `content` (required): Issue key for Jira and page id in Confluence
- `container` (required for Confluence only): Empty in Jira and macro id in Confluence
- `pollId` (required): Exact poll ID

**Body**

Poll

<details>
<summary>Poll object example</summary>
<p>

```json
{
  "settings": {
    "allowSelectionOfMultipleOptions": false,
    "resultsVisibility": "alwaysPublic",
    "endDate": "",
    "hideAbsoluteNumbers": false,
    "allowRevote": false,
    "saveParticipantNames": false,
    "closePollOnEndDate": false,
    "allowComment": false
  },
  "options": [
    {
      "id": "1",
      "title": "⭐",
      "order": 0
    },
    {
      "id": "2",
      "title": "⭐⭐",
      "order": 1
    },
    {
        "id": "3",
        "title": "⭐⭐⭐",
        "order": 2
    },
    {
        "id": "4",
        "title": "⭐⭐⭐⭐",
        "order": 3
    },
    {
        "id": "5",
        "title": "⭐⭐⭐⭐⭐",
        "order": 4
    }
  ],
  "description": "Simple scoring from 1 to 5 stars",
  "title": "Stars from ⭐ to ⭐⭐⭐⭐⭐",
  "id": "ee9107b5-5041-4c15-8c76-f14404fa1fad"
}
```
</p>
</details>


### Responses

- `200` OK, ***application/json***, Body: Poll
- `400` Bad request. Required field is not defined in query parameters
- `403` Not permitted. 'token' is not provided or not valid


## `DELETE` Delete poll

Delete an existing poll in defined content.

### Request

**Query parameters**

- `token` (required): Your [access token](../access-tokens/index.md)
- `type` (required): 'polls' for deleting an existing poll
- `workspace` (required): Project key in Jira and Space id in Confluence
- `content` (required): Issue key for Jira and page id in Confluence
- `container` (required for Confluence only): Empty in Jira and macro id in Confluence
- `pollId` (required): Exact poll ID

### Responses

- `200` OK
- `400` Bad request. Required field is not defined in query parameters for Jira version
- `403` Not permitted. 'token' is not provided or not valid
- `404` Not found. 'pollId' is not found