import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/search',
    component: ComponentCreator('/docs/search', 'b58'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '3f9'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', 'ab3'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '406'),
            routes: [
              {
                path: '/docs/docs/ask-for-help',
                component: ComponentCreator('/docs/docs/ask-for-help', 'ed9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/ask-for-help/create-har-file',
                component: ComponentCreator('/docs/docs/ask-for-help/create-har-file', 'e49'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/eula',
                component: ComponentCreator('/docs/docs/eula', '795'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/event-planner',
                component: ComponentCreator('/docs/docs/event-planner', '57b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft',
                component: ComponentCreator('/docs/docs/field-craft', '60e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/field-change-time',
                component: ComponentCreator('/docs/docs/field-craft/field-change-time', 'b41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/getting-started',
                component: ComponentCreator('/docs/docs/field-craft/getting-started', 'd2f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/parent-field',
                component: ComponentCreator('/docs/docs/field-craft/parent-field', '947'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/time-in-status',
                component: ComponentCreator('/docs/docs/field-craft/time-in-status', '6a7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/transinions-count',
                component: ComponentCreator('/docs/docs/field-craft/transinions-count', 'f37'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/privacy-policy',
                component: ComponentCreator('/docs/docs/privacy-policy', '905'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master',
                component: ComponentCreator('/docs/docs/script-master', '44a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/custom-fields',
                component: ComponentCreator('/docs/docs/script-master/custom-fields', '016'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/diff-between-jira-and-conf',
                component: ComponentCreator('/docs/docs/script-master/diff-between-jira-and-conf', '370'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/editor',
                component: ComponentCreator('/docs/docs/script-master/editor', '0e6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/external-editor',
                component: ComponentCreator('/docs/docs/script-master/external-editor', 'b67'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/faq',
                component: ComponentCreator('/docs/docs/script-master/faq', 'a5a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/forge-bridge-back',
                component: ComponentCreator('/docs/docs/script-master/forge-bridge-back', 'e06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/forge-bridge-front',
                component: ComponentCreator('/docs/docs/script-master/forge-bridge-front', 'c22'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/fragments',
                component: ComponentCreator('/docs/docs/script-master/fragments', '094'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/fragments/example-find-unused-components',
                component: ComponentCreator('/docs/docs/script-master/fragments/example-find-unused-components', 'e1b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/fragments/example-issue-contributors',
                component: ComponentCreator('/docs/docs/script-master/fragments/example-issue-contributors', '167'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/fragments/example-page-contributors',
                component: ComponentCreator('/docs/docs/script-master/fragments/example-page-contributors', 'f49'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/gadgets',
                component: ComponentCreator('/docs/docs/script-master/gadgets', '666'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/gadgets/example-markdown-editor',
                component: ComponentCreator('/docs/docs/script-master/gadgets/example-markdown-editor', 'fe0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/gadgets/example-my-dashboards',
                component: ComponentCreator('/docs/docs/script-master/gadgets/example-my-dashboards', '4df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/gadgets/example-my-filters',
                component: ComponentCreator('/docs/docs/script-master/gadgets/example-my-filters', '162'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/getting-started',
                component: ComponentCreator('/docs/docs/script-master/getting-started', 'dbe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/macros',
                component: ComponentCreator('/docs/docs/script-master/macros', '7ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/macros/example-add-labels',
                component: ComponentCreator('/docs/docs/script-master/macros/example-add-labels', '2bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/script-console',
                component: ComponentCreator('/docs/docs/script-master/script-console', '1fe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/script-console/example-bulk-clone-issues',
                component: ComponentCreator('/docs/docs/script-master/script-console/example-bulk-clone-issues', '36e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/script-console/example-change-filters-owner',
                component: ComponentCreator('/docs/docs/script-master/script-console/example-change-filters-owner', 'f18'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/script-console/example-create-issue',
                component: ComponentCreator('/docs/docs/script-master/script-console/example-create-issue', '2bf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/script-console/example-purge-trashed-pages',
                component: ComponentCreator('/docs/docs/script-master/script-console/example-purge-trashed-pages', '65a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/script-console/example-transfer-filters-ownership',
                component: ComponentCreator('/docs/docs/script-master/script-console/example-transfer-filters-ownership', '334'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/web-triggers',
                component: ComponentCreator('/docs/docs/script-master/web-triggers', 'aef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/web-triggers/example-authorization',
                component: ComponentCreator('/docs/docs/script-master/web-triggers/example-authorization', 'f13'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-conditions',
                component: ComponentCreator('/docs/docs/script-master/workflow-conditions', 'd2b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-post-functions',
                component: ComponentCreator('/docs/docs/script-master/workflow-post-functions', '107'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-post-functions/example-add-comment',
                component: ComponentCreator('/docs/docs/script-master/workflow-post-functions/example-add-comment', '0f0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-validators',
                component: ComponentCreator('/docs/docs/script-master/workflow-validators', '908'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/team-voice',
                component: ComponentCreator('/docs/docs/team-voice', '277'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/team-voice/access-tokens',
                component: ComponentCreator('/docs/docs/team-voice/access-tokens', '528'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/team-voice/rest-api',
                component: ComponentCreator('/docs/docs/team-voice/rest-api', 'c5b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/terms-of-use',
                component: ComponentCreator('/docs/docs/terms-of-use', '69c'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'bba'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
