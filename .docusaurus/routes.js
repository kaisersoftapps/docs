import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'e82'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', 'ca0'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '4a8'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '144'),
            routes: [
              {
                path: '/docs/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/docs/category/tutorial---basics', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/docs/category/tutorial---extras', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/script-master',
                component: ComponentCreator('/docs/docs/script-master', '482'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/ask-for-help',
                component: ComponentCreator('/docs/docs/script-master/ask-for-help', '661'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/conf',
                component: ComponentCreator('/docs/docs/script-master/conf', '8f7'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/conf/faq',
                component: ComponentCreator('/docs/docs/script-master/conf/faq', '858'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/conf/fragments',
                component: ComponentCreator('/docs/docs/script-master/conf/fragments', '3df'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/conf/getting-started',
                component: ComponentCreator('/docs/docs/script-master/conf/getting-started', '68a'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/conf/script-console',
                component: ComponentCreator('/docs/docs/script-master/conf/script-console', 'ffa'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/jira',
                component: ComponentCreator('/docs/docs/script-master/jira', 'd46'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/jira/faq',
                component: ComponentCreator('/docs/docs/script-master/jira/faq', '3bf'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/jira/fragments',
                component: ComponentCreator('/docs/docs/script-master/jira/fragments', '9d7'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/jira/getting-started',
                component: ComponentCreator('/docs/docs/script-master/jira/getting-started', 'c27'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/jira/script-console',
                component: ComponentCreator('/docs/docs/script-master/jira/script-console', 'cf7'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/privacy-policy',
                component: ComponentCreator('/docs/docs/script-master/privacy-policy', 'e23'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/script-master/terms-of-use',
                component: ComponentCreator('/docs/docs/script-master/terms-of-use', 'f64'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/docs/tutorial-basics/congratulations', 'bf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-blog-post', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-document', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-page', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/docs/tutorial-basics/deploy-your-site', 'f1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/docs/tutorial-basics/markdown-features', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/docs/tutorial-extras/manage-docs-versions', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/docs/tutorial-extras/translate-your-site', 'd68'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
