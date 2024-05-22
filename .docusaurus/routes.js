import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '6a6'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '138'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '2a7'),
            routes: [
              {
                path: '/docs/docs/ask-for-help',
                component: ComponentCreator('/docs/docs/ask-for-help', '372'),
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
                path: '/docs/docs/script-master/faq',
                component: ComponentCreator('/docs/docs/script-master/faq', 'a5a'),
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
                path: '/docs/docs/script-master/getting-started',
                component: ComponentCreator('/docs/docs/script-master/getting-started', 'dbe'),
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
