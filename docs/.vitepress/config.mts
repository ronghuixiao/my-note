import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Welcome to My Channel~",
  description: "记录我的学习和思考",
  base: '/my-note/', // 改成你的 GitHub 仓库名，如 '/my-note/'
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '玩玩什么', link: '/玩玩什么/从零搭建笔记网站教程' },
    ],
    sidebar: [
      {
        text: '玩玩什么',
        items: [
          { text: '笔记管理指南', link: '/玩玩什么/笔记管理指南' },
          { text: '从零搭建笔记网站教程', link: '/玩玩什么/从零搭建笔记网站教程' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/你的仓库名' }
    ]
  }
})