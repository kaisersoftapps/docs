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
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '2bc'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '5b9'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', 'b54'),
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
                path: '/docs/docs/script-master/gadgets',
                component: ComponentCreator('/docs/docs/script-master/gadgets', '666'),
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
                path: '/docs/docs/script-master/script-console',
                component: ComponentCreator('/docs/docs/script-master/script-console', '1fe'),
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
                path: '/docs/docs/team-voice',
                component: ComponentCreator('/docs/docs/team-voice', '277'),
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
