import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Leet-Robot',
  description: '基于 NodeJs 实现的 QQ BOT',

  themeConfig: {
    nav: [
      { text: '指南', link: '/introduction' },
    ],

    sidebar: [
      {
        text: '基础配置',
        collapsed: false,
        items: [
          { text: '简介', link: '/introduction' },
          { text: '快速开始', link: '/gettingStarted' },
          { text: '功能使用', link: '/function' },

        ],
      },
    ],
  },
});
