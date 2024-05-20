import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9bc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '45d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1b1'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'b09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/script-master',
                component: ComponentCreator('/docs/script-master', '539'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/ask-for-help',
                component: ComponentCreator('/docs/script-master/ask-for-help', '596'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/conf',
                component: ComponentCreator('/docs/script-master/conf', 'd8b'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/conf/faq',
                component: ComponentCreator('/docs/script-master/conf/faq', '021'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/conf/fragments',
                component: ComponentCreator('/docs/script-master/conf/fragments', '033'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/conf/getting-started',
                component: ComponentCreator('/docs/script-master/conf/getting-started', '414'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/conf/script-console',
                component: ComponentCreator('/docs/script-master/conf/script-console', '0fc'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/conf/web-triggers',
                component: ComponentCreator('/docs/script-master/conf/web-triggers', '0a4'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/eula',
                component: ComponentCreator('/docs/script-master/eula', '911'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/jira',
                component: ComponentCreator('/docs/script-master/jira', 'dbb'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/jira/faq',
                component: ComponentCreator('/docs/script-master/jira/faq', '2ae'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/jira/fragments',
                component: ComponentCreator('/docs/script-master/jira/fragments', '75c'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/jira/getting-started',
                component: ComponentCreator('/docs/script-master/jira/getting-started', 'dbe'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/jira/script-console',
                component: ComponentCreator('/docs/script-master/jira/script-console', 'd32'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/jira/web-triggers',
                component: ComponentCreator('/docs/script-master/jira/web-triggers', '0cd'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/privacy-policy',
                component: ComponentCreator('/docs/script-master/privacy-policy', '164'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/script-master/terms-of-use',
                component: ComponentCreator('/docs/script-master/terms-of-use', '3a0'),
                exact: true,
                sidebar: "scriptMaster"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
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
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
