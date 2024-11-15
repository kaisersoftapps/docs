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
    component: ComponentCreator('/docs/docs', 'ed5'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', 'a41'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '24a'),
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
                path: '/docs/docs/config-master',
                component: ComponentCreator('/docs/docs/config-master', 'd8f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft',
                component: ComponentCreator('/docs/docs/content-craft', '0ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax', '48a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/block-diagrams-documentation',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/block-diagrams-documentation', 'a5a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/class-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/class-diagrams', 'd12'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/entity-relationship-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/entity-relationship-diagrams', '1c7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/flowcharts',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/flowcharts', '207'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/gantt-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/gantt-diagrams', 'd05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/gitgraph-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/gitgraph-diagrams', '697'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/mindmap',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/mindmap', '68c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/pie-chart-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/pie-chart-diagrams', '7bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/quadrant-chart',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/quadrant-chart', '21c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/requirement-diagram',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/requirement-diagram', '66e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/sankey-diagram',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/sankey-diagram', '92b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/sequence-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/sequence-diagrams', '9e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/state-diagrams',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/state-diagrams', '3de'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/timeline',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/timeline', 'dd2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/user-journey-diagram',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/user-journey-diagram', 'bec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/content-craft/mermaid-syntax/xy-chart',
                component: ComponentCreator('/docs/docs/content-craft/mermaid-syntax/xy-chart', '9c6'),
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
                path: '/docs/docs/field-craft/metrics',
                component: ComponentCreator('/docs/docs/field-craft/metrics', 'fd1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/modified-by',
                component: ComponentCreator('/docs/docs/field-craft/modified-by', 'cc4'),
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
                path: '/docs/docs/field-craft/reindex',
                component: ComponentCreator('/docs/docs/field-craft/reindex', '087'),
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
                path: '/docs/docs/field-craft/troubleshooting-and-support',
                component: ComponentCreator('/docs/docs/field-craft/troubleshooting-and-support', '3df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/field-craft/work-calendars',
                component: ComponentCreator('/docs/docs/field-craft/work-calendars', 'eee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/free-view',
                component: ComponentCreator('/docs/docs/free-view', 'd7c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/host-checker',
                component: ComponentCreator('/docs/docs/host-checker', '03a'),
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
                path: '/docs/docs/script-master/custom-fields/example-attachments-count',
                component: ComponentCreator('/docs/docs/script-master/custom-fields/example-attachments-count', '88b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/custom-fields/example-comments-count',
                component: ComponentCreator('/docs/docs/script-master/custom-fields/example-comments-count', '36d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/custom-fields/example-parent-assignee',
                component: ComponentCreator('/docs/docs/script-master/custom-fields/example-parent-assignee', 'b57'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/custom-fields/example-parent-status',
                component: ComponentCreator('/docs/docs/script-master/custom-fields/example-parent-status', '5ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/custom-fields/example-sub-tasks-count',
                component: ComponentCreator('/docs/docs/script-master/custom-fields/example-sub-tasks-count', '003'),
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
                path: '/docs/docs/script-master/workflow-extensions',
                component: ComponentCreator('/docs/docs/script-master/workflow-extensions', '887'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-extensions/workflow-conditions',
                component: ComponentCreator('/docs/docs/script-master/workflow-extensions/workflow-conditions', '6b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-extensions/workflow-post-functions',
                component: ComponentCreator('/docs/docs/script-master/workflow-extensions/workflow-post-functions', 'f0c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-extensions/workflow-post-functions/example-add-comment',
                component: ComponentCreator('/docs/docs/script-master/workflow-extensions/workflow-post-functions/example-add-comment', 'f85'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/script-master/workflow-extensions/workflow-validators',
                component: ComponentCreator('/docs/docs/script-master/workflow-extensions/workflow-validators', '197'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/secrets',
                component: ComponentCreator('/docs/docs/secrets', '06a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/docs/security-policy',
                component: ComponentCreator('/docs/docs/security-policy', '0fc'),
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
                path: '/docs/docs/team-voice/permissions',
                component: ComponentCreator('/docs/docs/team-voice/permissions', '745'),
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
