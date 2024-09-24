import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Leet-Robot',
  description: '基于 NodeJs 实现的 QQ BOT',
  base: '/robot-vitepress/',

  themeConfig: {
    logo: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/introduction' },
      { text: '制作者', link: '/team' },
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
      }
    ],
  },
});
