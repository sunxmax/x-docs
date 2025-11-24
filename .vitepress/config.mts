import { defineConfig } from 'vitepress'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import mathjax3 from 'markdown-it-mathjax3';

const RSS: RSSOptions = {
    title: 'Lx6wZ4',
    baseUrl: 'https://xdocscn.vercel.app',
    copyright: 'Copyright (c) 2021-present, Lx6wZ4',
    description: 'feedId:67840654578173952+userId:67737338736758784'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Lx6wZ4",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+SC:wght@100..900&display=swap'
        }],
        ["script", { src: "/_vercel/insights/script.js" }],
        ["script", { src: "/_vercel/speed-insights/script.js" }],
    ],
    // <link href="https://fonts.cdnfonts.com/css/jetbrains-mono" rel="stylesheet">
    description: "记录与分享",
    lastUpdated: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        siteTitle: 'Lx6wZ4',
        nav: [
            { text: '首页', link: '/' },
            { text: '拾遗', link: '/docs/keep/', activeMatch: '/docs/keep/' },
            { text: '时光', link: '/docs/timeline/', activeMatch: '/docs/timeline/' },
        ],

        sidebar: {
            '/docs/keep/': [
                {
                    text: 'AI', collapsed: true,
                    items: [
                        { text: 'OpenAI', link: '/docs/ai' },
                    ]
                },
                {
                    text: '数据库',
                    collapsed: true,
                    items: [
                        {
                            text: '关系型',
                            items: [
                                { text: 'MySQL', link: '/docs/keep/database/RDBMS/MySQL' },
                                { text: 'Oracle', link: '/docs/keep/database/RDBMS/Oracle' },
                                { text: 'PostgreSQL', link: '/docs/keep/database/RDBMS/PostgreSQL' },
                                { text: 'SQLite', link: '/docs/keep/database/RDBMS/SQLite' },
                                { text: 'SQL Server', link: '/docs/keep/database/RDBMS/SQL Server' },
                                // { text: 'MariaDB', link: '/docs/keep/database/RDBMS/MariaDB' },
                            ]
                        },
                        {
                            text: '非关系型',
                            items: [
                                { text: 'Redis', link: '/docs/keep/database/NoSQL/Redis' },
                                { text: 'MongoDB', link: '/docs/keep/database/NoSQL/MongoDB' },
                                { text: 'Elasticsearch', link: '/docs/keep/database/NoSQL/Elasticsearch' },
                            ]
                        },
                    ]
                },
                {
                    text: '开发语言',
                    collapsed: true,
                    items: [
                        { text: 'Java', link: '/docs/keep/language/Java' },
                        { text: 'Python', link: '/docs/keep/language/Python' },
                    ]
                },
                {
                    text: '消息队列',
                    collapsed: true,
                    items: [
                        { text: 'Kafka', link: '/docs/keep/mq/kafka' },
                    ]
                },
                {
                    text: '其他',
                    collapsed: true,
                    items: [
                        { text: 'Git', link: '/docs/keep/tool/Git' },
                        { text: 'Nginx', link: '/docs/keep/tool/Nginx' },
                        { text: 'Maven', link: '/docs/keep/tool/Maven' },
                        { text: 'Docker', link: '/docs/keep/tool/Docker' },
                        { text: 'Arthas', link: '/docs/keep/tool/Arthas' },
                        { text: 'FFmpeg', link: '/docs/keep/tool/FFmpeg' },
                        { text: 'YT-DLP', link: '/docs/keep/tool/YT-DLP' },
                        { text: 'Homebrew', link: '/docs/keep/tool/Homebrew' },
                        { text: 'NVM/Volta', link: '/docs/keep/tool/NVM-Volta' },
                        { text: 'WordPress', link: '/docs/keep/tool/WordPress' },
                    ]
                },
            ],
            '/docs/timeline/': [
                {
                    text: '时间线',
                    collapsed: true,
                    items: [
                        { text: '总结', link: '/docs/timeline/summary' },
                    ]
                },
            ]
        },

        lastUpdated: {
            text: '最后更新于'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sunxmax' }
        ],

        // editLinks: true, 
        editLink: {
            pattern: 'https://github.com/sunxmax/zero-docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航',
            level: [2, 3]
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present x'
        },

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {  //这里是个大坑，zh是不生效的，改为root即可
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    markdown: {
        math: true, // 启用数学公式支持
        config: (md) => {
            md.use(mathjax3); // 注册 markdown-it-mathjax3 插件
        },
    },

    vite: {
        plugins: [
            RssPlugin(RSS)
        ]
    }
})
