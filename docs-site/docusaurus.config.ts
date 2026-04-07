import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

const mainAppUrl = process.env.MAIN_APP_URL || 'http://localhost:5173';

const config: Config = {
  title: 'Programming Wiki',
  tagline: 'Learn to code with structured tutorials',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://localhost',
  baseUrl: '/',

  organizationName: 'programming-wiki',
  projectName: 'programming-wiki',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: path.resolve(
            process.env.DOCUSAURUS_CONTENT_DIR || path.join(__dirname, '../content'),
          ),
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Programming Wiki',
      logo: {
        alt: 'Programming Wiki',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: mainAppUrl,
          label: 'App home',
          position: 'left',
        },
        {
          href: `${mainAppUrl}/playground`,
          label: 'Playground',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [{label: 'Introduction', to: '/docs/intro'}],
        },
        {
          title: 'App',
          items: [
            {label: 'Home', href: mainAppUrl},
            {label: 'Playground', href: `${mainAppUrl}/playground`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Programming Wiki.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
